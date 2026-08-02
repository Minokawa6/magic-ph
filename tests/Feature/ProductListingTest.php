<?php

use App\Models\Product;
use App\Enums\ProductCondition;
use App\Models\ProductListing;

// beforeEach(
//     function(){
//         $this->products = Product::factory()->count(5)->create();
//     }
// );

it('can create a new ProductListing from existing Product', function () {
    $product = Product::factory()->create();

    $response = $this->post('/product-listings', [
        'product_id' => $product->id,
        'condition' => ProductCondition::NewMint->value,
        'stock_quantity' => fake()->numberBetween(1, 10),
        'price' => 19.99,
    ]);

    $response->assertStatus(201);
});

it('rejects a non-existent product', function(){
    $response = $this->post('/product-listings', [
        'product_id' => 999999, // no product with this id
        'condition' => ProductCondition::NewMint->value,
        'stock_quantity' => 10,
        'price' => 19.99,
    ]);

    $response->assertStatus(422);
});

it('can view an Index of ProductListing', function () {
    $products = ProductListing::factory()->count(5)->create();
    $response = $this->get('/product-listings');

    $response->assertStatus(200);
    $page = visit('/product-listing');

    // Check the server-sent data (view data)
    $pageData = json_decode($page->attribute('#app', 'data-page'), true);
    expect($pageData['props']['productListings'])->toHaveCount(5);

    // Check it actually rendered in the DOM
    $page->assertCount('[data-testid="product-listing-card"]', 5);
});

it('can show a detailed ProductListing', function(){
    $product = ProductListing::factory()->create();
    $response = $this->get("/product-listing/{$product->id}");

    $response->assertStatus(200);
    
    $page = visit("/product-listing/{$product->id}");

    $pageData = json_decode($page->attribute('#app', 'data-page'), true);
    expect($pageData['component'])->toBe('ProductListings/Show'); // match your real component path
    expect($pageData['props']['productListing']['id'])->toBe($product->id);
    expect($pageData['props']['productListing']['condition'])->toBe($product->condition->value);

    $page->assertSee((string) $product->price)
         ->assertSee($product->condition->value);
});

it('redirects to index when ProductListing doesnt exist and shows an error', function (){
    $response = $this->get("/product-listing/99999");

    $response->assertRedirect('/product-listing');
    $response->assertSessionHas('error', 'This product listing does not exist or you do not have access to it.');

    $page = visit('/product-listings/99999');

    $page->assertUrlIs('/product-listing')
         ->assertSee('This product listing does not exist');
});

it('can return key information from ProductListing for a product card', function () {
    $product = ProductListing::factory()->create();
    $response = $this->getJson("/product-listings/{$product->id}/show-card");

    $response->assertSuccessful();
    $response->assertJson([
        'id' => $product->id,
        'condition' => $product->condition->value,
        'price' => $product->price,
        'stock_quantity' => $product->stock_quantity,
    ]);
});

it('can update a ProductListing', function () {
    $productListing = ProductListing::factory()->create();

    $response = $this->put("/product-listings/{$productListing->id}", [
        'condition' => ProductCondition::LightlyPlayed->value,
        'stock_quantity' => 5,
        'price' => 14.99,
    ]);

    $this->assertDatabaseHas('product_listings', [
        'id' => $productListing->id,
        'condition' => ProductCondition::LightlyPlayed->value,
        'stock_quantity' => 5,
        'price' => 14.99,
    ]);
});

it('rejects updating a ProductListing with an invalid condition', function () {
    $productListing = ProductListing::factory()->create();

    $response = $this->put("/product-listings/{$productListing->id}", [
        'condition' => 'not-a-real-condition',
        'stock_quantity' => 5,
        'price' => 14.99,
    ]);

    $response->assertStatus(422);
});

it('can delete a ProductListing', function () {
    $productListing = ProductListing::factory()->create();

    $response = $this->delete("/product-listings/{$productListing->id}");

    $response->assertStatus(204);

    $this->assertModelMissing($productListing);
});

it('returns 404 when deleting a non-existent ProductListing', function () {
    $response = $this->delete('/product-listings/99999');

    $response->assertStatus(404);
});
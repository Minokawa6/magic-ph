<?php

use Inertia\Testing\AssertableInertia as Assert;
use App\Models\ProductListing;

beforeEach(
    function () {
        $this->listings = ProductListing::factory()->count(5)->create();
    }
);

it('displays and has a collection of ProductListings', function () {
    $response = $this->get('/');

    $response->assertStatus(200);

    $props = $response->viewData('page')['props'];

    expect($props['productListings'])
        ->toHaveCount(5)
        ->each(fn($listing) => $listing->toHaveKeys([
            'id',
            'product_id',
            'condition',
            'stock_quantity',
            'price',
        ]));
});

it('displays a banner carousel and 5 Product Listing Cards', function () {
    $this->visit('/');
});

it('redirects to product/show when clicking on a Product Listing Card', function () {
    expect(true)->toBeFalse();
});

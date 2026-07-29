<?php

namespace Database\Factories;

use App\Models\ProductListing;
use App\Models\Product;
use App\Enums\ProductCondition;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ProductListing>
 */
class ProductListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => Product::factory(),
            'condition' => $this->faker->randomElement(ProductCondition::cases())->value,
            'stock_quantity' => $this->faker->numberBetween(0, 20),
            'price' => $this->faker->randomFloat(2, 1, 500),
        ];
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductListing;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $single_one = Product::create([
            'name' => 'Lightning Bolt 2x2 #117',
            'product_type' => 'single',
            'description' => 'Lightning Bolt Single',
            'slug' => 'lightning-bolt-2x2-117',
        ]);
        ProductImage::create([
            'product_id' => $single_one->id,
            'image_path' => 'images/products/lightning-bolt-2x2-117.jpg',
            'source' => 'local',
            'face' => false,
            'is_primary' => true,
            'sort_order' => 0,
        ]);
        ProductListing::create([
            'product_id' => $single_one->id,
            'condition' => 'NM',
            'stock_quantity' => 10,
            'price' => 40,
        ]);

        $single_two = Product::create([
            'name' => 'Garruk, Primal Hunter c21 #190',
            'product_type' => 'single',
            'description' => 'Garruk, Primal Hunter c21 #190',
            'slug' => 'garruk-primal-hunter-c21-190',
        ]);
        ProductImage::create([
            'product_id' => $single_two->id,
            'image_path' => 'images/products/garruk-primal-hunter-c21-190.jpg',
            'source' => 'local',
            'face' => false,
            'is_primary' => true,
            'sort_order' => 0,
        ]);
        ProductListing::create([
            'product_id' => $single_two->id,
            'condition' => 'NM',
            'stock_quantity' => 5,
            'price' => 100,
        ]);
    }
}

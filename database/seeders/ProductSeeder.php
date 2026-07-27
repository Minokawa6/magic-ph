<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductListing;
use Illuminate\Database\Seeder;
use phpDocumentor\Reflection\PseudoTypes\True_;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $singles = [
            [
                'name' => 'Garruk, Primal Hunter',
                'description' => 'Garruk, Primal Hunter c21 #190',
                'slug' => 'garruk-primal-hunter-c21-190',
                'image' => '/images/mtg-cards/c21-190-garruk-primal-hunter.jpg',
                'condition' => 'NM',
                'stock_quantity' => 5,
                'price' => 100,
            ],
            [
                'name' => 'Lightning Bolt',
                'description' => 'Lightning Bolt Single',
                'slug' => 'lightning-bolt-2x2-117',
                'image' => '/images/mtg-cards/2x2-117-lightning-bolt.jpg',
                'condition' => 'NM',
                'stock_quantity' => 10,
                'price' => 40,
            ],
            [
                'name' => 'Ancestral Recall',
                'description' => 'Ancestral Recall Single',
                'slug' => 'ancestral-recall-2ed-48',
                'image' => '/images/mtg-cards/2ed-48-ancestral-recall.png',
                'condition' => 'NM',
                'stock_quantity' => 3,
                'price' => 200,
            ],
            [
                'name' => 'Dark Ritual',
                'description' => 'Dark Ritual Single',
                'slug' => 'dark-ritual-a25-82',
                'image' => '/images/mtg-cards/a25-82-dark-ritual.png',
                'condition' => 'NM',
                'stock_quantity' => 5,
                'price' => 150,
            ],
            [
                'name' => 'Healing Salve',
                'description' => 'Healing Salve Single',
                'slug' => 'healing-salve-dvd-14',
                'image' => '/images/mtg-cards/dvd-14-healing-salve.png',
                'condition' => 'NM',
                'stock_quantity' => 8,
                'price' => 30,
            ],
            [
                'name' => 'Giant Growth',
                'description' => 'Giant Growth Single',
                'slug' => 'giant-growth-fdn-223',
                'image' => '/images/mtg-cards/fdn-223-giant-growth.png',
                'condition' => 'NM',
                'stock_quantity' => 5,
                'price' => 150,
            ]
        ];
        foreach ($singles as $single) {
            $this->createSingleProduct($single);
        }
    }

    private function createSingleProduct(array $data): void
    {
        $product = Product::create([
        'name' => $data['name'],
        'product_type' => 'single',
        'description' => $data['description'],
        'slug' => $data['slug'],
    ]);

    ProductImage::create([
        'product_id' => $product->id,
        'image_path' => $data['image'],
        'source' => 'local',
        'face' => true,
        'is_primary' => true,
        'sort_order' => 0,
    ]);

    ProductListing::create([
        'product_id' => $product->id,
        'condition' => $data['condition'],
        'stock_quantity' => $data['stock_quantity'],
        'price' => $data['price'],
    ]);
    }
}

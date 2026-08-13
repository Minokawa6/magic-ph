<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colors = [
            ['code' => 'W', 'name' => 'White', 'sort_order' => 1],
            ['code' => 'U', 'name' => 'Blue',  'sort_order' => 2],
            ['code' => 'B', 'name' => 'Black', 'sort_order' => 3],
            ['code' => 'R', 'name' => 'Red',   'sort_order' => 4],
            ['code' => 'G', 'name' => 'Green', 'sort_order' => 5],
        ];

        foreach ($colors as $color) {
            Color::updateOrCreate(['code' => $color['code']], $color);
        }
    }
}

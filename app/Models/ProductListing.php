<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\ProductCondition;

class ProductListing extends Model
{
    /** @use HasFactory<\Database\Factories\ProductListingFactory> */
    use HasFactory;
    protected $fillable = [
        'product_id',
        'condition',
        'stock_quantity',
        'price',
    ];
    protected $casts = [
        'condition' => ProductCondition::class,
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Enums\ProductType;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'product_type',
        'description',
        'slug',
    ];
    protected $casts = [
        'product_type' => ProductType::class,
    ];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function listings()
    {
        return $this->hasMany(ProductListing::class);
    }
    public function details()
    {
        return match ($this->product_type) {
            ProductType::Single => $this->hasOne(SingleDetail::class),
            ProductType::Sealed => $this->hasOne(SealedDetail::class),
            default => null,
        };
    }
}

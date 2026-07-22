<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory, Notifiable;
    protected $fillable = [
        'name',
        'product_type',
        'description',
        'slug',
    ];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function listings()
    {
        return $this->hasMany(ProductListing::class);
    }

}

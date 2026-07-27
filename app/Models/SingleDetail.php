<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SingleDetail extends Model
{
    /** @use HasFactory<\Database\Factories\SingleDetailFactory> */
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SealedDetail extends Model
{
    /** @use HasFactory<\Database\Factories\SealedDetailFactory> */
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

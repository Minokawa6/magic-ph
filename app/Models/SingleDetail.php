<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class SingleDetail extends Model
{
    /** @use HasFactory<\Database\Factories\SingleDetailFactory> */
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function colors(): BelongsToMany
    {
        return $this->belongsToMany(Color::class);
    }
}

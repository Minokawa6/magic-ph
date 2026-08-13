<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Color extends Model
{
    public $timestamps = false;
    protected $fillable = ['code', 'name', 'sort_order'];

    public function singleDetails(): BelongsToMany
    {
        return $this->belongsToMany(SingleDetail::class);
    }
}

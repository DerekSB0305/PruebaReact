<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Games extends Model
{
    /** @use HasFactory<\Database\Factories\GamesFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'classification',
        'genre',
        'price',
        'image'
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}

<?php

namespace App\Enums;

enum ProductCondition: string
{
    case NearMint = 'NM';
    case LightlyPlayed = 'LP';
    case ModeratelyPlayed = 'MP';
    case HeavilyPlayed = 'HP';
    case Damaged = 'DMG';

    public function sortOrder(): int
    {
        return match ($this) {
            self::NearMint => 0,
            self::LightlyPlayed => 1,
            self::ModeratelyPlayed => 2,
            self::HeavilyPlayed => 3,
            self::Damaged => 4,
        };
    }
}

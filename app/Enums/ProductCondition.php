<?php

namespace App\Enums;

enum ProductCondition: string
{
    case NewMint = 'NM';
    case LightlyPlayed = 'LP';
    case ModeratelyPlayed = 'MP';
    case HeavilyPlayed = 'HP';
    case Damaged = 'DMG';
}

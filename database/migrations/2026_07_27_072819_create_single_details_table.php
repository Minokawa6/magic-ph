<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('single_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->uuid('scryfall_id');
            $table->uuid('oracle_id');
            $table->string('name');
            $table->string('set'); // set code
            $table->string('set_name');
            $table->string('collector_number');
            $table->json('legalities')->nullable();
            $table->string('mana_cost');
            $table->decimal('cmc');
            $table->string('type_line');
            $table->string('rarity');
            $table->json('finishes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('single_details');
    }
};

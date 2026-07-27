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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->nullOnDelete();
            $table->uuid('uuid')->unique();
            $table->string('xendit_invoice_id')->nullable()->unique();
            $table->string('xendit_payment_id')->nullable()->unique();
            $table->decimal('amount', 8, 2)->default(0.00);
            $table->string('status')->default('pending');
            $table->date('invoice_expires_at');
            $table->timestamp('paid_at');
            $table->json('raw_payload');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};

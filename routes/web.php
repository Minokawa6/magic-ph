<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('home');
Route::get('/products', function () {
    return Inertia::render('products/Index');
});
Route::get('/product-show', function () {
    return Inertia::render('products/Show');
});
Route::get('/cart', function () {
    return Inertia::render('cart/Index');
});



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

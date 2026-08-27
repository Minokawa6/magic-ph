<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Models\ProductListing;
use App\Http\Controllers\ProductListingController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage', [
        'productListings' => ProductListing::with([
            'product',
            'product.images'
        ])->latest()->take(5)->get(),
    ]);
})->name('home');

Route::resource('productlisting', ProductListingController::class);
Route::get('/products', [ProductController::class, 'index']);
// Route::get('/product-show', function () {
//     return Inertia::render('products/Show');
// });
Route::get('/cart', function () {
    return Inertia::render('cart/Index');
});
Route::get('/profile', function () {
    return Inertia::render('profilepage');
});



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

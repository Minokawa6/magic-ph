<?php

namespace App\Http\Controllers;

use App\Models\ProductListing;
use Illuminate\Http\Request;

class ProductListingController extends Controller
{
    public function index()
    {
        $productListings = ProductListing::all();
        return inertia('ProductListings/Index', [
            'productListings' => $productListings,
        ]);
    }
}

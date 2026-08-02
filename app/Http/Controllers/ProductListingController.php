<?php

namespace App\Http\Controllers;

use App\Models\ProductListing;
use Illuminate\Http\Request;
use Number;

class ProductListingController extends Controller
{
    public function index()
    {
        $productListings = ProductListing::all();
        return inertia('ProductListings/Index', [
            'productListings' => $productListings,
        ]);
    }
        /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductListing $productListing)
    {
        //
    }

    /**
     * Returns Key Information on a product listing
     */
    public function showCard(Number $productId){

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductListing $productListing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductListing $productListing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductListing $productListing)
    {
        //
    }
}

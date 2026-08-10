<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ProductListing;
use App\Http\Requests\StoreProductListingRequest;
use App\Http\Requests\UpdateProductListingRequest;
use App\Http\Resources\ProductListingResource;

class ProductListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productListings = ProductListing::query()
            ->with(['product.images'])
            ->latest()
            ->paginate(24)
            ->withQueryString();

        return Inertia::render('products/Index', ['productListings' => ProductListingResource::collection($productListings)]);
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
    public function store(StoreProductListingRequest $request)
    {
        ProductListing::create($request->validated());
        return redirect('/productlisting');
    } 

    /**
     * Display the specified resource.
     */
    public function show(ProductListing $productListing)
    {
        $query = ProductListing::query()
            ->select(['id','condition', 'stock_quantity', 'price','product_id'])
            ->with('product.details')
            ->where('product_id', $productListing->product_id)
            ->where('stock_quantity', '>', 0)
            ->get()
            ->sortBy(fn (ProductListing $listing) => $listing->condition->sortOrder())
            ->values();
        return Inertia::render('products/Show', ['productListings' => $query]);
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
    public function update(UpdateProductListingRequest $request, ProductListing $productListing)
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

<?php

use Inertia\Testing\AssertableInertia as Assert;

test('Homepage receives and shows 5 Products', function () {
    $response = $this->get('/');

    $response->assertStatus(200);

    $response->assertInertia(fn (Assert $page) => $page
        ->component('Homepage') // whatever your page component is called, e.g. 'Home' or 'Products/Index'
        ->has('products', 5) // asserts the products prop exists and has exactly 5 items
    );
});

<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/statuses', function () {
    return [
        [
            "user" => [
                'name' => 'Joe'
            ],
            'body' => "This is status x",
            'updated_at' => "2020-03-04 14:12:13"
        ],
        [
            "user" => [
                'name' => 'Jane'
            ],
            'body' => "This is status Y",
            'updated_at' => "2020-04-24 14:12:13"
        ]
    ];
});

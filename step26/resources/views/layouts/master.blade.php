<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{config('app.name')}}</title>

    <link rel="stylesheet" href="/css/app.css">

</head>
<body>



<div id="app">

    @include('layouts.header')

        <div class="section">
            <div class="container">
                <router-view :source="source"></router-view>
            </div>
        </div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->


</div>
<script src="/js/vendor.js"></script>
<script src="/js/manifest.js"></script>

<script src="/js/app.js"></script>
</body>
</html>

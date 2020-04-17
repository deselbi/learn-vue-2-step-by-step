<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>shared state</title>



    </head>
    <body>

       <div class="content">
            content:
           <div id="root">
                <span v-text="source.coupon"></span>
               c:<coupon v-model="source.coupon"></coupon>
           </div>


       </div>
       <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
       <script src="/js/app.js"></script>
    </body>
</html>

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
       <div id="one">
           <div >@{{user.name}}</div>
           <input type="text" v-model="user.name">
       </div>

           <div id="two">
               <div>@{{user.name}}</div>
               <input type="text" v-model="user.name">
           </div>

       </div>
       <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
       <script src="/js/app.js"></script>
    </body>
</html>

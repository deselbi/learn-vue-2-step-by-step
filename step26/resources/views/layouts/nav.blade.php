<nav class="tabs">
    <div class="container">
        <ul>
            <!-- use router-link component for navigation. -->
            <!-- specify the link by passing the `to` prop. -->
            <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
            <router-link to="/" exact tag="li"><a>Home</a></router-link>
            <router-link to="/contacts" tag="li"><a>Go to Contacts</a></router-link>
            <router-link to="/employees" tag="li"><a>Go to Employees</a></router-link>
        </ul>
    </div>
</nav>

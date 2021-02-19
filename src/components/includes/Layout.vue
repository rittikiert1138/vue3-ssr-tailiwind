<template>
    <div class="LayoutDefault">
        <nav class="LayoutDefault__nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/user">User</router-link> | 
            <router-link to="/contact">Contact</router-link>
        </nav>
        <main class="LayoutDefault__main">
            <slot/>
        </main>
        <footer class="LayoutDefault__footer">
            &copy; Awesome Company
        </footer>
    </div>
</template>

<script>

export default {
  name: `LayoutDefault`,
};
</script>

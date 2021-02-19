<template>
    <div class="LayoutDefault">
        <nav class="LayoutDefault__nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/user">User</router-link>
            <!-- <a href="/">Home</a>
            <a href="/user">User</a> -->
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

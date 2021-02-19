<template>
  <layout-default>
    <ul v-if="posts.length > 0">
      <li v-for="u in posts" :key="u.id">
        {{ u.title }}
      </li>
    </ul>
  </layout-default>
</template>

<script>
import LayoutDefault from '../components/includes/Layout';
import axios from 'axios';
import { computed,defineComponent } from 'vue';
import useStore from '../store/useVuexStore';

export default defineComponent({
  name: 'Home',
  components: {
    LayoutDefault
  },
  setup() {
    const store = useStore();
    store.commit('setmetaHome');

    const posts = computed(() => store.state.post.posts);

    const fetchData = async () => {

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      store.commit('setPosts', res.data);

    };

    if (!posts.value.length) {
      fetchData();
    }

    return {
      posts,
      fetchData
    };
  },
  async serverPrefetch() {
    console.log('Home.vue -> serverPrefetch()')
    await this.fetchData();
  },
});
</script>

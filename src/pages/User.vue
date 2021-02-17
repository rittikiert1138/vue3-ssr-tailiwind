<template>
  <main-layout>
    <ul v-if="users.length > 0">
      <li v-for="u in users" :key="u.id">
         <router-link :to="{ name: 'userdetail', params: { id: u.id} }">{{ u.name }}</router-link>
      </li>
    </ul>
    <p v-else>No user</p>
  </main-layout>
</template>

<script>
import LayoutDefault from '../components/includes/Layout';
import axios from 'axios';
import { computed,defineComponent } from 'vue';
import useStore from '../store/useVuexStore';

export default defineComponent({
  name: 'Home',
  components: {
    'main-layout' :LayoutDefault
  },
  setup() {
    console.log('User.vue -> setup()')
    const store = useStore();

    const users = computed(() => store.state.user.users);

    const fetchData = async () => {

      console.log('User.vue -> fetchData()')

      const res = await axios.get('https://jsonplaceholder.typicode.com/users');

      store.commit('setUsers', res.data);

    };

    if (!users.value.length) {
      fetchData();
    }

    return {
      users,
      fetchData
    };
  },
  async serverPrefetch() {
    console.log('User.vue -> serverPrefetch()')
    await this.fetchData();
  },
});
</script>

<template>
    <main-layout>
        <div v-if="user != null">
            <h1>Name : {{user.name}}</h1>
            <h1>Email : {{user.email}}</h1>
            <h1>Phone : {{user.phone}}</h1>
            <h1>Website : {{user.website}}</h1>
        </div>
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
  props: {
    id: String,
  },
  setup(props) {

    const store = useStore();

    store.commit('setmetaProfile');

    const user = computed(() => store.state.user.user);

    const fetchData = async () => {

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`);

        store.commit('setUser', res.data);

    };

    fetchData();

    return {
        user,
        fetchData
    };
  },
  async serverPrefetch() {
    await this.fetchData();
  },
});
</script>

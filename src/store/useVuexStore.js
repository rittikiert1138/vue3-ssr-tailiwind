import { createStore } from 'vuex';
import { inject, provide } from 'vue';
import { post } from './post'
import { user } from './user'
// import axios from 'axios';

const StoreSymbol = Symbol('vuex-store')

export function _createStore() {
  return createStore({
    modules: {
      post,
      user
    }
    // state() {
    //   return {
    //     users: [],
    //     posts: []
    //   };
    // },
    // actions: {
    //   async fetchPosts({ commit }){
    //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts")

    //       // console.log(res.data)

    //       await commit("setPosts", res.data)
    //   }
    // },
    // mutations: {
      // setUsers(state, users) {
      //   users.forEach((u) => {
      //     state.users.push(u)
      //   })
      // },
      // setPosts(state, posts) {
      //   console.log(posts)
      //   posts != undefined && posts.forEach((u) => {
      //     state.posts.push(u)
      //   })
      // }
    // }
  });
}

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export default function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    throw Error('no store provided')
  }
  return store
}

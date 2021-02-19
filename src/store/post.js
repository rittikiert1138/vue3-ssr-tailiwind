// import axios from 'axios'

export const post = {
    state () {
        return {
            posts: [],
        }
    },
    mutations: {
        setPosts(state, posts) {
            console.log('mutations setPosts')
            posts.forEach((u) => {
              state.posts.push(u)
            })
        }
    },
    getters: {
        posts: state => state.posts
    }
};

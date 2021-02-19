export const user = {
    state () {
        return {
            users: [],
            user: null,
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = []
            state.user = null
            users.forEach((u) => {
              state.users.push(u)
            })
        },
        setUser(state, user) {
            state.users = []
            state.user = null
            state.user = user
            
        },
    },
    getters: {
        users: state => state.users,
        user: state => state.user
    }
};

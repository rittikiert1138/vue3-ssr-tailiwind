export const user = {
    state () {
        return {
            users: [],
            user: null
        }
    },
    mutations: {
        setUsers(state, users) {
            console.log('mutations setUsers')
            state.users = []
            state.user = null
            users.forEach((u) => {
              state.users.push(u)
            })
        },
        setUser(state, user) {
            console.log('mutations setUser')
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

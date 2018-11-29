import fetch from 'isomorphic-unfetch';

const indexModel = {
  state: {
		login: false,
		
  },
  reducers: {
			updateState(state,payload) {
            return {
                ...state,
                ...payload,
            }
        }
  },
  effects: {
    async fetchUsers (payload, rootState) {
      try {
        this.requestUsers()
        const response = await fetch('https://api.github.com/users')
        const users = await response.json()
        this.receiveUsers(users)
      } catch (err) {
        console.log(err)
        this.receiveUsers([])
      }
    }
  }
}

export default indexModel
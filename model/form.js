
const formModel = {
  state: {
		login: false,
		
  }, // initial state
  reducers: {
			updateState(state,payload) {
            return {
                ...state,
                ...payload,
            }
        }
  },
  effects: {
    
  }
}

export default formModel
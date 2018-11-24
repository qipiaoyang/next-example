import { init } from '@rematch/core'
import indexModel from "./index";

// rematch store with initialValue set to 5
export const initStore = (initialState = { counter: 5 }) => {
  return init({
    models: {
      indexModel
    },
    redux: {
      initialState
    }
  })
}

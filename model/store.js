import { init } from '@rematch/core'
import indexModel from "./index";
import formModel from "./form";

// rematch store with initialValue set to 5
export const initStore = (initialState) => {
  return init({
    models: {
      indexModel,
			formModel,
    },
    redux: {
      initialState
    }
  })
}

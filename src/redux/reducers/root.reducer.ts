import authReducer from "./auth.slice";
import listReducer from './list.slice'

const rootReducer = {
  auth: authReducer,
  list: listReducer
};

export default rootReducer;

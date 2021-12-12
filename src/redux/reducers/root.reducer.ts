import authReducer from "./auth.slice";
import listReducer from './list.slice'
import selectedlistSlice from "./selectedlist.slice";

const rootReducer = {
  auth: authReducer,
  list: listReducer,
  selectedList: selectedlistSlice
};

export default rootReducer;

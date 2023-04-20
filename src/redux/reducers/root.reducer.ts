import authReducer from "./auth.slice";
import listReducer from './list.slice'
import selectedlistSlice from "./selectedlist.slice";
import importantTodosSlice from './importantlist.slice'

const rootReducer = {
  auth: authReducer,
  list: listReducer,
  selectedList: selectedlistSlice,
  importantTodos: importantTodosSlice
};

export default rootReducer;

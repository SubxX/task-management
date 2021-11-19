import "./styles/components.css";
import Routes from "./routes";
import store from "./redux/store/app.store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

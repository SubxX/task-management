import SidebarWrapper from "../../components/sidebar/SidebarWrapper";
import { Switch, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoHome from "./pages/TodoHome";
import ImportantList from "./pages/ImportantList";
import useInitApp from "./hooks/useInitApp";

const App = () => {
  useInitApp();

  return (
    <div className="lg:flex">
      <SidebarWrapper />
      <Switch>
        <Route path="/app" exact component={TodoHome} />
        <Route path="/app/important" component={ImportantList} />
        <Route path="/app/:listid" component={TodoList} />
      </Switch>
    </div>
  );
};

export default App;

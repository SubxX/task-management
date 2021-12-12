import SidebarWrapper from "../../components/sidebar/SidebarWrapper";
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoHome from "./components/TodoHome";

const Home = () => {
  return (
    <div className="lg:flex">
      <SidebarWrapper />
      <Switch>
        <Route path="/app" exact component={TodoHome} />
        <Route path="/app/:listid" component={TodoList} />
      </Switch>
    </div>
  );
};

export default Home;

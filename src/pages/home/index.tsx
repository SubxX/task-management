import SidebarWrapper from "../../components/sidebar/SidebarWrapper";
import { Switch, Route } from "react-router";
import TodoList from "./components/TodoList";

const Home = () => {
  return (
    <div className="lg:flex">
      <SidebarWrapper />
      <Switch>
        <Route path="/" exact component={TodoList} />
        {/* <Route path="/:id" component={TodoList} /> */}
      </Switch>
    </div>
  );
};

export default Home;

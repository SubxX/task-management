import Header from "../../components/Header";
import Devider from "../../components/Devider";
import SidebarWrapper from "../../components/sidebar/SidebarWrapper";
import Todo from "./Todo";

const Home = () => {
  return (
    <div className="lg:flex">
      <SidebarWrapper />
      <div className="flex-grow container mx-auto">
        <Header listname="Directory" completed={2} total={5} />

        <div className="todo-list mt-5 px-4">
          <Todo isimportant={true} completed={false} />
          <Todo isimportant={true} completed={false} />
          <Todo isimportant={false} completed={false} />
          <Devider classname="my-5" />
          <Todo isimportant={false} completed={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

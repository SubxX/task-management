import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/authentication/components/Login";
import Signup from "../pages/authentication/components/Signup";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import useAuth from "./hooks/useAuth";
import routeGuard from "./guards/routeGuard";

export default function Routes() {
  useAuth();

  return (
    <Router>
      <GuardProvider guards={[routeGuard]}>
        <Switch>
          <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
          <GuardedRoute
            path="/login"
            exact
            component={Login}
            meta={{ redirectIfAuth: true }}
          />
          <GuardedRoute
            path="/signup"
            exact
            component={Signup}
            meta={{ redirectIfAuth: true }}
          />
        </Switch>
      </GuardProvider>
    </Router>
  );
}

import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "../pages/app";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import useAuth from "./hooks/useAuth";
import NotFound from "../pages/NotFound";
import routeGuard from "./guards/routeGuard";

export default function Routes() {
  useAuth();

  return (
    <Router>
      <GuardProvider guards={[routeGuard]}>
        <Switch>
          <GuardedRoute path="/" exact meta={{ redirectIfAuth: true }}>
            home page
          </GuardedRoute>
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
          <GuardedRoute path="/app" component={App} meta={{ auth: true }} />
          <GuardedRoute path="*" component={NotFound} />
        </Switch>
      </GuardProvider>
    </Router>
  );
}

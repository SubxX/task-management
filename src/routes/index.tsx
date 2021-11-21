import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "../pages/app";
import Login from "../pages/authentication/components/Login";
import Signup from "../pages/authentication/components/Signup";
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
          <GuardedRoute path="/login" exact component={Login} />
          <GuardedRoute path="/signup" exact component={Signup} />
          <GuardedRoute path="/app" component={App} meta={{ auth: true }} />
          <GuardedRoute path="*" component={NotFound} />
        </Switch>
      </GuardProvider>
    </Router>
  );
}

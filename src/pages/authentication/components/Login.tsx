import { FormEvent, useState } from "react";
import ButtonPill from "../../../components/ButtonPill";
import { useAppDispatch } from "../../../redux/store/app.store";
import { authActions } from "../auth.slice";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ username, password });
    // dispatch(authActions.setUser({ name, password, authenticated: true }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-5 " style={{ maxWidth: "280px" }}>
        <p className="text-3xl font-medium uppercase">Login</p>

        <form className="mt-5" onSubmit={login}>
          <div>
            <input
              type="text"
              className="custom-input"
              placeholder="Username"
              name="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              className="custom-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <ButtonPill text="Login" className="w-full mt-4" />
        </form>

        <span className="text-center text-sm mt-2 block">
          dont have an account ?{" "}
          <Link
            to="/signup"
            className="text-deep-purple cursor-pointer underline"
          >
            signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;

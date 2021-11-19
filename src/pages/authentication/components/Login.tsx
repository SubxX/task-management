import { useState } from "react";
import { useAppDispatch } from "../../../redux/store/app.store";
import { authActions } from "../auth.slice";
import { Link } from "react-router-dom";
import AlertWrapper from "../../../components/AlertWrapper";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { loginUser } from "../api/authentication.api";
import { useHistory } from "react-router";

const mailPattern = new RegExp(
  "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}",
  "i"
);

const Login = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const history = useHistory();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  async function login(payload: any) {
    console.log(payload);
    setLoading(true);
    const response = await loginUser(payload);
    setLoading(false);
    if (response === "auth/user-not-found") {
      setNotification("doesnot_exists");
    } else {
      localStorage.setItem("taskm_user", JSON.stringify(response));
      dispatch(authActions.setUser({ ...response, authenticated: true }));
      history.push("/");
    }
    console.log(response);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-5 " style={{ maxWidth: "280px" }}>
        <p className="text-3xl font-bold uppercase">Login</p>

        <AlertWrapper
          type="warning"
          isOpened={notification === "doesnot_exists"}
          closeAlert={() => setNotification("")}
        >
          Email doesnot exists
        </AlertWrapper>

        <form className="mt-5 space-y-3" onSubmit={handleSubmit(login)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Field is required",
              pattern: {
                value: mailPattern,
                message: "Enter a valid email",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                name="email"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                onChange={onChange}
                value={value || ""}
                label="Email"
                variant="filled"
                size="small"
                className="w-full"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: "Field is required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                type="password"
                name="password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                onChange={onChange}
                value={value || ""}
                label="Password"
                variant="filled"
                size="small"
                className="w-full"
              />
            )}
          />

          <Button
            variant="outlined"
            className="w-full"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <CircularProgress style={{ width: "24px", height: "24px" }} />
            ) : (
              "Login"
            )}
          </Button>
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

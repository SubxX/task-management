import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/authentication.api";
import AlertWrapper from "../../../components/AlertWrapper";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const Signup = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function signUp(payload: any) {
    setLoading(true);
    const response = await registerUser(payload);
    setLoading(false);
    if (response === "signup/success") {
      history.push("/login");
    } else if (response === "auth/email-already-in-use") {
      setNotification("exist");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-5 " style={{ maxWidth: "280px" }}>
        <p className="text-3xl font-bold uppercase">Signup</p>

        <AlertWrapper
          type="warning"
          isOpened={notification === "exist"}
          closeAlert={() => setNotification("")}
        >
          Email already exists
        </AlertWrapper>

        <form className="mt-5 space-y-3" onSubmit={handleSubmit(signUp)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Field is required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                name="name"
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
                onChange={onChange}
                value={value || ""}
                label="Name"
                variant="filled"
                size="small"
                className="w-full"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: "Field is required" }}
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
            name="designation"
            control={control}
            rules={{ required: "Field is required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                name="designation"
                error={Boolean(errors.designation)}
                helperText={errors.designation?.message}
                onChange={onChange}
                value={value || ""}
                label="Designation"
                variant="filled"
                size="small"
                className="w-full"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Field is required",
              minLength: { value: 6, message: "Password is week" },
            }}
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
              "Signup"
            )}
          </Button>
        </form>

        <span className="text-center text-sm mt-2 block">
          already have a account ?{" "}
          <Link
            to="/login"
            className="text-deep-purple cursor-pointer underline"
          >
            login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;

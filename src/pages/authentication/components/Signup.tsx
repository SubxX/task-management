import { FormEvent, useState } from "react";
import ButtonPill from "../../../components/ButtonPill";
import { Link } from "react-router-dom";
import { registerUser } from "../api/authentication.api";
import { useHistory } from "react-router";
import AlertWrapper from "../../../components/AlertWrapper";

const Signup = () => {
  // const dispatch = useAppDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  async function signupHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, designation, password });
    const response = await registerUser({ name, email, designation, password });
    if (response === "signup/success") {
      history.push("/login");
    } else if (response === "auth/email-already-in-use") {
      setNotification("exist");
    }
    console.log(response);
    setNotification("exist");
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

        <form className="mt-5" onSubmit={signupHandler}>
          <div>
            <input
              type="text"
              className="custom-input"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              className="custom-input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              className="custom-input"
              placeholder="Designation"
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
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

          <ButtonPill text="Signup" className="w-full mt-4" />
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

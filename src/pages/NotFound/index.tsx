import { Link } from "react-router-dom";
import store from "../../redux/store/app.store";

const index = () => {
  return (
    <div className="min-h-screen bbg-light-gray flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-7xl mb-2 font-bold">404</div>
        <p>seems like we hit a road block</p>
        {store.getState().auth.authenticated ? (
          <Link to="/app" className="border-b text-sm">
            back to app?
          </Link>
        ) : (
          <Link to="/login" className="border-b text-sm">
            back to home?
          </Link>
        )}
      </div>
    </div>
  );
};

export default index;

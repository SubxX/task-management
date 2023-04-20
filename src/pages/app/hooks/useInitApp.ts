import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/app.store";
import { fetchListsThunk } from "../../../redux/async-actions/list-actions";

const useInitApp = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth);
    const userId = user.uid;

    useEffect(() => {
        dispatch(fetchListsThunk(userId));
    }, []);
}

export default useInitApp
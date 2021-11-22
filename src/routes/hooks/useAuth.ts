import { useDispatch } from "react-redux";
import { authActions } from "../../redux/reducers/auth.slice";

const useAuth = () => {
    const dispatch = useDispatch();
    try {
        const encodedUser: string | null = localStorage.getItem('taskm_user')
        if (encodedUser) {
            const decodedUser = JSON.parse(encodedUser);
            dispatch(authActions.setUser({ ...decodedUser, authenticated: true }))
        } else {
            dispatch(authActions.removeUser())
        }
    } catch (err) {
        dispatch(authActions.removeUser())
    }
}

export default useAuth;
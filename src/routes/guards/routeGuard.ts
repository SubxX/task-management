import store from "../../redux/store/app.store";
const routeGuard = (to: any, from: any, next: any) => {
    const isAuthenticated = store.getState().auth.authenticated;
    console.log(isAuthenticated);
    if (to.meta.auth) {
        if (isAuthenticated) {
            next();
        }
        next.redirect("/login");
    } else {
        if (!to.meta.redirectIfAuth) next()
        next.redirect("/");
    }
};
export default routeGuard;
import store from "../../redux/store/app.store";
const routeGuard = (to: any, from: any, next: any) => {
    const isAuthenticated = store.getState().auth.authenticated;
    if (to.meta.auth) {
        if (isAuthenticated) {
            next();
        }
        next.redirect("/login");
    } else {
        if (isAuthenticated && to.meta.redirectIfAuth) {
            next.redirect("/app");
        }
        next()
    }
};
export default routeGuard;
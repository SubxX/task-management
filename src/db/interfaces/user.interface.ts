export default interface User {
    uid: string;
    name: string;
    email: string;
    profilepic?: string;
    designation?: string;
    authenticated: boolean
}
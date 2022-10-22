export class Person {
    public login: string;
    public password: string;
    public email: string;
    constructor(uLogin: string, uPassword: string, uEmail: string) {
        this.login = uLogin;
        this.password = uPassword;
        this.email = uEmail;
    }
}

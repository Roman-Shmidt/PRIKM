export class User {
    constructor(
        public id: number,
        public number: string,
        public userType: number,
        public passwordChanged: boolean,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public isActive: boolean,
        public userName: string,
        public language: string
    ) {}
}
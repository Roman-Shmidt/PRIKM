import { menu } from "./Menu";

export class dish {
    constructor(
        public id: number,
        public name: string,
        public photoUrl: string,
        public description: string,
        public price: number,
        public menuId: number,
        public menu: menu | null
    ) {}
}
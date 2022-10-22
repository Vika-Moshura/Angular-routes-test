export class Task {
    name: string;
    status: boolean;
    constructor(tName: string, tStatus: boolean) {
        this.name = tName;
        this.status = tStatus;
    }
}

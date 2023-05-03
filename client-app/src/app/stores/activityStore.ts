import { makeObservable, observable } from "mobx";

export default class ActivityStore {
    title = 'Hello!';

    constructor() {
        makeObservable(this, {
            title: observable
        });
    }
}
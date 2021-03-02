import { observable } from "mobx"
class RootStore {
    @observable
    name = "悟空";
}
export default new RootStore();
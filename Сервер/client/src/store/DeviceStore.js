import {makeAutoObservable} from "mobx"


export default class DeviceStore {
    constructor(){
        this._types = []
        this._devices = []
        makeAutoObservable(this)
    }

    setTypes(bool) {
        this._types = bool
    }
    setDevices(bool){
        this._devices = bool
    }
    get Types() {   
        return this._types
    }
    get Devices() {   
        return this._devices
    }
}
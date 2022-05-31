import {makeAutoObservable} from "mobx"


export default class DeviceStore {
    constructor(){
        this._types = []
        this._devices = []
        this._typeDevice = []
        this._appl=[]
        makeAutoObservable(this)
    }

    setTypes(bool) {
        this._types = bool
    }
    setDevices(bool){
        this._devices = bool
    }
    setTypeDevice(bool){
        this._typeDevice = bool
    }
    setAppls(bool){
        this._appl = bool
    }
    get Types() {   
        return this._types
    }
    get Devices() {   
        return this._devices
    }
    get TypeDevice(){
        return this._typeDevice
    }
    get Apll() {
        return this._appl
    }
}
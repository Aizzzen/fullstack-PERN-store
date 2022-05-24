// Mobx
import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        // теперь Mobx следит за изменениями этих переменных
        makeAutoObservable(this)
    }

    // action-ы - изменяют состояние - как в Redux
    setIsAuth(boolean){
        this._isAuth = boolean
    }
    setUser(user){
        this._user = user
    }

    // геттеры - чтобы получить переменные из состояние
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}

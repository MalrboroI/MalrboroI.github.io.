import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth; // гетеры получают состояния наших элементов из констр-в. Они использ-ся только если ее пер-й аргумент изменился
  }
  get user() {
    return this._user;
    // геттеры для получения переменный из состояний. Прим-ся только при изменении одного из принимающий параметров(user или isAuth из APPROUTER)
  }
}

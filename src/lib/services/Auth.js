import store from 'store'

class Auth {
  set(isSet, info = undefined) {
    store.set('isAuthSet', isSet)
    info !== undefined ? store.set('token', info.id) : store.remove('token')
  }

  isSet() {
    return store.get('isAuthSet') || false
  }
}

export const auth = new Auth()

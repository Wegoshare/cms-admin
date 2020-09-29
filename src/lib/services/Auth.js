import store from 'store'

class Auth {
  set(isSet, info = undefined) {
    store.set('isAuthSet', isSet)
    store.set('token', info.id)
  }

  isSet() {
    return store.get('isAuthSet') || false
  }
}

export const auth = new Auth()

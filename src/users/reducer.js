import { errorSet, fetchingStart, fetchingEnd } from 'src/global/reducer'
import { postAction } from 'src/users/actions/post'
import { dispatch } from 'src/store'

export function postStart(state) {
  fetchingStart(state)
  state.users.loading.post = true
}

export function postEnd(state) {
  fetchingEnd(state)
  state.users.loading.post = false
  state.users.showMessage = true
}

export function postError(state, error) {
  fetchingEnd(state)
  state.users.loading.post = false
  errorSet(state, { show: true, error })
}

export function onDone(state, { creds }) {
  setTimeout(() => dispatch(postAction(creds)), 0)
}

const modifiers = {
  postStart,
  postEnd,
  postError,
  onDone,
}

export const usersReducer = (state, action) => {
  const modifier = modifiers[action.type]
  modifier(state, action.payload)
}

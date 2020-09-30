import { postFetcher } from 'src/users/fetchers/post'

export function postAction(creds) {
  return function (dispatch, getState) {
    dispatch({
      widget: 'users',
      type: 'postStart',
    })
    postFetcher(creds)
      .then(() => {
        dispatch({
          widget: 'users',
          type: 'postEnd',
        })
      })
      .catch(error => {
        dispatch({
          widget: 'users',
          type: 'postError',
          payload: error,
        })
      })
  }
}

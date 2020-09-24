import { postFetcher } from 'src/login/fetchers/post'

export function postAction(creds) {
  return function (dispatch, getState) {
    dispatch({
      widget: 'login',
      type: 'postStart',
    })
    postFetcher(creds)
      .then((res) => {
        dispatch({
          widget: 'login',
          type: 'postEnd',
          payload: res
        })
      })
      .catch(error => {
        dispatch({
          widget: 'login',
          type: 'postError',
          payload: error,
        })
      })
  }
}

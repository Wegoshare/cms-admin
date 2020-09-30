export const onDone = creds => ({
  widget: 'users',
  type: 'onDone',
  payload: { creds },
})

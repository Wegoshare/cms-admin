class Routes {
  home() {
    return `/`
  }

  projects() {
    return `/projects`
  }

  index(projectId) {
    return `/projects/${projectId}`
  }

  isIndex(projectId) {
    const { pathname } = window.location
    return pathname === `/projects/${projectId}`
  }

  models(projectId) {
    return `/projects/${projectId}/models`
  }

  isModels(projectId) {
    const { pathname } = window.location
    return pathname === `/projects/${projectId}/models`
  }

  entries(projectId, modelId) {
    return `/projects/${projectId}/models/${modelId}/entries`
  }

  isEntries(projectId) {
    const { pathname } = window.location
    return pathname.indexOf('entries') > -1 && pathname.indexOf(`/projects/${projectId}`) > -1
  }

  isExactEntry(projectId, modelId) {
    const { pathname } = window.location
    return pathname === `/projects/${projectId}/models/${modelId}/entries`
  }

  tokens(projectId) {
    return `/projects/${projectId}/keys`
  }

  isTokens(projectId) {
    const { pathname } = window.location
    return pathname === `/projects/${projectId}/keys`
  }

  explorer(projectId) {
    return `/projects/${projectId}/explorer`
  }

  isExplorer(projectId) {
    const { pathname } = window.location
    return pathname === `/projects/${projectId}/explorer`
  }

  users(projectId) {
    return `/projects/${projectId}/users`
  }

  isUsers(projectId) {
    const { pathname } = window.location
    return pathname === `/projects/${projectId}/users`
  }

  notFound() {
    return `/not-found`
  }

  login() {
    return `/login`
  }

  registration() {
    return `/registration`
  }

  recoverPass() {
    return '/recover-pass'
  }

  contacts() {
    return '/contacts'
  }
}

export const routes = new Routes()

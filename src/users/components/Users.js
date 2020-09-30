import React, { Component } from 'react'
import { func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { RedirectContainer } from 'src/global/components/RedirectContainer'
import { ErrorContainer } from 'src/global/components/ErrorContainer'
import { Loader } from 'src/global/components/Loader'
import { TextField } from 'src/lib/components/fields/TextField'
import { Button } from 'src/lib/components/Button'
import { Typography } from 'src/lib/components/Typography'
import { validate } from 'src/lib/services/Validator'
import { MessageBlock } from 'src/lib/components/MessageBlock'
import { onDone } from 'src/users/actions/onDone'
import { routes } from 'src/lib/services/Routes'
import { Link } from 'react-router-dom'
import { PageContainer } from 'src/lib/components/PageContainer'

class AUsers extends Component {
  static propTypes = {
    onDone: func.isRequired,
    loading: bool.isRequired,
    showMessage: bool.isRequired,
  }

  state = {
    login: '',
    loginError: '',
    password: '',
    passwordError: '',
    passwordAgain: '',
    passwordAgainError: '',
  }

  onChange(field, value) {
    const { state } = this
    state[field] = value
    state[`${field}Error`] = ''
    this.setState(state)
  }

  onBlur(field) {
    this.validate([field])
  }

  validateMatch() {
    const { state } = this
    const valid = state.password === state.passwordAgain
    if (!valid) {
      state.passwordAgainError = "Don't match"
    }
    this.setState(state)
    return valid
  }

  validate(fields) {
    const { state } = this
    const MAP = {
      login: 1,
      password: 6,
      passwordAgain: 0,
    }
    const valid = fields
      .map(item => {
        const { valid, errors } = validate(state[item], { type: 'string', minLength: MAP[item] })
        if (!valid) {
          state[`${item}Error`] = errors[0].message
        }
        return valid
      })
      .every(item => item)
    this.setState(state)
    return valid
  }

  onDone() {
    const { onDone } = this.props
    const { login, password } = this.state
    const valid = this.validate(['login', 'password', 'passwordAgain'])
    const validMatch = this.validateMatch()
    if (valid && validMatch) {
      onDone({ login, password })
    }
  }

  render() {
    const { loading, showMessage } = this.props
    const { login, loginError, password, passwordError, passwordAgain, passwordAgainError } = this.state
    return (
      <PageContainer>
        <RedirectContainer />
        <ErrorContainer />
        <Loader />
        <div className="p-xxl text-center">
          <MessageBlock>
            {showMessage ? (
              <span>
                The user was created successfully!
              </span>
            ) : (
                // 'Please click on the link in this email to activate your
                // Philips account and to verify your email address. '
                <div>
                  <Typography type="md" className="pb-sm">
                    Create new User
                </Typography>
                  <div className="pb-sm">
                    <TextField
                      label="E-mail"
                      onChange={value => this.onChange('login', value)}
                      onBlur={() => this.onBlur('login')}
                      value={login}
                      error={!!loginError}
                      helperText={loginError || ''}
                    />
                    <TextField
                      label="Password"
                      onChange={value => this.onChange('password', value)}
                      onBlur={() => this.onBlur('password')}
                      value={password}
                      error={!!passwordError}
                      helperText={passwordError || ''}
                      type={'password'}
                    />
                    <TextField
                      label="Confirm password"
                      onChange={value => this.onChange('passwordAgain', value)}
                      onBlur={() => this.onBlur('passwordAgain')}
                      value={passwordAgain}
                      error={!!passwordAgainError}
                      helperText={passwordAgainError || ''}
                      type={'password'}
                    />
                  </div>
                  <Button onClick={() => this.onDone()} color="primary" filled disabled={loading}>
                    Submit
                </Button>

                </div>
              )}
          </MessageBlock>
        </div>
      </PageContainer>
    )
  }
}

export const Users = connect(
  state => ({
    loading: state.users.loading.post,
    showMessage: state.users.showMessage,
  }),
  dispatch => ({
    onDone: (...props) => dispatch(onDone(...props)),
  })
)(AUsers)

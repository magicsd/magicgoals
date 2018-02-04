import React, { Component } from 'react'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const {email, password} = this.state;
    firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('Ошибка', error);
        this.setState({error});
      })
  }

  render() {
    return (
      <div style={{margin: '0 5% 5% 5%'}}>
        <h2 className="page-header">Представьтесь</h2>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              style={{marginTop: '5px', marginRight: '5px'}}
              onChange={(ev) => this.setState({email: ev.target.value})}
            />
            <input
              className="form-control"
              type="password"
              placeholder="Пароль"
              style={{marginTop: '5px', marginRight: '5px'}}
              onChange={(ev) => this.setState({password: ev.target.value})}
            />
            <button
              className="btn btn-primary"
              style={{marginTop: '5px'}}
              onClick={() => this.signIn()}
            >
              Войти
            </button>
          </div>
        </div>
        <div style={{color: 'red'}}>{this.state.error.message}</div>
        <div>Войдите или <Link to={'/signup'}>зарегистрируйтесь</Link></div>
      </div>
    )
  }
}

export default SignIn

import React, { Component } from 'react'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'

class SignUp extends Component {
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

  signUp() {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('Ошибка', error);
        this.setState({error})
      })
  }

  render() {
    return (
      <div style={{margin: '0 5% 5% 5%'}}>
        <h2 className="page-header">Регистрация</h2>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              onChange={(ev) => this.setState({email: ev.target.value})}
              style={{marginRight: '5px', marginTop: '5px'}}
            />
            <input
              className="form-control"
              type="password"
              placeholder="Пароль"
              onChange={(ev) => this.setState({password: ev.target.value})}
              style={{marginRight: '5px', marginTop: '5px'}}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => this.signUp()}
              style={{marginTop: '5px'}}
            >
              Подтверждаю
            </button>
          </div>
        </div>
        <div style={{color: 'red'}}>{this.state.error.message}</div>
        <div>Зарегистрируйтесь или <Link to={'/signin'}>войдите</Link></div>
      </div>
    )
  }
}

export default SignUp

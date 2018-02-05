import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '0 5% 5% 5%'}}>
        <h3 className="page-header">Целеменеджер</h3>
        <AddGoal />
        <hr />
        <GoalList />
        <hr />
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Выйти
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App)

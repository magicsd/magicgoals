import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeGoalRef, goalRef } from '../firebase'

class GoalItem extends Component {
  completeGoal() {
    //добавить в выполненные в БД
    // удалить цель из ref целей
    const {email} = this.props.user;
    const {title, serverKey} = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }

  render() {
    const {email, title} = this.props.goal;
    return (
      <div>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}><small> добавил <em>{email}</em></small></span>
        <button
          className="btn btn-sm btn-primary"
          style={{height: '16px', paddingTop: '0', fontSize: '10px'}}
          onClick={() => this.completeGoal()}
        >
          Готово!
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {user}
}

export default connect(mapStateToProps, null)(GoalItem)

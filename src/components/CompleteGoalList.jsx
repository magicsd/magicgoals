import React, { Component } from 'react'
import { completeGoalRef } from '../firebase'
import { connect } from 'react-redux'
import { setCompleted } from '../actions'

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = []
      snap.forEach(completeGoal => {
        const {email, title} = completeGoal.val();
        completeGoals.push({email, title})
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        <h4>Выполнено</h4>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const {title, email} = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong>
                <span style={{marginRight: '5px'}}><small> выполнил <em>{email}</em></small></span>
              </div>
            )
          })
        }
        <button
          className="btn btn-sm btn-info"
          style={{marginTop: '15px'}}
          onClick={() => this.clearCompleted()}
          >
          Очистить
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    const {completeGoals} = state;
    return {completeGoals}
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList)

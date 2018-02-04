import React, { Component } from 'react'
import { goalRef } from '../firebase'
import { connect } from 'react-redux'

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this in AddGoal', this);
    const {title} = this.state;
    const {email} = this.props.user;
    goalRef.push({email, title});
  }

  render() {
    return(
      <div className="form-inline">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Новая цель"
            style={{marginRight: '5px'}}
            onChange={ev => this.setState({title: ev.target.value})}
          />
          <button
              className="btn btn-success"
              type="button"
              onClick={() => this.addGoal()}
            >
            Добавить
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps, null)(AddGoal)

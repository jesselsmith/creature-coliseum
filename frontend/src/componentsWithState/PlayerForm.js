import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPlayer } from '../actions/fetchActions'


class PlayerForm extends Component {
  state = {
    name: '',
    level: '',
    encounter_id: this.props.encounterId
  }

  handleOnChange = e => {
    let newState = { ...this.state }
    if (e.target.name === 'name') {
      newState = {
        ...this.state,
        name: e.target.value
      }
    } else {
      newState = {
        ...this.state,
        level: e.target.value
      }
    }
    this.setState(newState)
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.postPlayer({
      player: this.state
    })
    this.setState(prevState => ({
      ...prevState,
      name: '',
      level: ''
    }))
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <label>Name: </label>
        <input type='text' value={this.state.name} name='name' onChange={this.handleOnChange} />

        <label>Level: </label>
        <input type='text' value={this.state.level} name='level' onChange={this.handleOnChange} />

        <input type='submit' value='Add Player' />
      </form>
    )
  }
}

export default connect(null, { postPlayer })(PlayerForm)
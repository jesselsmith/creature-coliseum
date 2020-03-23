import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPlayer } from '../actions/fetchActions'


class PlayerForm extends Component {
  state = this.props.currentState || {
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
    if(this.props.method === 'POST'){
      this.props.postPlayer({
        player: this.state
      })
      this.setState(prevState => ({
        ...prevState,
        name: '',
        level: ''
      }))
    }else{
      this.props.patchPlayer({
        player: this.state,
        id: this.props.playerId
      })
      this.props.unmount()
    }
  }

  submitButtonValue = () => {
    if(this.props.method === 'POST'){
      return 'Add Player'
    }else{
      return 'Update Player'
    }
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <label>Name: </label>
        <input type='text' value={this.state.name} name='name' onChange={this.handleOnChange} />

        <label>Level: </label>
        <input type='text' value={this.state.level} name='level' onChange={this.handleOnChange} />

        <input type='submit' value={this.submitButtonValue()} />
      </form>
    )
  }
}

export default connect(null, { postPlayer })(PlayerForm)
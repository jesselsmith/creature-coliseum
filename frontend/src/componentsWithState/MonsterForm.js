import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMonster } from '../actions/fetchActions'


class MonsterForm extends Component {
  state = {
    name: '',
    cr: '',
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
        cr: e.target.value
      }
    }
    this.setState(newState)
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.postMonster({
      monster: this.state
    })
    this.setState(prevState => ({
      ...prevState,
      name: '',
      cr: ''
    }))
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <label>Name: </label>
        <input type='text' value={this.state.name} name='name' onChange={this.handleOnChange} />

        <label>cr: </label>
        <input type='text' value={this.state.cr} name='cr' onChange={this.handleOnChange} />

        <input type='submit' value='Add Monster' />
      </form>
    )
  }
}

export default connect(null, { postMonster })(MonsterForm)
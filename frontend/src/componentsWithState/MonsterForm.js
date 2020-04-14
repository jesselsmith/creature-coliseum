import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMonster, patchMonster } from '../actions/fetchActions'


class MonsterForm extends Component {
  state = this.props.currentState || {
    name: '',
    cr: '',
    encounter_id: this.props.encounterId
  }

  componentDidUpdate(){
    if(this.state.encounter_id !== this.props.encounterId){
      this.setState({
        encounter_id: this.props.encounterId
      })
    }
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
    if(this.props.method === 'POST'){
      this.props.postMonster({
        monster: this.state
      })
      this.setState(prevState => ({
        ...prevState,
        name: '',
        cr: ''
      }))
    }else{
      this.props.patchMonster({
        monster: this.state,
        id: this.props.monsterId
      })
      this.props.unmount()
    }
  }

  submitButtonValue = () => {
    if(this.props.method === 'POST'){
      return 'Add Monster'
    }else{
      return 'Update Monster'
    }
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <label>Name: </label>
        <input type='text' value={this.state.name} name='name' onChange={this.handleOnChange} />

        <label>cr: </label>
        <input type='text' value={this.state.cr} name='cr' onChange={this.handleOnChange} />

        <input type='submit' value={this.submitButtonValue()} />
      </form>
    )
  }
}

export default connect(null, { postMonster, patchMonster })(MonsterForm)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEncounter, patchEncounter } from '../actions/fetchActions'


class EncounterForm extends Component {
  state = {
    title: this.props.currentTitle || ''
  }

  handleOnChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    if(this.props.method === 'POST'){
      this.props.postEncounter({
        encounter: this.state
      })
      this.setState({
        title: ''
      })
    }else{
      this.props.patchEncounter({
        encounter: {
          title: this.state.title,
          id: this.props.encounterId
        }
      })
      this.props.unmount()
    }
  }

  submitButtonValue = () => {
    if(this.props.method === 'POST'){
      return 'Add Encounter'
    }else{
      return 'Update Title'
    }
  }

  render() {
    return (
      <form name='encounterForm' onSubmit={this.handleOnSubmit}>
        <label>Title: </label>
        <input type='text' value={this.state.title} onChange={this.handleOnChange} />
        <input type='submit' value={this.submitButtonValue()} />
      </form>
    )
  }
}

export default connect(null, { postEncounter, patchEncounter })(EncounterForm)
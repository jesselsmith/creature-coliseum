import React, { Component } from 'react';

class BreedSearch extends Component{

  CR_ARRAY = [
    '0',  '1/8', '1/4', '1/2', '1',
    '2',  '3',   '4',   '5',   '6',
    '7',  '8',   '9',   '10',  '11',
    '12', '13',  '14',  '15',  '16',
    '17', '18',  '19',  '20',  '21',
    '22', '23',  '24',  '25',  '26',
    '27', '28',  '29',  '30'
  ]

  AC_ARRAY = [
    '5',  '6',  '7',  '8',  '9', 
    '10', '11', '12', '13', '14', 
    '15', '16', '17', '18', '19', 
    '20', '21', '22', '23', '24',
    '25'
  ]

  ATTACK_BONUS_ARRAY = [
    '1',  '2',   '3',  '4',   '5',   
    '6',  '7',   '8',  '9',   '10',
    '11', '12', '13',  '14',  '15',
    '16', '17', '18',  '19'
  ]

  state = {
    name: '',
    monster_type: 'Any Type',
    spellcaster: '',
    size_category: 'Any Size',
    min_cr: 'Min CR',
    max_cr: 'Max CR',
    min_ac: 'Min AC',
    max_ac: 'Max AC',
    min_attack_bonus: 'Min Attack Bonus',
    max_attack_bonus: 'Max Attack Bonus'
  }

  makeOptions = array => {
    return array.map(num => <option value={num} key={num} >{num}</option>)
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange} placeholder='Name...'/>
          <select name='monster_type' value={this.state.monster_type} onChange={this.handleOnChange} >
            <option value='Any Type'>Any Type</option>
            <option value='Aberration'>Aberration</option>
            <option value='Beast'>Beast</option>
            <option value='Celestial'>Celestial</option>
            <option value='Construct'>Construct</option>
            <option value='Dragon'>Dragon</option>
            <option value='Elemental'>Elemental</option>
            <option value='Fey'>Fey</option>
            <option value='Fiend'>Fiend</option>
            <option value='Giant'>Giant</option>
            <option value='Humanoid'>Humanoid</option>
            <option value='Monstrosity'>Monstrosity</option>
            <option value='Ooze'>Ooze</option>
            <option value='Plant'>Plant</option>
            <option value='Undead'>Undead</option>
          </select>
          <select name='size_category' value={this.state.size_category} onChange={this.handleChange}>
            <option value='Any Size'>Any Size</option>
            <option value="tiny">Tiny</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="huge">Huge</option>
            <option value="gargantuan">Gargantuan</option>
          </select>
          <label for='spellcaster'>Spellcaster?</label>
          <select name='spellcaster' value={this.state.spellcaster} onChange={this.handleChange}>
            <option value=''>Any</option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <select name='min_cr' value={this.state.min_cr} onChange={this.handleChange}>
            <option value='Min CR'>Min CR</option>
            {this.makeOptions(this.CR_ARRAY)}
          </select>
          <select name='max_cr' value={this.state.max_cr} onChange={this.handleChange}>
            <option value='Max CR'>Max CR</option>
            {this.makeOptions(this.CR_ARRAY)}
          </select>
        </div>
        <div>
          <select name='min_ac' value={this.state.min_ac} onChange={this.handleChange}>
            <option value='Min AC'>Min AC</option>
            {this.makeOptions(this.AC_ARRAY)}
          </select>
          <select name='max_ac' value={this.state.max_ac} onChange={this.handleChange}>
            <option value='Max AC'>Max AC</option>
            {this.makeOptions(this.AC_ARRAY)}
          </select>
          <select name='min_attack_bonus' value={this.state.min_attack_bonus} onChange={this.handleChange}>
            <option value='Min Attack Bonus'>Min Attack Bonus</option>
            {this.makeOptions(this.ATTACK_BONUS_ARRAY)}
          </select>
          <select name='max_attack_bonus' value={this.state.max_attack_bonus} onChange={this.handleChange}>
            <option value='Max Attack Bonus'>Max Attack Bonus</option>
            {this.makeOptions(this.ATTACK_BONUS_ARRAY)}
          </select>
        </div>
      </form>
    )
  }
}

export default BreedSearch
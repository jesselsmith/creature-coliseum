import React from 'react';

const breed = props => {
  const breed = props.breed.attributes
  debugger
  return (
    <tr>
      <td><button className='add-monster-btn'
        onClick={() => props.addMonster(props.breed.id)}>Add</button></td>
      <td><a href={breed.url} target='_blank' rel="noopener noreferrer">{breed.name}</a></td>
      <td>{breed.cr}</td>
      <td>{breed.monster_type}</td>
      <td>{breed.size_category}</td>
      <td>{breed.spellcaster.toString()}</td>
      <td>{breed.ac}</td>
      <td>{breed.attack_bonus}</td>
    </tr>
  )
}

export default breed
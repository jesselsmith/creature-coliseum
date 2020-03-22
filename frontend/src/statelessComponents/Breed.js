import React from 'react';

const breed = props => {
  return (
    <tr>
      <td><a href='{props.attributes.url}'>{props.attributes.name}</a></td>
      <td>{props.attributes.cr}</td>
      <td>{props.attributes.monster_type}</td>
      <td>{props.attributes.size_category}</td>
      <td>{props.attributes.spellcaster}</td>
      <td>{props.attributes.ac}</td>
      <td>{props.attributes.attack_bonus}</td>
    </tr>
  )
}

export default breed
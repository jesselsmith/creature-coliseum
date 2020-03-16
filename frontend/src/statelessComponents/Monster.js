import React from 'react';

const monster = props => {
  return (
    <div>
      {props.monster.attributes.name}, CR: { props.monster.attributes.cr}
    </div >
  )
}

export default monster
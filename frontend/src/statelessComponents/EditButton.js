import React from 'react';

const editButton = props => {
  return <button className='edit' onClick={() => {props.edit()}}><span role="img" aria-label="edit">✏️</span></button>
}

export default editButton
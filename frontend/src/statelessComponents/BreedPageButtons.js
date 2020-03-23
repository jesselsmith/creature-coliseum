import React from 'react';

const breedPageButtons = props => {
  const numPage = Math.floor(props.numEntries / props.entriesPerPage + 1)
  return(
    <div>
      {(() => {
        if(props.currentPage > 1){
          return <span><button onClick={() => props.changePage(1)}>Page 1</button><button onClick={() => props.changePage(props.currentPage - 1)}>Previous</button></span>
        }
      })()}
      <button>Page {props.currentPage}</button>
      {(() =>{
        if(props.currentPage !== numPage){
          return <span><button onClick={() => props.changePage(props.currentPage + 1)}>Next</button><button onClick={() => props.changePage(numPage)}>Page {numPage}</button></span>
        }
      })()}
    </div>
  )
}

export default breedPageButtons

import React from 'react';

const breedPageButtons = props => {
  const numPage = Math.floor(props.numEntries / props.entriesPerPage + 1)
  return(
    <div>
      {(() => {
        if(props.currentPage > 1){
          return <span><button>Page 1</button><button>Previous</button></span>
        }
      })()}
      <button>Page {props.currentPage}</button>
      {(() =>{
        if(props.currentPage !== numPage){
          return <span><button>Next</button><button>Page {numPage}</button></span>
        }
      })()}
    </div>
  )
}

export default breedPageButtons

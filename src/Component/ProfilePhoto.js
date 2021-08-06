import React from 'react'


function Photo(props) {

  return (
   
            <div className="col">
          <img src={props.item.img} className="photo" alt="..." />
        </div>

  )
}

export default Photo
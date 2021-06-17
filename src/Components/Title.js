import React from 'react'

function Title({title,span}) {
    return (
        <div className="Title">
          {title}  
          <h3>
            <span> {span}</span>  
          </h3>  
        </div>
    )
}

export default Title

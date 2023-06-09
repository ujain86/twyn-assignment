import React from 'react'

function Graph(props) {

    // console.log(props.image);
  return (
    <div className='graph'>
        <img className='image' src={'images/'+props.image + '.jpg'} style={{height: "100%", width: "80%"}}></img>
    </div>
  )
}

export default Graph;
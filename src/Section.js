import React from 'react'
import Graph from './Graph';

function Section(props) {

    const {heading, image} = props;
    const images = [1,2,3];

  return (
    <div className='section'>
        <div  className='heading'>
            <h3>{heading}</h3>
        </div>
        <div className='line'></div>
        <div className='graph-container'>
            {images.map((item) => {
                return <Graph image={image + item} />
            })}
        </div>
        
        
    </div>
  )
}

export default Section
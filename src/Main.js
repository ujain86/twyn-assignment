import React from 'react'
import Section from './Section'

function Main() {

    const headings = ["Loading Unit", "Filling Unit", "Dispatch Unit"];
    const images = ["LU_", "FU_", "DU_"];
  return (
    <div id='main'>
        {/* <h1>Heading</h1> */}
        {headings.map((item, index) => {
            return <Section heading={item} image={images[index]}/>
        })}
        
    </div>
  )
}

export default Main
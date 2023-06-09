import React, { useState } from 'react'

function Sidebar() {

    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand);
    }
  return (
    <div id='sidebar' className={expand?'expand':'collapse'}>
        <button className='nav-button' onClick={handleClick}>
            <h4>{expand?"Collapse":"Expand"}</h4>
        </button>
        <button className='nav-button'>
            <h4>Home</h4>
        </button>
        <button className='nav-button'>
            <h4>{expand?"Energy Monitoring System":"EMS"}</h4>
        </button>
        <button className='nav-button'>
            <h4>{expand?"Condition Based Monitoring":"CBM"}</h4>
        </button>
    </div>
  )
}

export default Sidebar
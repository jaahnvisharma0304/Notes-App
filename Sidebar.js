import React, { useState } from 'react'
import "./Sidebar.css"
function Sidebar(props) {
    const color = ["#b9fbc0", "#f7a9a8", "#00d4fe", "#b693fd", "#e4ee91"]
    const [listopen, setlistopen] = useState(false);
    return (
    <div className='sidebar'>
        <ion-icon name="add-circle" onClick={()=>setlistopen(!listopen)}></ion-icon>
        <ul className={`sidebar_list ${listopen?"sidebar_list_active":""}`}> 
            {
                color.map((item, index) => (
                <li 
                    key={index} 
                    className='sidebar_list_item' 
                    style={{backgroundColor:item}}
                    onClick={()=>props.addNote(item)}
                />))
            }
            
        </ul>
    </div>
  )
}

export default Sidebar

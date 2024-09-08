// type rfce for full code snippet
import React from 'react'
import "./Note.css"
let timer = 300, timeout
function Note(props) {
    const formatDate = (value) => {
        if (!value) return "";
        
        const date = new Date(value);
        
        // Convert to Indian Standard Time (IST)
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            day: 'numeric',
            month: 'short'
        };
        const formattedDate = date.toLocaleString('en-IN', options);

        return formattedDate;
    };
    const debounce=(func)=>{
        clearTimeout(timeout)
        timeout=setTimeout(func, timer)
    }
    const updateText = (text, id)=> {
        debounce(()=>props.updateText(text, id))
    }
  return (
    <div className='note' style={{backgroundColor : props.note.color}}>
        <textarea 
            className='note_text' 
            defaultValue={props.note.text} 
            onChange={(event)=>updateText(event.target.value, props.note.id  )}
        />
        <div className='note_footer'>
            <p>{formatDate(props.note.time)}</p>
            <ion-icon name="create"/>
            <ion-icon name="trash-sharp" onClick={()=>props.deleteNote(props.note.id)}/>
        </div>
        
    </div>
  )
}

export default Note

import React from 'react'
import Note from '../note/Note';
import "./Notecontainer.css"
function Notecontainer(props) {

    const reverseArray = (arr) => {
        const array = []
        for (let i = arr.length - 1; i >= 0; i--) {
            array.push(arr[i]);
        }
        return array
    }
    const notes = reverseArray(props.notes)
    return (
        <div className='note-container'>
            <h1>NOTES</h1>
            <div className='note-container-notes'> 
            {
                notes.map((item, index) => <Note 
                    key={item.id}
                    note = {item}
                    deleteNote = {props.deleteNote}
                    updateText = {props.updateText}
                    />)
            }
            </div>
        </div>
  )
}

export default Notecontainer;

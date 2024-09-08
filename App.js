import React, { useState, useEffect } from 'react';

import Notecontainer from './components/notecontainer/Notecontainer';
import Sidebar from './components/sidebar/Sidebar';

import './App.css';


function App() {
  const [notes, setnotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || [])
  useEffect(() => {
    if (notes.length === 0) {
      const defaultNote1 = {
        id: Date.now() + "" + Math.floor(Math.random() * 78),
        text: "Get started by clicking on the plus icon to create new notes!",
        time: Date.now(),
        color: "#f7a9a8" // You can set a default color
      };
      const defaultNote2 = {
        id: Date.now() + "" + Math.floor(Math.random() * 78),
        text: "Choose from a variety of colors and personalize your notes by assigning different colors to different categories.",
        time: Date.now(),
        color: "#b693fd" // You can set a default color
      };
      const defaultNote3 = {
        id: Date.now() + "" + Math.floor(Math.random() * 78),
        text: "Make your notes truly yours!",
        time: Date.now(),
        color: "#e4ee91" // You can set a default color
      };
      setnotes([defaultNote2, defaultNote1, defaultNote3]);
    }
  }, []); 
  const addNote = (color) => {
    const tempNotes = [...notes]
    tempNotes.push({
      id : Date.now() + "" + Math.floor(Math.random()*78),
      text : "",
      time : Date.now(),
      color: color
    })
    setnotes(tempNotes)
  }
  const deleteNote = (id) => {
    const tempNotes = [...notes]
    const index = tempNotes.findIndex((item) => item.id === id)
    if(index < 0)  return
    tempNotes.splice(index, 1)
    setnotes(tempNotes)
  }
  const updateText = (text, id) => {
    const tempNotes = [...notes]
    const index = tempNotes.findIndex((item) => item.id === id)
    if(index < 0)  return
    tempNotes[index].text = [text]
    setnotes(tempNotes)
  }
  useEffect(()=> {
    localStorage.setItem('notes-app', JSON.stringify(notes))
  })    
  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <Notecontainer 
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;

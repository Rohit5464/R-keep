import React, { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import Note from "./components/Note"
import Footer from './components/Footer'
import './App.css'



function App() {

  const [notes , setnote] = useState([])

  function addNote(note){
    setnote(old => {
      if(note.title === "" && note.content === ""){
        return [...old];
      }else{
        return [...old,note]
      }  
    })
  }

  function deleter(id){
    setnote(old => {
      return old.filter((noteItem , index) => {
        return index !== id;
      }
      )}
    )}

  return (
    <div>
      <Header/>
      <div>
        <Entry
        add={addNote}/>
        {notes.map((x , index) => {
          return <Note title={x.title} content={x.content} ondelete={deleter} id={index} key={index}/>
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import './main.css'
import './input.css'
import Header from './components/Header'
import Action from './playlist/Action'

const AudioPlayer = () => {
  return (
   <div className="audioplayer">
       <div className="inside_content">
           <Header/>
           <Action/>
           {/* Playlist */}
       </div>
       {/* <Controls/> */}
   </div>
  )
}

export default AudioPlayer
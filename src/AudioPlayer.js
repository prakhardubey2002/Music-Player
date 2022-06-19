import React from 'react'
import './main.css'
import './input.css'
import Header from './components/Header'
import Action from './components/playlist/Action'
import Playist from './components/playlist/Playist'
import PlayerState from './context/PlayerState'

const AudioPlayer = () => {
  return (
    <PlayerState>
      <div className="audioplayer">
        <div className="inside_content">
          <Header />
          <Action />
          <Playist />
        </div>
        {/* <Controls/> */}
      </div>
    </PlayerState>
  )
}

export default AudioPlayer
import React, { useReducer } from "react";
import playerReducer from "./playerReducer";
import playerContext from "./playerContext";
import { song_list } from "./song";
const PlayerState = (props) => {
    const intialState = {
        currentSong: 0,
        songlist: song_list,
        repeat: false,
        random: false,
        playing: false,
        audio: null,
    }

    const [state, dispatch] = useReducer(playerReducer, intialState)
    const SetCurrent =(id) => dispatch({type:'SET_CURRENT_SONG',data: id })
    return <playerContext.Provider
        value={{
            currentSong: state.currentSong,
            songlist: state.songlist,
            repeat: state.repeat,
            random: state.random,
            playing: state.playing,
            audio: state.audio,
            SetCurrent,
        }}>
            {props.children}
    </playerContext.Provider>
}
export default PlayerState
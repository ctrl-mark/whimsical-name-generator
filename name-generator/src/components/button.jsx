import React from 'react'
import useSound from 'use-sound';
import clickSound from '../assets/sound/click.mp3'

function Button(props){

  const [playClick] = useSound(clickSound, {
    volume: 0.25,
  });

    return(
        <>
        <button className="gold-btn" id="generate" onClick={() => {playClick(); props.generate();}}><span>Name Me</span></button>
        </>
    );
}

export default Button; 
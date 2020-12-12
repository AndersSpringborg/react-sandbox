import React, { useState } from 'react';
import styles from './ErrorLogger.module.css';
import axios from 'axios';

function ErrorLogger(){

const [spotifyResponse, setSpotifyResponse] = useState('Spotidy Placeholder')

  function sendSpotifyResponse() {

    const response = axios.get('https://randomuser.me/api')
    .then((data) =>{
      setSpotifyResponse('Hi')

    })
  }


  return(
    <div className={styles.ErrorLogger}>
      <p> Spotify response:</p>
      <button onClick={sendSpotifyResponse}>
        Fire1
      </button>
      <p>
        {spotifyResponse}
      </p>
    </div>
    )
}



export default ErrorLogger;

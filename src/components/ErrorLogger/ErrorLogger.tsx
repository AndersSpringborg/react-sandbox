import React, { useState } from 'react';
import axios from 'axios';
import {Button} from 'antd';

function ErrorLogger(){

  const [spotifyResponse, setSpotifyResponse] = useState('Spotify Placeholder')

  function sendSpotifyResponse() {

    const response = axios.get('https://randomuser.me/api')
    .then((data) =>{
      setSpotifyResponse('Hi')

    })
  }


  return(
    <div>
      <p> Spotify response:</p>
      <Button onClick={sendSpotifyResponse}>
        Fire1
      </Button>
      <p>
        {spotifyResponse}
      </p>
    </div>
    )
}



export default ErrorLogger;

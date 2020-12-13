import React from 'react';
import {Button} from 'antd';
import './SpotifyLogin.css';

const clientId = '5589dd5ccfac4e96bf860c7ac8801b7e'
const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = "http://localhost:3000/"
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state"
  ]


const spotifyEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
const hash = window.location.hash
window.location.hash = "";

const extractToken = () => {
    return 'BQAGAnxoqLHHNKxglH8mqGBJCKJWs7f3EwZC0tE6oquF3cMMFzBLKqVGRdDscqP1ULhq7_2mIJNxSqet1VuCDm-cNmc8I18Wd-e182kqLlRt3S408jcSFKpzms0d-MvWs2fu_E7aOO4zBZQZAckZkA'
}
class SpotifyLogin extends React.Component{

    componentDidMount() {
        // Set token
        let _token = extractToken();
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
        }
      }

    render(){
        return(
            <div>
                <p>SpotifyLogin</p>
                <a href={spotifyEndpoint}>
                    <Button type={'primary'} shape={'round'}>
                        Login Spotify
                    </Button>
                </a>
            </div>
        )
    }
}


export default SpotifyLogin;
import { Button } from 'antd';
import React, {useState} from "react";
// @ts-ignore
// @ts-ignore
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import './SpotifyLogin.css'

// https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/


const SpotifyLogin : React.FC = () => {
    const [cookies, setCookie] = useCookies();

    const scopes = [Scopes.userTopRead]
    const client_id = process.env.CLIENT_ID

    // curl -X GET "https://api.spotify.com/v1/me/top/artists" -H "Authorization: Bearer {your access token}"
    const fetchSpotifyData = (token: string) : any => {
        const AuthStr = 'Bearer ' + token
        const URL = 'https://api.spotify.com/v1/me/top/artists'

        const headers = {
            'Authorization': AuthStr
        };

        axios.get(URL, {headers})
            .then(res => {
                setArtist(JSON.stringify(res))
            })
            .catch(err => {
                console.error(err)
                return 'Error'
            })
    }
    const [artist, setArtist] = useState('Press the button to get artist')
    const token = cookies.spotifyAuthToken
    return (
        <div>
            <p>SpotifyLogin</p>
            <p>top Artist: {artist}{}</p>
            <SpotifyAuth
                redirectUri='http://localhost:3000/'
                clientID={client_id}
                scopes={scopes}
            />
            <Button type={'primary'} onClick={() => {setCookie('spotifyAuthToken', NaN)}}>
                Delete cookie
            </Button>
            <Button type={'primary'} ghost={true} onClick={() => {fetchSpotifyData(token)}}>
                Get artist
            </Button>
            <div>
                <p>Dev info</p>
                <p style={{fontSize: '10px'}}>
                    token: {token}
                </p>
            </div>
        </div>
    )
}

export default SpotifyLogin;

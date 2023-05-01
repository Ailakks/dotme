import style from "./spotify.module.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import moment from "moment";

export default function Spotify(props) {
    const [data, setData] = useState({});
    const [spotify, setSpotify] = useState({});

    useEffect(() => {
        axios.get(`https://api.lanyard.rest/v1/users/${props.user}`).then(response => {
            setData(response.data);

            setSpotify(response.data.data['spotify']);
        });
    }, []);

    if (data.success) {
        if (spotify) {
            return (
                <div className={style.container} style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("${spotify['album_art_url']}")`}}>
                    <p id={style['title']}>Currently listening</p>
                    <div>
                        <p>{spotify['song']}</p>
                        <p>{spotify.artist}</p>
                    </div>
                    <p>{moment(spotify['timestamps']?.start).fromNow()}</p>
                </div>
            )
        } else {
            return (
                <div className={style.container} style={{backgroundColor: '#178f3b'}}>
                    <h2>Not listening to anything</h2>
                </div>
            )
        }
    } else {
        return (
            <div className={style.container} style={{backgroundColor: '#178f3b'}}>
                <h2>Not available...</h2>
            </div>
        )
    }
}

import style from "./activity.module.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import moment from "moment";

export default function Activity(props) {
    const [data, setData] = useState({});
    const [activity, setActivity] = useState({});

    useEffect(() => {
        axios.get(`https://api.lanyard.rest/v1/users/${props.user}`).then(response => {
            setData(response.data);
        });
    }, []);

    if (data.success) {
        if (data.data['activities'].length > 0) {
            return (
                <div className={style.container}>
                    <p>{data.data['activities'][1].name}</p>
                    <p>{data.data['activities'][1].details}</p>
                    <p>{moment(data.data['activities'][1]['timestamps'].start).fromNow()}</p>
                </div>
            )
        } else {
            return (
                <h2>Doing... nothing :(</h2>
            )
        }
    } else {
        return (
            <h2>Not available...</h2>
        )
    }
}

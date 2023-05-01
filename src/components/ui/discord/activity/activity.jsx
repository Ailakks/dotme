import style from "./activity.module.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import moment from "moment";
import Element from "../../element/element";

export default function Activity(props) {
    const [data, setData] = useState({});
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        axios.get(`https://api.lanyard.rest/v1/users/${props.user}`).then(response => {
            setData(response.data);

            const activity = response.data.data['activities'];

            activity.shift();
            setActivity(activity);
        });
    }, []);

    if (data.success) {
        if (activity.length > 0) {
            return (
                <div className={style.container}>
                    {
                        activity.map((value, key) =>
                            <Element className={style.element} key={key}>
                                <div>
                                    <p>{value.name}</p>
                                    <p>{value.details}</p>
                                </div>
                                <p>{moment(value['timestamps']?.start).fromNow()}</p>
                            </Element>
                        )
                    }
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

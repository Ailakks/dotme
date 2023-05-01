import style from "./card.module.css";

export default function Card(props) {
    return (
        <div className={style.container} style={props.style} >
            {props.children}
        </div>
    )
}

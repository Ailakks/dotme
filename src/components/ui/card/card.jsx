import style from "./card.module.css";

export default function Card(props) {
    return (
        <a className={style.container} style={props.style} href={props.link} >
            {props.children}
        </a>
    )
}

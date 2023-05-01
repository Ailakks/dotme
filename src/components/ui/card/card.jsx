import style from "./card.module.css";

export default function Card(props) {
    return (
        <a rel="nofollow" target="_blank" id={style[props.id]} className={style.container} style={props.style} href={props.link} >
            {props.children}
        </a>
    )
}

import style from "./avatar.module.css";

export default function Avatar(props) {
    return (
        <img style={props.style} className={style.image} src={props.image} />
    )
}

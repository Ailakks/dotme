import style from "./icon.module.css";

export default function Icon(props) {
    return (
        <div className={style.container}>
            <i className={props.icon} />
        </div>
    )
}

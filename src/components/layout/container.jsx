import style from "./container.module.css";

export default function Container(props) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

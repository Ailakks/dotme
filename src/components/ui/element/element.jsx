import style from "./element.module.css";

export default function Element(props) {
    return (
        <div className={style.container}>
            <div className={props.className}>
                {props.children}
            </div>
        </div>
    )
}

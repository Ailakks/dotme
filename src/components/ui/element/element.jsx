import style from "./element.module.css";

export default function Element(props) {
    return (
        <div key={props.key} className={style.container}>
            <div className={props.className}>
                {props.children}
            </div>
        </div>
    )
}

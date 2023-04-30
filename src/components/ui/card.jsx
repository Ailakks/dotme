import style from "./card.module.css";

export default function Card(props) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

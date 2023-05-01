import style from "./side-grid.module.css";

export default function SideGrid(props) {
    return (
        <div className={style.container}>
            {props.element}
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

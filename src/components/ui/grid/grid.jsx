import style from "./grid.module.css";

export default function Grid(props) {
    return (
        <div className={style.container}>
            {
                props.list.map((value, key) =>
                    <div key={key}>
                        <img src={value.image} />
                    </div>
                )
            }
        </div>
    )
}

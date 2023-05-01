import style from "./grid.module.css";

export default function Grid(props) {
    return (
        <div className={style.container}>
            {
                props.list.map((value, key) =>
                    <div key={key} className={style.element}>
                        <img src={require('../../../assets/images/' + value.image)} />
                    </div>
                )
            }
        </div>
    )
}

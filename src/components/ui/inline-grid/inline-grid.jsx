import style from "./inline-grid.module.css";

export default function InlineGrid(props) {
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

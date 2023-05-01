import style from "./inline-grid.module.css";

export default function InlineGrid(props) {
    return (
        <div className={style.container}>
            {
                props.list.map((value, key) =>
                    <div key={key} className={style.element}>
                        <a href={value.source ? value.source : value['github']}>
                            <img alt={value.name} src={require('../../../assets/images/' + value.image)} />
                        </a>
                    </div>
                )
            }
        </div>
    )
}

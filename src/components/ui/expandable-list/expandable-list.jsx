import style from "./expandable-list.module.css";

export default function ExpandableList(props) {
    return (
        <div className={style.container}>
            {
                props.list.map((value, key) =>
                    <div key={key} className={style.element}>
                        <img src={require('../../../assets/images/' + value.image)} />
                        <h2>{value.displayName}</h2>
                    </div>
                )
            }
        </div>
    )
}

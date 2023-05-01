import style from "./expandable-list.module.css";
import Element from "../element/element";

export default function ExpandableList(props) {
    return (
        <div className={style.container}>
            {
                props.list.map((value, key) =>
                    <Element className={style.element} key={key}>
                        <img alt={value.displayName} src={require('../../../assets/images/' + value.image)} />
                        <h2>{value.displayName}</h2>
                    </Element>
                )
            }
        </div>
    )
}

import style from "./expandable-list.module.css";
import Element from "../element/element";

export default function ExpandableList(props) {
    return (
        <div className={style.container}>
            {
                props.list.map((value, key) =>
                    <Element className={props.grid && style.grid} key={key}>
                        {value.image && <img alt={value.displayName} src={require('../../../assets/images/' + value.image)}/>}
                        {value.header && <h3>{value.header}</h3>}
                        <h2>{value.displayName}</h2>
                    </Element>
                )
            }
        </div>
    )
}

import style from "./home.module.css";
import Card from "../../components/ui/card";

export default function Home() {
    return (
        <div className={style.container}>
            <Card>
                <h1>Hey, my name is Ailakks! :D</h1>
            </Card>
        </div>
    )
}

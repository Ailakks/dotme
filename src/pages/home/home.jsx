import style from "./home.module.css";

import Card from "../../components/ui/card";
import Container from "../../components/layout/container";

export default function Home() {
    return (
        <Container>
            <div className={style.grid}>
                <Card style={{ gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
                <Card style={{ gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
                <Card style={{ gridColumnStart: 1, gridColumnEnd: 2, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
                <Card style={{ gridColumnStart: 2, gridColumnEnd: 3, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
                <Card style={{ gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
                <Card style={{ gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
                <Card style={{ gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F' }}>
                    <h1>Hey, my name is Ailakks! :D</h1>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.</h3>
                </Card>
            </div>
        </Container>
    )
}

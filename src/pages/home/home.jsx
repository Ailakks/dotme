import style from "./home.module.css";

import Container from "../../components/layout/container";
import Card from "../../components/ui/card/card";
import Icon from "../../components/ui/icon/icon";

export default function Home() {
    return (
        <Container>
            <div className={style.grid}>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h2>Hey, my name is Ailakks! :D</h2>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and
                        JavaScript.</h3>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h1>120 days</h1>
                    <h2>until my birthday, which is February 25.</h2>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 2, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <Icon icon="fa-brands fa-twitter" />
                    <h3>I tweet about my projects, nonsense, some politics, and sometimes memes :)</h3>
                </Card>
                <Card style={{gridColumnStart: 2, gridColumnEnd: 3, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <Icon icon="fa-brands fa-github" />
                    <h3>I code a lot. Looking into more open-source projects.</h3>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h2>Some of my skills :)</h2>
                    <img src="https://skillicons.dev/icons?i=java,js,ts,linux,html,css,react,vue,nextjs,webflow,vite,electron,express,graphql,nestjs,sqlite,mysql,mongo,redis,bots,nginx,cloudflare,grafana,git,nodejs,maven,gradle,gcp,azure,heroku,vscode,idea,postman&perline=11" />
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h2>Content creators I worked for</h2>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h2>Projects I've been part of</h2>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h2>Music I like</h2>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h2>More about me!</h2>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.
                        I'm particularly skilled in designing websites and creating robust APIs using the latest
                        technologies like React and NestJS. I also have experience in crafting Minecraft plugins using
                        PaperMC, BungeeCord & Velocity APIs and I enjoy working with databases like MongoDB, Redis, and
                        occasionally MySQL.</h3>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <Icon icon="fa-brands fa-discord" />
                    <h3>Discord community, certainly inactive, but well, we are still there.</h3>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F', justifyItems: 'center'}}>
                    <h3>I'm from...</h3>
                    <h1>Spain</h1>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#180E33', color: '#61BE8F'}}>
                    <h3>My setup</h3>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#180E33', color: '#61BE8F', justifyItems: 'center'}}>
                    <h3>Timezone</h3>
                    <h1>GMT+2</h1>
                </Card>
            </div>
        </Container>
    )
}

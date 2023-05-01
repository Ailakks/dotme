import style from "./home.module.css";

import Card from "../../components/ui/card/card";
import Icon from "../../components/ui/icon/icon";

import Container from "../../components/layout/container/container";
import SideGrid from "../../components/layout/side-grid/side-grid";
import Avatar from "../../components/ui/avatar/avatar";

import moment from 'moment';
import {useEffect, useState} from "react";

import ContentCreators from "../../assets/list/content-creators.json";
import Projects from "../../assets/list/projects.json";
import Works from "../../assets/list/works.json";
import MinecraftSoftware from "../../assets/list/minecrtaft-software.json";
import InlineGrid from "../../components/ui/inline-grid/inline-grid";

export default function Home() {
    const [date, setDate] = useState(moment({ month: 2, date: 25 }));

    useEffect(() => {
        if (date.isBefore(moment())) {
            setDate(date.clone().add(1, 'year'));
        }
    }, []);

    return (
        <Container>
            <div className={style.grid}>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#4527A0'}}>
                    <SideGrid element={<Avatar style={{height: 120}} image={require('../../assets/images/avatar.png')} />}>
                        <h2>Hey, my name is Ailakks! :D</h2>
                        <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and
                            JavaScript.</h3>
                    </SideGrid>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#F44336'}}>
                    <h1>{date.diff(moment(), 'days')} days</h1>
                    <h3>until my birthday — February 25.</h3>
                </Card>
                <Card link="https://twitter.com/Ailakks" style={{gridColumnStart: 1, gridColumnEnd: 2, backgroundColor: '#1DA1F2'}} id="spaced">
                    <Icon icon="fa-brands fa-twitter" />
                    <h3>I tweet about my projects, nonsense, some politics, and sometimes memes :)</h3>
                </Card>
                <Card link="https://github.com/Ailakks" style={{gridColumnStart: 2, gridColumnEnd: 3, backgroundColor: '#171515'}}  id="spaced">
                    <Icon icon="fa-brands fa-github" />
                    <h3>I code a lot. Looking into more open-source projects.</h3>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#B0BEC5', color: 'black'}}>
                    <h2>Some of my skills :)</h2>
                    <img src="https://skillicons.dev/icons?i=java,js,ts,linux,html,css,react,vue,nextjs,webflow,vite,electron,express,graphql,nestjs,sqlite,mysql,mongo,redis,bots,nginx,cloudflare,grafana,git,nodejs,maven,gradle,gcp,azure,heroku,vscode,idea,postman&perline=11" />
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#6A1B9A'}}>
                    <h2>Content creators I worked for</h2>
                    <InlineGrid list={ContentCreators} />
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#1E88E5'}}>
                    <h2>Projects I've been part of</h2>
                    <InlineGrid list={Projects} />
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#180E33'}}>
                    <h2>Music I like</h2>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#004D40'}}>
                    <h2>More about me!</h2>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.
                        I'm particularly skilled in designing websites and creating robust APIs using the latest
                        technologies like React and NestJS. I also have experience in crafting Minecraft plugins using
                        PaperMC, BungeeCord & Velocity APIs and I enjoy working with databases like MongoDB, Redis, and
                        occasionally MySQL.</h3>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#1E88E5'}}>
                    <h2>Projects I did</h2>
                    <InlineGrid list={Works} />
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 5, backgroundColor: '#1E88E5'}}>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#1E88E5'}}>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#FFC107'}}>
                    <h2>Games I love</h2>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#DD2C00'}}>
                    <h2>Minecraft software I work with</h2>
                </Card>
                <Card link="https://discord.gg/btbnqmtnWz" style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#5865F2'}}>
                    <Icon icon="fa-brands fa-discord" />
                    <h3>Discord community, certainly inactive, but well, we are still there.</h3>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#180E33', justifyItems: 'center'}}>
                    <h3>I'm from...</h3>
                    <h1>Spain</h1>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#180E33'}}>
                    <h2>My setup</h2>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#180E33', justifyItems: 'center'}}>
                    <h3>Timezone</h3>
                    <h1>GMT+2</h1>
                </Card>
            </div>
        </Container>
    )
}

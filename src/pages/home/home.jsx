import style from "./home.module.css";

import Card from "../../components/ui/card/card";
import Icon from "../../components/ui/icon/icon";

import Container from "../../components/layout/container/container";
import SideGrid from "../../components/layout/side-grid/side-grid";
import Avatar from "../../components/ui/avatar/avatar";

import moment from 'moment';
import {createContext, useContext, useEffect, useState} from "react";

import InlineGrid from "../../components/ui/inline-grid/inline-grid";
import ExpandableList from "../../components/ui/expandable-list/expandable-list";
import Activity from "../../components/ui/discord/activity/activity";
import Spotify from "../../components/ui/discord/spotify/spotify";
import Footer from "../../components/ui/footer/footer";

import contentCreators from "../../assets/list/content-creators.json";
import projects from "../../assets/list/projects.json";
import works from "../../assets/list/works.json";
import minecraftSoftware from "../../assets/list/minecraft-software.json";
import setup from "../../assets/list/setup.json";
import recommend from "../../assets/list/recommend.json";

export default function Home() {
    const [date, setDate] = useState(moment({month: 2, date: 25}));

    useEffect(() => {
        if (date.isBefore(moment())) {
            setDate(date.clone().add(1, 'year'));
        }
    }, []);

    return (
        <Container>
            <div className={style.grid}>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#4527A0'}}>
                    <SideGrid
                        element={<Avatar style={{height: 120}} image={require('../../assets/images/avatar.png')}/>}>
                        <h2>Hey, my name is Ailakks! :D</h2>
                        <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and
                            JavaScript.</h3>
                    </SideGrid>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#F44336', textAlign: 'center'}}>
                    <h1>{date.diff(moment(), 'days')} days</h1>
                    <h3>until my birthday — February 25.</h3>
                </Card>
                <Card link="https://twitter.com/Ailakks"
                      style={{gridColumnStart: 1, gridColumnEnd: 2, backgroundColor: '#1DA1F2'}} id="spaced">
                    <Icon icon="fa-brands fa-twitter"/>
                    <h3>I tweet about my projects, nonsense, some politics, and sometimes memes :)</h3>
                </Card>
                <Card link="https://github.com/Ailakks"
                      style={{gridColumnStart: 2, gridColumnEnd: 3, backgroundColor: '#171515'}} id="spaced">
                    <Icon icon="fa-brands fa-github"/>
                    <h3>I code a lot. Looking into more open-source projects.</h3>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#B0BEC5', color: 'black'}}>
                    <h2>Some of my skills :)</h2>
                    <img alt="skills" src="https://skillicons.dev/icons?i=java,js,ts,linux,html,css,react,vue,nextjs,webflow,vite,electron,express,graphql,nestjs,sqlite,mysql,mongo,redis,bots,nginx,cloudflare,grafana,git,nodejs,maven,gradle,gcp,azure,heroku,vscode,idea,postman&perline=11"/>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#6A1B9A'}}>
                    <h2>Content creators I worked for</h2>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#1E88E5'}}>
                    <h2>Projects I've been part of</h2>
                    <ProjectList />
                </Card>
                <Card link="https://open.spotify.com/playlist/3LpykziPdqQltgWnwbAfq4?si=7e891b3008ba45cc"
                      style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#1DB954'}}>
                    <Icon icon="fa-brands fa-spotify"/>
                    <h2>Music I like</h2>
                    <p>Checkout my playlist.</p>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#004D40'}}>
                    <h2>More about me!</h2>
                    <h3>I'm a passionate 17-year-old developer who <mark>loves building cool
                        stuff</mark> with <mark>Java</mark> and <mark>JavaScript</mark>. I'm particularly skilled
                        in <mark>designing websites</mark> and creating <mark>robust APIs</mark> using the latest
                        technologies like <mark>React</mark> and <mark>NestJS</mark>. I also have experience in
                        crafting <mark>Minecraft plugins</mark> using <mark>PaperMC</mark>
                        , <mark>BungeeCord</mark> & <mark>Velocity</mark> APIs and I enjoy
                        working with databases like <mark>MongoDB</mark>, <mark>Redis</mark>, and
                        occasionally <mark>MySQL</mark>.
                    </h3>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#1E88E5'}}>
                    <h2>Projects I did</h2>
                    <InlineGrid list={works}/>
                </Card>
                <Card link="https://github.com/Ailakks/dotme"
                      style={{gridColumnStart: 3, gridColumnEnd: 5, backgroundColor: '#2abf84'}}>
                    <Icon icon="fa-regular fa-code"/>
                    <h2>This website is open source</h2>
                    <h3>You can use it for your own, but remember to keep the "made by Ailakks" label, please :)</h3>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#ab228d'}}>
                    <h2>Activity</h2>
                    <Activity user="725039856933404694"/>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#f54550'}}>
                    <h2>My setup</h2>
                    <ExpandableList list={setup}/>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#DD2C00'}}>
                    <h2>Minecraft software I work with</h2>
                    <ExpandableList grid list={minecraftSoftware}/>
                </Card>
                <Card link="https://discord.gg/btbnqmtnWz"
                      style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#5865F2'}}>
                    <Icon icon="fa-brands fa-discord"/>
                    <h3>Discord community, certainly inactive, but well, we are still there.</h3>
                </Card>
                <Card link="https://www.google.es/maps/place/Spain" style={{
                    gridColumnStart: 3,
                    gridColumnEnd: 5,
                    backgroundColor: '#AD1519',
                    justifyItems: 'center'
                }}>
                    <h3>I'm from...</h3>
                    <h1>Spain</h1>
                </Card>
                <Card id="full" style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: 'none'}}>
                    <Spotify user="725039856933404694"/>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#413177'}}>
                    <h2>Content creators I recommend</h2>
                    <InlineGrid list={recommend}/>
                </Card>
                <Card
                    style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#8422ab', justifyItems: 'center'}}>
                    <h3>Timezone</h3>
                    <h1>GMT+2</h1>
                </Card>
            </div>
            <Footer/>
        </Container>
    )
}

export const ListContext = createContext(null);

function ProjectList() {
    return (
        projects.map((value, key) =>
            <div key={key}>
                <ListContext.Provider value={{ value }}>
                    <ProjectCategoryList />
                </ListContext.Provider>
            </div>
        )
    )
}

function ProjectCategoryList() {
    const { value: { list } } = useContext(ListContext);

    return (
        list.map((value, key) =>
            <div key={key}>
                <ListContext.Provider value={{ value }}>
                    <Project />
                </ListContext.Provider>
            </div>
        )
    )
}

function Project() {
    const { value } = useContext(ListContext);

    return (
        <div>
            <p>{value.target.displayName}</p>
            {value.by && <p>by {value.by.displayName}</p>}
            {value.for && <p>for {value.by.displayName}</p>}
            {value.with && <p>with {value.with.displayName}</p>}
        </div>
    )
}
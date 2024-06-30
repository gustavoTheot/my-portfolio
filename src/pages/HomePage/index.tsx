import { Path, User } from "phosphor-react";
import { aboutMe, experience, experiences } from "../../api/data";
import { Description, HomePageContainer, PathContainer } from "./style";
import Divider from '@mui/material/Divider';

import { Experience } from "../../components/Experience";
import { Title } from "../../components/Title";
import { Paragraph } from "../../components/Paragraph";



export function HomePage() {
    return (
        <>
            <Divider />

            <HomePageContainer>
                <Description>
                    <Title
                        title="Sobre mim"
                        icon={User}
                    />
                    <Paragraph text={aboutMe.first} />
                    <Paragraph text={aboutMe.second} />
                </Description>

                <Description>
                    <Title
                        title="Caminho percorrido"
                        icon={Path}
                    />

                    <Paragraph text={experience.text} />
                </Description>

                <Description>
                    <PathContainer>
                        {
                            experiences.map(item => (
                                <Experience
                                    title={item.title}
                                    description={item.description}
                                    date={item.date}
                                    icon={item.icon}
                                    skill={item.skill}
                                />
                            ))
                        }
                    </PathContainer>
                </Description>
            </HomePageContainer >

        </>
    )
}
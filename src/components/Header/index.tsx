import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { profile, social } from "../../api/data";
import { HeadContainer, HeaderContainer, ImageAndTitle, NavBar, SocialMedia } from "./style";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <HeadContainer>
                <ImageAndTitle>
                    <img src={'https://avatars.githubusercontent.com/u/44641003?v=4'} alt="Avatar" />

                    <div className="nameAndProfession">
                        <h2>{profile.name}</h2>
                        <span>{profile.job}</span>
                    </div>
                </ImageAndTitle>


                <SocialMedia>
                    <span>
                        <a href={social.github} target="_blank">
                            <GithubLogo size={28} />
                        </a>
                    </span>

                    <span>
                        <a href={social.linkedin} target="_blank">
                            <LinkedinLogo size={28} />
                        </a>
                    </span>

                    <span>
                        <a href={social.email} target="_blank">
                            <EnvelopeSimple size={28} />
                        </a>
                    </span>
                </SocialMedia>

                <NavBar>
                    <ul>
                        <li>
                            <Link to={'/'}>Sobre</Link>
                        </li>
                        <li>
                            <Link to={'/err'}>Projetos</Link>
                        </li>
                        <li>
                            <Link to={'/err'}>Blog</Link>
                        </li>
                        <li>
                            <Link to={'/err'}>Habilidades</Link>
                        </li>
                    </ul>

                </NavBar>

            </HeadContainer >


        </HeaderContainer >
    )
}
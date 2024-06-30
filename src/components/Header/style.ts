import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${props => props.theme['black-1000']};
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;
    display: flex;
    justify-content: center;

`

export const HeadContainer = styled.div`
    width: 68rem;
    margin: 0 auto;
    position: block;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImageAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img{
        border-radius: 9999px;
        width: 10rem;
    }

    .nameAndProfession{
        margin-top: 1rem;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.325rem;

        span{
            color: ${props => props.theme['gray-200']}
        }
    }
`

export const SocialMedia = styled.div`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    span{
        a{
            text-decoration: none;
            color: ${props => props.theme['gray-200']};
            transition-timing-function: ease-in;
            transition-duration: .2s; 
        }

        &:first-child a{
            &:hover{
                color: ${props => props.theme['white']};
            }
        }

        &:nth-child(2) a{
            &:hover{
                color: ${props => props.theme['blue']};
            }
        }

        &:last-child a{
            &:hover{
                color: ${props => props.theme['red']};
            }
        }
    }
`

export const NavBar = styled.div`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 10px;
    background-color: ${props => props.theme['black-1000']};
    z-index: 1000;
    width: 100%;
    margin: 0;

    ul{
        margin-top: 2.5rem;
        list-style: none;
        
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 2.5rem;
    
        li{
            font-weight: bold;
         

            a{
                text-decoration: none;
                color: ${props => props.theme['white']};
                transition-timing-function: ease-in;
                transition-duration: .2s; 

                &:hover{
                cursor: pointer;
                color: ${props => props.theme['gray-200']};
            }
            }

           
        }
    }
  
`
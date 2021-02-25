import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />

                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="search..."></input>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>

            <UserContainer>
                <Name>
                    Vikas William
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png"></img>
                </UserImage>

            </UserContainer>



        </Container>


    )
}

export default Header;

const Container = styled.div`

background :#350d36;
color: white;
display: flex;
align-items: center;
justify-content: space-between;


`

const Main = styled.div`

display: flex;

`

const SearchContainer = styled.div`

min-width: 400px;

`

const Search = styled.div`

box-shadow: inset 0 0 0 1px rgb(104 74 104);
width: 100%;
border-radius: 6px;

input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
}

input:focus{
    outline:none;
}

`

const UserContainer = styled.div`

display: flex;
align-items: center;
padding-right:16px;


`

const Name = styled.div`

padding-right:16px;
`

const UserImage = styled.div`

width:28px;
height:28px;
border: 2px solid white;
border-radius: 3px;

img{
    width:100%;
}

`
import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

function SideBar(props) {
    return (
       <Container>
           <WorkSpaceContainer>
               <Name>
                   CleverProgrammer
               </Name>
               <NewMessage>
               <AddCircleOutlineIcon />
               </NewMessage>
           </WorkSpaceContainer>
           <MainChannels>
               {
                   sidebarItems.map(item=>(
                    <MainChannelItem>
                    {item.icons}
                    {item.text}
                    </MainChannelItem>

                   ))
               }
               
           </MainChannels>

           <ChannelsContainer>
               <NewChannelContainer>
                   <div>
                       Channels
                     
                   </div>
                   <AddIcon/>
               </NewChannelContainer>
               <ChannelList>
                   {
                       props.rooms.map(item => ( 

                           <Channel>
                            #{ item.name}
                        </Channel>

                       ))
                   }
               </ChannelList>
           </ChannelsContainer>
       </Container>
    )
}

export default SideBar

const Container=styled.div `
background: #3F0E40;
`
const WorkSpaceContainer= styled.div `

color:white;
height:64px;
display:flex;
align-items: center;
padding-left:19px;

justify-content:space-between;
border-bottom: 1px solid #532753;
`

const Name= styled.div `

`

const NewMessage= styled.div `


width:36px;
height:36px;
background:white;
color: #3F0E40;
fill: #3F0E40;
display:flex;
justify-content: center;
align-items:center;
border-radius:50%;
margin-right: 20px;
cursor:pointer;

`

const MainChannels= styled.div `

`

const MainChannelItem= styled.div `
color: rgb(188,171,188);
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items: center;
padding-left: 19px;
cursor: pointer;
`

const ChannelsContainer=styled.div `
color: rgb(188,171,188);
margin-top: 10px;
`

const NewChannelContainer=styled.div `
display:flex;
justify-content: space-between;
align-items: center;
height:28px;
padding-left:19px;
padding-right: 19px;

`

const ChannelList=styled.div `

display: grid;
align-items: center;
padding-left: 19px;
`

const Channel= styled.div `

`
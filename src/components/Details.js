import React from 'react'
import styled from 'styled-components';
function Details() {
    return (
        <Container>
           <Background>
               <img src="https://jooinn.com/images/cute-kid-1.jpg"/>
           </Background>
           <ImageTitle>
               <img src="https://pngimg.com/uploads/walt_disney/walt_disney_PNG45.png" />
           </ImageTitle>
           <Controls>
              <PlayButton>
               <img src="play-icon-black.png" alt="Play"/>
               <span>PLAY</span>
              </PlayButton>

              <TrailerButton>
              <img src="play-icon-white.png" alt="Trailer"/>
              <span>Trailer</span>
              </TrailerButton>

              <AddButton>
              <span>+</span>
              </AddButton>

              <GroupWatchButton>
              <img src="group-icon.png" alt="group"/>
              </GroupWatchButton>

           </Controls>
           <SubTitle>
            This is a subtitle text.
           </SubTitle>
           <Description>
            Wanted to add some description.
           </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
 min-height: calc(100vh-70px);
 padding:0 calc(3.5vw + 5px);
 position: relative;
`
const Background = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
`
const ImageTitle = styled.div`
height: 30vh;
min-height:170px;
width: 35vw;
min-width:200px;

img{
    width: 100%;
    height: 100%;
    object-fit:contain;
}
`
const Controls = styled.div`
display: flex;
align-items: center;

`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
border:none;
letter-spacing: 1.8px;
cursor: pointer;

&:hover{
    background: rgb(198,198,198);
}

`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249,249,249);
text-transform: uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width:44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);
cursor: pointer;

span {
    font-size: 30px;
    color-white;
   }
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);
`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
`
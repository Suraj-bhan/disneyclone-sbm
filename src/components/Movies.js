import React from 'react';
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C872C32AD77DB34E0AB742A1279A1866956AB37D462E5AF877703478ABDCCE6E/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0393E9025FEA64945E5D2599915B4050C957520DA062A08444F2DFC13E485F27/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4A1AE4AF83F1B18E3249A265CC4B353AF2EC7A8D8A17449C839C4D8CF900F6B/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425B550C6684DF17D7AF70DF7D2FC126180FD97EDD7E6A99F6418480EB49163A/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425B550C6684DF17D7AF70DF7D2FC126180FD97EDD7E6A99F6418480EB49163A/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425B550C6684DF17D7AF70DF7D2FC126180FD97EDD7E6A99F6418480EB49163A/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425B550C6684DF17D7AF70DF7D2FC126180FD97EDD7E6A99F6418480EB49163A/scale?width=300&aspectRatio=1.78"/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425B550C6684DF17D7AF70DF7D2FC126180FD97EDD7E6A99F6418480EB49163A/scale?width=300&aspectRatio=1.78"/>
                </Wrap>

            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
 
`
const Content = styled.div`
 display: grid;
 grid-gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
 border-radius: 10px;
 cursor: pointer;
 overflow: hidden;
 border: 3px solid rgba(249, 249, 249, 0.1);
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
&:hover {
     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     border-color: rgba(249, 249, 249, 0.8)
 }
 
`

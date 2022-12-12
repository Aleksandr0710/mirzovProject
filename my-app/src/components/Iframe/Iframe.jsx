import styled from "styled-components"

const Ad = styled.div`
 height: 420px;
 @media (min-width: 1024px) and (max-width: 1499px) {
    height: 320px ; 
     width: 320px ;
 }
     @media (max-width:425px) {
    display: none;
}
`
const AdvertisementTitle = styled.p`
color: #888888;
`

const AdvertisementImg = styled.img`
 width: 100%;
`

const AdvertisementVideo = styled.iframe`
 width: 100%;
 height: 100%;
`
const Iframe = () => {
    return (
        <Ad>
            <AdvertisementTitle>Реклама</AdvertisementTitle>
            <AdvertisementImg src="./img/advertising1.jpg" alt="реклама" />
            <AdvertisementVideo title="AD" src="https://www.youtube.com/embed/GLlEfWNXJaM" allow="fullscreen" />
        </Ad>
    );
}

export default Iframe;

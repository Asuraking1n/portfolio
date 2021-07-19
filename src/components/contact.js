import React from 'react'
import styled from "styled-components"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

const contact = () => {
  
    const mapStyles = {        
        height: "87vh",
        width: "80%",
        borderRadius:"10px"
        
    
    };
      
      const defaultCenter = {
        lat: 25.2864, lng: 82.9692
      }

    return (
        <div>
            <Container>
            <ConDetail>
                <div><LocationOnOutlinedIcon style={{fontSize:"40px", color:"#043f7a"}}/>
                <span style={{fontSize:"20px",letterSpacing:"1px"}}> Varanasi</span>
                </div>
                <div><PhoneSharpIcon style={{fontSize:"40px", color:"#043f7a"}}/>
                <span style={{fontSize:"20px",letterSpacing:"1px"}}> 8081842897</span></div>
                <div><MailOutlineOutlinedIcon style={{fontSize:"40px", color:"#043f7a"}}/>
                <span > nishant88tiwari@gmail.com</span>
                </div>
            </ConDetail>

            <Gmap>
            <LoadScript
       googleMapsApiKey='AIzaSyB2rOba4Xo0_N1OOXLhLXrZmoSAaLhOLQw'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>

              <Marker position={defaultCenter}/>

         
     </GoogleMap>
     </LoadScript>
            </Gmap>
            </Container>
        </div>
    )
}

export default contact
const Container = styled.div`
height: 100vh;
width: 70vw;
/* background-color: red; */
display: flex;
overflow: hidden;
background-image: url(images/bg.gif);
`
const ConDetail = styled.div`
height: 100vh;
width: 20vw;
/* background-color: red; */
display: flex;

flex-direction: column;
align-items: center;
justify-content: space-evenly;
div{
    box-shadow: inset 1px 4px 21px 2px rgba(0,0,0,0.9);
    height: 150px;
    width: 200px;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;

}
span{
    font-size: 15px;
    font-weight: 600;
    
}
`
const Gmap = styled.div`
height: 100vh;
width: 45vw;
/* background-color: green; */
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`
import React from 'react'
import styled from "styled-components"
// import {NavLink} from "react-router-dom"
const about = () => {
    return (
        <>
            <Container>
            <Cont>
            <Title>Nishant Kr Tiwari</Title>
            <Description>
            <span>
            I am Student, Coder & Web Designer based in The India, <br /> but working Worldwide. I am passionate about designing <br /> and developing user-friendly websites. I have all the skills <br /> to create a new high quality website or improve existing <br /> websites for individuals and organisations, using the latest <br /> techniques and trends, I Love to Collaborate with you in <br /> your work.
            </span>
            </Description>
            </Cont>
            
             <Footer>
                <div style={{fontFamily: "cursive",letterSpacing:"2px",color:"#043f7a", fontSize:"20px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    Made with ❤️ by Nishant
                </div>
             </Footer>
             
            </Container>
        </>
    )
}

export default about;
const Container = styled.div`
height: 100vh;
width: 70vw;
background-size: cover;
background-repeat: no-repeat;
background-color: rgba(0,0,0,0.8);
background-image:url(images/bg.gif) ;
overflow: hidden;
z-index: -1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const Cont = styled.div`
margin-top: -100px;
`
const Title = styled.div`
/* background-color: red; */
color: #fff;
height: 150px;
max-width: 400px;
font-size: 60px;
font: 600;
letter-spacing: 6px;
font-family: 'Domine', serif;

`
const Description = styled.div`

height: 200px;
max-width: 550px;
font-family:sans-serif; 
font-size: 17px;
color: #fff;
box-shadow: 1px 4px 21px 2px rgba(255,255,250,0.1);
background-color: rgba(0,0,0,0.5);
z-index: 1;
letter-spacing: 1px;
padding: 40px;
display: flex;
align-items: center;
justify-content: center;

border-radius: 10%;

font-weight: 600;

`
const Footer= styled.div`
height:30px;
width: 62.7vw;
background-color: #fff;
border-radius: 70px 70px 0 0;
background-color:#1a1b1c;
position: absolute;
bottom: 0;
`
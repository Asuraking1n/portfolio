import React from 'react'
import styled from "styled-components"
import Card from "../components/pageComponents/Card"
const Project = () => {
    return (
        <>
        <Container>
         <Title>
             Projects
         </Title>
         <CardList>
              
             
             <Card 
                 imglink= "images/disney.png"
                 title= "Disney +"
                 description= "This is the full dynamic clone of Disney+ App with complete google authentication."
                 buttonlink= "https://github.com/Asuraking1n/Disney-Clone-reactApp"
             />
             <Card 
                 imglink= "images/linkden.png"
                 title= "LinkedIn"
                 description= "This is the Exact clone of LinkedIn Web app Fully respinsive designed"
                 buttonlink= "https://github.com/Asuraking1n/linkedin-clone-react-app"
             />
             
             
             <Card
                 imglink= "images/googlekeepapp.png"
                 title= "Keep App"
                 description= "This is the Clone of Google keep app with react.js"
                 buttonlink= "https://github.com/Asuraking1n/google-keepApp-clone-reactApp" />
             <Card 
                  imglink= "images/sword.png"
                  title= "CssSword"
                  description= "This drawing is completly made in CSS no images is used."
                  buttonlink= "https://github.com/Asuraking1n/pureCSS_art-sword"
             />
        
             <Card 
                  imglink= "images/resweb.png"
                  title= "WebApp"
                  description= "This is a responsive Websites made in React js "
                  buttonlink= "https://github.com/Asuraking1n/React-Responsive-website"
             />
             
             

    

         </CardList>
        </Container>
        </>
    )
}

export default Project
const Container = styled.div`
height: 100vh;
width: 70vw;
/* background-color: red; */
display: flex;
flex-direction:column;
overflow-y: scroll;
overflow-x:hidden;
background-image: url(images/bg.gif);

`
const Title = styled.div`
height: 100px;
font-size: 60px;
font-weight: 600;
color: #fff;
margin-left: 50px;
margin-top: 10px;

`

const CardList = styled.div`


max-width: 55vw;
margin-left: 50px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`
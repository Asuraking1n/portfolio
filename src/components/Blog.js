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
                 imglink= "images/blogpic1.png"
                 title= "BugHunting"
                 description= "This blog is about general approach to hunt bugs. This is common methodology for any beginers"
                 buttonlink= "https://nishant99tiwari.medium.com/methodology-general-approach-to-hunt-bugs-73c74c44818"
             />
             <Card 
                 imglink= "images/blogpic2.png"
                 title= "__name__ == “__main__” "
                 description= "What and Why if __name__ == “__main__” in Python"
                 buttonlink= "https://nishant99tiwari.medium.com/what-and-why-if-name-main-in-python-23bed7cac274"
             />
             
             
             <Card
                 imglink= "images/blogpic3.png"
                 title= "Keep App"
                 description= "This is a incredible List of npm Packages for React Developers"
                 buttonlink= "https://nishant99tiwari.medium.com/a-incredible-list-of-npm-packages-for-react-developers-c90482e2bb0f" />
            
             

    

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
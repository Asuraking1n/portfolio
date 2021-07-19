
import React from 'react'
import styled from "styled-components"
const Card = (props) => {
  return (
    <>
      <Container>
           <CardImg>
             <img src={props.imglink} alt="" />
             <div style={{fontSize:"20px",maxWidth:"150px",maxHeight:"50px",fontWeight:"600",marginTop:"-10px",letterSpacing:"2px",overflow:"hidden"}}>{props.title}</div>

             <div style={{fontSize:"13px",borderRadius:"50%",marginTop:"15px",color:"rgba(0,0,0,0.5"}}>{props.description} </div>
            <a href={props.buttonlink}> <Button>View</Button></a>
           </CardImg>
           
      </Container>
    </>
  )
}

export default Card


const Container = styled.div`

`

const  CardImg = styled.div`
height: 170px;
display: flex;
padding: 25px;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
width: 170px;
border-radius: 50%;
background-color: #fff;
margin-top: 40px;
margin-bottom: 40px;
margin-right: 20px;
box-shadow: 0px 10px 13px -7px #000000, inset 0px 0px 21px 2px black,inset 1px 4px 21px 2px rgba(101,101,99,0);
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  height: 270px;
  width: 270px;
  margin-top: 140px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
a{
  text-decoration: none;
}
&:hover{
  
  img{
    height: 0;
    width: 0;
    margin-top: 0;
  }
}
`
const Button = styled.div`
height: 40px;
width: 70px;
/* background-color:red ; */
margin-top:25px;
border-radius: 20px;
display: flex;
align-items: center;
color: #3394f5;
justify-content: center;
border:2px solid #3394f5;
cursor: pointer;
font: 600;
font-size:17px ;
letter-spacing: 1px;
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
&:hover{
  background-color: #3394f5;
  color: #fff;
}
`
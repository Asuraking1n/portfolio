import React from 'react'
import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const Vcard = () => {
    return (
        <div>
            <Container>
            <Profile>
                <Circle>
                <img src="images/profile-bg.png" alt="" />
                </Circle>
                <ProfilePic>
                    <img src="images/profile.jpg" alt="" />
                </ProfilePic>
                <Name>
                    Nishant 
                </Name>
                <Info>
                  <Wrapper>
                     <StaticTxt>I'm a</StaticTxt>
                       <DynamicTxt>
                       <li><span>Student</span></li>
                       <li><span>Coder</span></li>
                       <li><span>Developer</span></li>
                       <li><span>Freelancer</span></li>
                       </DynamicTxt>
                 </Wrapper>
                 </Info>

             <SocialMedia>
                 <a href="https://github.com/Asuraking1n/" ><GitHubIcon style={{color:"grey",fontSize:"35px",marginRight:"30px"}}/></a>
                 <a href="https://www.linkedin.com/in/nishant-kumar-tiwari-253a46196/" target="_blank" rel="noreferrer"><LinkedInIcon style={{color:"grey",fontSize:"35px",marginRight:"30px"}}/></a>
                 <a href="https://www.instagram.com/error_404_unavilable/" target="_blank" rel="noreferrer"><InstagramIcon style={{color:"grey",fontSize:"35px"}}/></a>
             </SocialMedia> 
             <Resume><a href="https://drive.google.com/file/d/1gb1CJ1kUBze6YJHFwgw1gx12BCd_mApz/view?usp=drivesdk" target="_b">
                <Button> Download CV </Button></a>
             </Resume>
            </Profile>
            </Container>
        </div>
    )
}

export default Vcard;

const Container = styled.div`
height: 100vh;
width: 30vw;
/* -webkit-box-shadow: inset 1px -1px 32px 4px rgba(210,211,208,0.81);  */
/* box-shadow: 4px 3px 32px 3px rgba(70,70,69,0.81); */
background-color: #1a1b1c;
overflow: hidden;

`
const Profile = styled.div`
height: 300px;
width: 30vw;
/* background-color: red; */
`
const Circle = styled.div`
img{
height: 410px;
width: 410px;
opacity: 0.4;

}
`
const ProfilePic = styled.div`
height: 130px;
width: 130px;
position: absolute;
top: 136px;
left: 306px;
border-radius: 50%;
overflow: hidden;
border: 3px solid rgba(0,0,0,0.4);
img{
    height: 150px;
    width: 130px;
}
`
const Info = styled.div`
display: flex;
margin-top: -50px;
/* align-items: center; */
justify-content: center;
min-height: 10vh;
`
const Wrapper =styled.div`
display: inline-flex;
/* align-items: center; */
`

const StaticTxt = styled.div`
color: #fff;
font-size: 40px;
font-weight: 600;
margin-left: 60px;
margin-top: -10px;
`

const DynamicTxt =styled.ul`
margin-left: -5px;
margin-top: -10px;
height: 60px;
line-height: 60px;
overflow: hidden;

li{
list-style: none;
color: #043f7a;
font-size: 40px;
font-weight: 600;
position: relative;
top: 0;
animation: slide 20s steps(4) infinite;

@keyframes slide{
100%{
    top: -240px;
}
}


span{
    position: relative;
}
  span::after{
 content:"";
 position: absolute;
 left: 0;
 height: 100%;
 width: 100%;
 background: #1a1b1c;
 border-left: 2px solid red;
 animation: typing 5s steps(9) infinite;

  }

@keyframes typing{
100%{
    left: 100%;
    margin:0 -35px 0 35px;
}
}
}
`
const Name = styled.div`
font-size: 40px;
font: 600;
color: #043f7a;
position: absolute;
top: 5px;
/* font-family: 'Roboto Mono', monospace; */
font-family: 'Luckiest Guy', cursive;
left:200px;
letter-spacing: 8px;
`

const SocialMedia = styled.div`
/* background: red; */
height: 50px;
display: flex;
justify-content: center;
margin-top:30px;

`
const Resume = styled.div`
display: flex;
justify-content: center;
align-items: center;

a{
    text-decoration: none;
    
}

`
const Button = styled.div`
height: 50px;
width: 170px;
text-decoration: none;
border: 2px solid #fff;
cursor: pointer;
border-radius:30px ;
margin-top: 20px;
color: #fff;
background-color: rgba(0,0,0,0.1);
font: 800;
font-size: 17px;
letter-spacing: 2px;
overflow: hidden;
display: flex;
align-items: center;

justify-content: center;
-webkit-box-shadow: 1px 15px 37px -9px rgba(104,104,102,0.81); 
box-shadow:1px 5px 30px -16px rgba(255,255,250,0.81);

&:hover{
color: #043f7a;
font: 800;
box-shadow: 1px 5px 30px -16px rgba(104,104,102,0.81);
border:2px solid #043f7a;
}
`
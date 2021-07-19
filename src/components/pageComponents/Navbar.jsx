import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import LayersIcon from '@material-ui/icons/Layers';
import AndroidIcon from '@material-ui/icons/Android';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CallIcon from '@material-ui/icons/Call';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        < >
           <Container>
               <NavLink to="/">
               <AboutButton>
               <PersonIcon style={{ color: "white",fontSize:55, fontWeight:100,zIndex:100 }}/><span> About Us </span>
               <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vedios/disney.mp4" type="video/mp4" />
               </video>
               </AboutButton>
               </NavLink>
               <NavLink to ="/resume"> 
               <ResumeButton>
               <LayersIcon style={{ color: "white",fontSize:55, fontWeight:100,zIndex:100 }}/><span> Resume </span>
               <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vedios/disney.mp4" type="video/mp4" />
               </video>
               </ResumeButton>
               </NavLink>
               <NavLink to="/project">
               <ProjectsButton>
               <AndroidIcon style={{ color: "white",fontSize:55, fontWeight:100,zIndex:100 }}/><span> Projects </span>
               <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vedios/disney.mp4" type="video/mp4" />
               </video>
               </ProjectsButton>
               </NavLink>
               <NavLink to="/blog">
               <BlogButton>
               <BubbleChartIcon style={{ color: "white",fontSize:55, fontWeight:100,zIndex:100 }}/><span> Blogs </span>
               <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vedios/disney.mp4" type="video/mp4" />
               </video>
               </BlogButton>
               </NavLink>
               <NavLink to="/contact">
               <ContactButton>
               <CallIcon style={{ color: "white",fontSize:55, fontWeight:100,zIndex:100 }}/><span> Contacts </span>
               <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vedios/disney.mp4" type="video/mp4" />
               </video>
               </ContactButton>
               </NavLink>
           </Container> 
        </>                     
    )
}

export default Navbar;


const Container = styled.div`
height: 100vh;
width: 100px;
background-color: rgba(0,0,0,0.6);

`

const AboutButton = styled.div`
position: relative;
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
height: 80px;
width: 100px;
border-radius: 0 10px 10px 0;
background-color: rgb(66, 66, 64);
display:flex ;
margin-bottom: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78); 
box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78);
overflow: hidden;
video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
span{
    font-size: 14px;
    font-weight: 600;
    font-family: 'Encode Sans SC', sans-serif;
    color: white;
    z-index:1;
}


&:hover{
    width: 120px;
      box-shadow: inset 1px 4px 31px -8px black,
      1px 4px 31px 5px #000205;
      background-color: #2179de;
    video {
      opacity: 1;
    }
    
    span{
        color: #fff;
    }
    
    

}

`
const ResumeButton = styled.div`
position: relative;
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
height: 80px;
width: 100px;
border-radius: 0 10px 10px 0;
background-color: rgb(66, 66, 64);
display:flex ;
margin-bottom: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78); 
box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78);
overflow: hidden;
video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
span{
    font-size: 14px;
    font-weight: 600;
    font-family: 'Encode Sans SC', sans-serif;
    color: white;
    z-index:1;
}


&:hover{
    width: 120px;
      box-shadow: inset 1px 4px 31px -8px black,
      1px 4px 31px 5px #000205;
      background-color: #2179de;
    video {
      opacity: 1;
    }
    
    span{
        color: #fff;
    }
    

}
`
const ProjectsButton = styled.div`
position: relative;
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
height: 80px;
width: 100px;
border-radius: 0 10px 10px 0;
background-color: rgb(66, 66, 64);
display:flex ;
margin-bottom: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78); 
box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78);
overflow: hidden;
video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
span{
    font-size: 14px;
    font-weight: 600;
    font-family: 'Encode Sans SC', sans-serif;
    color: white;
    z-index:1;
    text-decoration: none;
}


&:hover{
    width: 120px;
      box-shadow: inset 1px 4px 31px -8px black,
      1px 4px 31px 5px #000205;
      background-color: #2179de;
    video {
      opacity: 1;
    }
    
    span{
        color: #fff;
    }
    

}
`
const BlogButton = styled.div`
position: relative;
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
height: 80px;
width: 100px;
border-radius: 0 10px 10px 0;
background-color: rgb(66, 66, 64);
display:flex ;
margin-bottom: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78); 
box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78);
overflow: hidden;
video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
span{
    font-size: 14px;
    font-weight: 600;
    font-family: 'Encode Sans SC', sans-serif;
    color: white;
    z-index:1;
}


&:hover{
    width: 120px;
      box-shadow: inset 1px 4px 31px -8px black,
      1px 4px 31px 5px #000205;
      background-color: #2179de;
    video {
      opacity: 1;
    }
    
    span{
        color: #fff;
    }
    

}
`
const ContactButton = styled.div`
position: relative;
transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
height: 80px;
width: 100px;
border-radius: 0 10px 10px 0;
background-color: rgb(66, 66, 64);
display:flex ;
margin-bottom: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78); 
box-shadow: 10px 3px 14px -2px rgba(0,0,0,0.78);
overflow: hidden;
video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
span{
    font-size: 14px;
    font-weight: 600;
    font-family: 'Encode Sans SC', sans-serif;
    color: white;
    z-index:1;
}


&:hover{
    width: 120px;
      box-shadow: inset 1px 4px 31px -8px black,
      1px 4px 31px 5px #000205;
      background-color: #2179de;
    video {
      opacity: 1;
    }
    
    span{
        color: #fff;
    }
    

}
`
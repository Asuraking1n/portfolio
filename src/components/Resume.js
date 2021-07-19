
import React from 'react'
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';
const Resume = () => {
    return (
        <div>
            <Container>
                <Title>
                    Resume
                </Title>
                <Res>
                    <Intern>

                        <div style={{
                            textAlign: "right",
                            fontSize: "25px",
                            fontWeight: 600,
                            marginRight: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Internships</div>
                        <br />
                        <Incontain>
                            <Interns>
                                <InternOne>
                                    <div style={{
                                        textAlign: "right",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        marginRight: "20px",
                                        color: "#fff",
                                    }}>February 2020 – March 2020</div>
                                    <div style={{
                                        textAlign: "right",
                                        fontSize: "15px",
                                        marginTop: "10px",
                                        marginRight: "20px",
                                        color: "rgb(181, 166, 165)",

                                    }}>NCIIPC (India Government cyber security department)</div>
                                    <img src="images/nciipc.png" alt="" style={{ height: "50px", width: "50px", textAlign: "right", marginLeft: "130px", marginTop: "5px" }} />
                                </InternOne>
                                <InternTwo>

                                    <div style={{
                                        textAlign: "right",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        marginRight: "20px",
                                        color: "#fff",
                                    }}>July 2019 - August 2019</div>
                                    <div style={{
                                        textAlign: "right",
                                        fontSize: "15px",
                                        marginTop: "10px",
                                        marginRight: "20px",
                                        color: "rgb(181, 166, 165)",

                                    }}>Softpro India pvt Ltd</div>
                                    <img src="images/softpro.png" alt="" style={{ height: "50px", borderRadius: "50%", width: "50px", textAlign: "right", marginLeft: "130px", marginTop: "5px" }} />
                                </InternTwo>
                                <div style={{
                                    textAlign: "right",
                                    fontSize: "25px",
                                    fontWeight: 600,
                                    marginRight: "20px",
                                    marginBottom: "20px",
                                    color: "#fff",
                                    letterSpacing: "2px"
                                }}>Education</div>
                                <div style={{
                                    textAlign: "right",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    marginRight: "20px",
                                    color: "#fff",
                                }}>2018 – 2022</div>
                                <div style={{
                                    textAlign: "right",
                                    fontSize: "15px",
                                    marginTop: "10px",
                                    marginRight: "20px",
                                    color: "rgb(181, 166, 165)",

                                }}>Dr. Ram Manohar Lohia Awadh University</div>

                            </Interns>
                            <Divider>

                            </Divider>
                        </Incontain>
                    </Intern>

                    <Des>

                        <Description>
                            <DesOne>
                                <div style={{

                                    fontSize: "18px",
                                    fontWeight: 600,
                                    marginLeft: "20px",
                                    marginTop: "55px",
                                    color: "#fff",
                                }}>Penetester and Web Developer</div>

                                <div style={{

                                    fontSize: "15px",
                                    padding: "30px",
                                    marginRight: "20px",
                                    color: "rgb(181, 166, 165)",

                                }}>• Worked as a Web Developer and created a vulnerable web application to test and teach about OSWAP
                                    Top 10 vulnerabilities and created in such a way that it can also be used as capture the flag event. <br />
                                    • Worked as a Penetration tester and reported several vulnerabilities in government web applications.</div>
                            </DesOne>
                            <DesTwo>
                                <div style={{

                                    fontSize: "18px",
                                    fontWeight: 600,
                                    marginLeft: "20px",
                                    marginTop: "75px",
                                    color: "#fff",
                                }}>Web Developer</div>

                                <div style={{

                                    fontSize: "15px",
                                    padding: "30px",
                                    marginRight: "20px",
                                    color: "rgb(181, 166, 165)",

                                }}>• Worked as a part of development team and created a hospital management project.
                                    • Built a technical website which have a feature of updating news, writing blogs, upload video and books
                                    etc Using WordPress.</div>

                            </DesTwo>
                            <div style={{

                                fontSize: "18px",
                                fontWeight: 600,
                                marginLeft: "20px",
                                marginTop: "68px",
                                color: "#fff",
                            }}>B.Tech. in Computer Science and Engineering</div>

                            <div style={{

                                fontSize: "15px",
                                padding: "30px",
                                marginRight: "20px",
                                color: "rgb(181, 166, 165)",
                                marginTop:"-20px"

                            }}>• Main coursework: Data Structures, Design and analysis of Algorithms, Computer Architecture,
Artificial Intelligence, Database Systems, Operating Systems, Software Engineering.</div>

                        </Description>
                    </Des>
                    <Skill>
                        <div style={{

                            fontSize: "25px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Coding Skills</div>
                        <br />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Python</div>

                        <LinearProgress color="secondary" variant="determinate" value={95} style={{ width: "200px", marginLeft: "20px", marginBottom: "10px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>ReactJs</div>

                        <LinearProgress color="primary" variant="determinate" value={85} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>HTML/CSS/UI </div>

                        <LinearProgress color="secondary" variant="determinate" value={100} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>WordPress/ C </div>

                        <LinearProgress color="primary" variant="determinate" value={80} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{

                            fontSize: "25px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            marginBottom: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Other Skills</div>
                        <br />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>OS-Linux, Windows </div>

                        <LinearProgress color="secondary" variant="determinate" value={90} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />

                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Cyber Security and Web App Testing </div>

                        <LinearProgress color="primary" variant="determinate" value={95} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>MySql </div>

                        <LinearProgress color="secondary" variant="determinate" value={90} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Git/Github </div>

                        <LinearProgress color="primary" variant="determinate" value={80} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Problem Solving </div>

                        <LinearProgress color="secondary" variant="determinate" value={90} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginLeft: "20px",
                            color: "#fff",
                            letterSpacing: "2px"
                        }}>Data structure and Algorithms </div>

                        <LinearProgress color="primary" variant="determinate" value={95} style={{ width: "200px", marginBottom: "10px", marginLeft: "20px", marginTop: "20px", height: '5px', borderRadius: "10px", border: "2px solid rgba(0,0,0,0.2" }} />




                    </Skill>
                </Res>
                <OtheSkill>
                    Knowledges
                </OtheSkill>
                <Tags>
                <div style={{
                    height:" 30px",
                    width: "200px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"35px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Frontend Designing
                </div>
                <div style={{
                    height:" 30px",
                    width: "80px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Github
                </div>
                <div style={{
                    height:" 30px",
                    width: "150px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Cyber Security
                </div>
                <div style={{
                    height:" 30px",
                    width: "150px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Blog writting
                </div>
                <div style={{
                    height:" 30px",
                    width: "160px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Problem Solving
                </div>
                <div style={{
                    height:" 30px",
                    width: "180px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Time Management
                </div>
                <div style={{
                    height:" 30px",
                    width: "160px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Communication
                </div>
                <div style={{
                    height:" 30px",
                    width: "130px",
                    padding: "5px",
                    margin: "10px",
                    marginLeft:"20px",
                    letterSpacing:"1px",
                    fontSize:"18px",
                    background: "#043f7a",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap",
                    borderRadius:"10px",
                    color: "#fff"

                }}>
                    Social Media
                </div>
       
                </Tags>
                <Certificate>
                    Certificates
                </Certificate>
                <Certi>
                <a href="https://drive.google.com/file/d/1Zb3pvfMi1jRJmTZjfUJW8DTgy9ThrMNU/view?usp=drivesdk" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                <CertiOne>
                <img src="images/nciipc.png" alt="" style={{height:"100px",width:"100px",marginRight:"5px"}} />
                <div style={{
                    height: "115px",
                    width: "193px",
                    background: "rgba(0,0,0,0.9)",
                    borderRadius:"0 12px 12px 0",
                    display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                <span style={{
                    color: "#fff",
                    fontSize:"20px",
                    padding: "18px",
                    marginTop:"-20px",
                    fontWeight:600
                }}>
                    Penetester and Web Dev
                </span>
                <span style={{
                    color: "grey",
                    fontSize:"10px",
                    marginLeft:"-100px",
                    marginTop:"-5px"
                   
                }}>5 March 2020</span>
                </div>
                </CertiOne></a>

 <a href="https://drive.google.com/file/d/1U9fn8LF2AEI4GHvsFXZhnttVXR-y06Ys/view?usp=drivesdk" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                <CertiTwo>
                <img src="images/softpro.png" alt="" style={{height:"100px",width:"100px",marginRight:"5px"}} />
                <div style={{
                    height: "115px",
                    width: "193px",
                    background: "rgba(0,0,0,0.9)",
                    borderRadius:"0 12px 12px 0",
                    display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                <span style={{
                    color: "#fff",
                    fontSize:"20px",
                    padding: "18px",
                    marginTop:"-20px",
                    fontWeight:600
                }}>
                     Web Developer
                </span>
                <span style={{
                    color: "grey",
                    fontSize:"10px",
                    marginLeft:"-100px",
                    marginTop:"-5px"
                   
                }}>5 March 2020</span>
                </div>
                </CertiTwo></a>


                
                </Certi>
            </Container>
        </div>
    )
}

export default Resume
const CertiOne= styled.div`
height: 120px;
width: 300px;
background-color: white;
margin-left: 40px;
margin-bottom: 40px;
border-radius: 12px;
display: flex;
align-items: center;
cursor: pointer;
transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
&:hover{
    border: 4px solid #043f7a;
}

`
const CertiTwo= styled.div`
height: 120px;
width: 300px;
background-color: white;
margin-left: 40px;
margin-bottom: 40px;
border-radius: 12px;
display: flex;
align-items: center;
cursor: pointer;
transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
&:hover{
    border: 4px solid #043f7a;
}

`
const Certi = styled.div`
display: flex;
/* justify-content: space-around; */
`
const Container = styled.div`
height: 100vh;
width: 100vw;
/* background-image:url(images/bg.gif) ; */
background-color: rgba(0,0,0,0.8);
overflow-y: scroll;
overflow-x: hidden;


`
const Title = styled.div`
height: 100px;
font-size: 60px;
font-weight: 600;
color: #fff;
margin-left: 30px;
margin-top: 10px;
`
const Res = styled.div`
height: 130vh;
width: 63vw;
display: flex;
/* background-color: red; */
`
const Intern = styled.div`
height: 130vh;
width: 15vw;
/* background-color: blue; */
`
const Des = styled.div`
height: 130vh;
width: 30vw;

/* background-color: green; */
`
const Skill = styled.div`
width: 18vw;
height: 130vh;
/* background-color: yellow; */
`
const Incontain = styled.div`
display: flex;
`
const Interns = styled.div`

`
const Divider = styled.div`
height: 750px;
width: 4px;
background-color: white;
margin-top: -50px;

`
const InternOne = styled.div`
height: 320px;
`
const InternTwo = styled.div`
height: 200px;
`

const Description = styled.div`

justify-content: space-around;
`
const DesOne = styled.div``
const DesTwo = styled.div``

const OtheSkill = styled.div`
height: 100px;
font-size: 50px;
font-weight: 600;
color: #fff;
margin-left: 30px;
margin-top: 10px;
`
const Tags = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 63vw;
`
const Certificate = styled.div`
height: 100px;
font-size: 50px;
font-weight: 600;
color: #fff;
margin-left: 30px;
margin-top: 40px;
`
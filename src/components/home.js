import React from 'react';
import styled from "styled-components";
import Navbar from "./pageComponents/Navbar";
import Vcard from './pageComponents/Vcard';
const home = () => {
    return (
        <>
        <Container>
        <Navbar/>
        <Vcard/>
        </Container>
        </>
    )
}

export default home;

const Container = styled.div`
display: flex;
`
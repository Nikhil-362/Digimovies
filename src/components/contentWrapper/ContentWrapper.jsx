import React from "react";
import styled from 'styled-components';

const ContentWrapper = ({ children }) => {
    return <><ContentWrap>{children}</ContentWrap> </>;
};

export default ContentWrapper;

const ContentWrap = styled.div` 
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; 
`

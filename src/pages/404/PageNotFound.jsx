import React from 'react';
import styled from "styled-components"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

function PageNotFound() {
  return (
    <div>
      <Pnf>
        <ContentWrapper>
        <h1>404</h1>
        <p>Page not found!</p>
        </ContentWrapper>
      </Pnf>
    </div>
  );
}

export default PageNotFound;
const Pnf = styled.div`
    text-align: center;
    color: red;
    height: 700px;
    padding-top: 200px;

    h1{
            font-size: 150px;
            font-weight: 700;
        }
    p{
            font-size: 44px;
        }
`

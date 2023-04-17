import React from 'react';
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videoSection/VideoSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommandation';
import styled from 'styled-components';


const Details = () => {
  const {mediaType, id} = useParams();
  const {data, loading}= useFetch(`/${mediaType}/${id}/videos`)
  const {data : credits, loading: creditsLoading}= useFetch(`/${mediaType}/${id}/credits`)

  

  return (
    <>
    <Bg>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
     
      <Cast data={credits?.cast}
            loading={creditsLoading}/>
    
    <VideosSection data={data} loading={loading}/>
    <Similar mediaType={mediaType} id={id}/>
    <Recommendation mediaType={mediaType} id={id}/>

    </Bg>
    </>
  );
}

export default Details;

const Bg = styled.div`
  background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(121,9,9,0) 10%, #19281f 100%);
  
`

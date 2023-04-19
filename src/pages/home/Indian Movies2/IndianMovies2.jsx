import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import './IndianMovies.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import { useEffect } from 'react';


const IndianMovies2 = () => {
  
 const [endpoint, setEndpoint] = useState("ta");

    const { data, loading } = useFetch(`/discover/movie/`,{ with_original_language : `${endpoint}` ,region : 'in' }, endpoint);

  const onTabChange =(tab)=>{
 setEndpoint(tab === "Tamil"? "ta" : "kn");

console.log(endpoint);
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
          <div className="space">
        <span className="carouselTitle">
           Indian Movies
        </span>
       
        <SwitchTabs data={["Tamil","Kannada"]} onTabChange={onTabChange}/>
        
        </div>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  );
}

export default IndianMovies2;

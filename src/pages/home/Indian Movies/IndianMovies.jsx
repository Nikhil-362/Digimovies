import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import './IndianMovies.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import { useEffect } from 'react';


const IndianMovies = () => {
  
 const [endpoint, setEndpoint] = useState("te");

 let a ={ with_original_language : `${endpoint}` ,region : 'in' }
    const { data, loading } = useFetch(`/discover/movie/`,a, endpoint);

  const onTabChange =(tab)=>{
 setEndpoint(tab === "Telugu"? "te" : "hi");

console.log(endpoint);
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
          <div className="space">
        <span className="carouselTitle">
           Indian Movies
        </span>
       
        <SwitchTabs data={["Telugu","Hindi"]} onTabChange={onTabChange}/>
        
        </div>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  );
}

export default IndianMovies;

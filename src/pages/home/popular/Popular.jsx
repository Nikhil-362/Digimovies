import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import '../Trending/Trending.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';


const Popular = () => {
  
 const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange =(tab)=>{
 setEndpoint(tab === "Movies"? "movie" : "tv");
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
          <div className="space">
        <span className="carouselTitle">
           What's Populars ?
        </span>
       
        <SwitchTabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
        
        </div>
        </ContentWrapper>
        <Carousel data={data?.results} 
                loading={loading}
                endpoint={endpoint}/>
    </div>
  );
}

export default Popular;

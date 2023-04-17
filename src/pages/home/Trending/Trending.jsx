import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import './Trending.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';


const Trending = () => {
  
 const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange =(tab)=>{
 setEndpoint(tab === "Day"? "day" : "week");
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
          <div className="space">
        <span className="carouselTitle">
            Trending
        </span>
       
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        
        </div>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  );
}

export default Trending;

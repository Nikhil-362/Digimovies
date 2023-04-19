import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import './IndianMovies.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';


const IndianMovies3 = () => {
  
 const [endpoint, setEndpoint] = useState("ml");

    const { data, loading } = useFetch(`/discover/movie/`,{ with_original_language : `${endpoint}` ,region : 'in' }, endpoint);

  const onTabChange =(tab)=>{
 setEndpoint(tab === "Marathi"? "mr" : "ml");

console.log(endpoint);
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
          <div className="space">
        <span className="carouselTitle">
           Indian Movies
        </span>
       
        <SwitchTabs data={["Malayalam ","Marathi"]} onTabChange={onTabChange}/>
        
        </div>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  );
}

export default IndianMovies3;

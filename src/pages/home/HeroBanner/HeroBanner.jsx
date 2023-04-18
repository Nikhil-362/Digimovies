import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImages/img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import './HeroBanner.scss'

const HeroBanner = () => {

  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state)=> state.home);

  const {data, loading} =useFetch('/movie/upcoming')

  useEffect(() => {
    const bg = url.backdrop + 
              data?.results[Math.floor(Math.random() *20)]?.backdrop_path
              setBackground(bg);
  }, [data]);

  const searchQuery = (event)=>{
      if(query && (event.key ==="Enter" || event.target.type ==="submit")){
        navigate(`/search/${query}`)
      }
  }

  return (
    <div className='heroBanner'>
      {!loading && <div className='backdrop-img'>
          <Img src={background}/>
      </div>}

      <div className='opacity-layer'></div>

      <ContentWrapper>
      <div className='wrapper'>
        <div className='heroBannerContent'>

          <span className='title'>Welcome</span>
          <span className='subtitle'>"The ultimate destination for movie lovers. Experience the magic with us."</span>

          <div className='inputbox'>
            <input type='text' placeholder='Search Movie, Web Series, Tv Shows'
                  onChange={(e)=>{setQuery(e.target.value)}}
                  onKeyDown={searchQuery}></input>
                  <button onClick={searchQuery}> Search</button>
          </div>
          
        </div>
      </div>
        
      </ContentWrapper>

      
     </div>


  );
}

export default HeroBanner;

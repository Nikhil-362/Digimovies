import React, { useState, useEffect } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import './IndianMovies.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';

const IndianMovies = () => {
  
  const [endpoint, setEndpoint] = useState("te");
  const [filters, setFilters] = useState({ with_original_language: "te", region: "in" });

  const { data, loading } = useFetch("/discover/movie/", filters);

  useEffect(() => {
    setFilters({ with_original_language: endpoint, region: "in" });
  }, [endpoint]);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Telugu" ? "te" : "hi");
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

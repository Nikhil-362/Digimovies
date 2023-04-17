import React from 'react';
import { useState, useEffect } from 'react';
import {fetchDataFromApi} from './util/api'


// Importing Dispatcher from React Redux 
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Actions
import { getApiConfig , getGenres} from './store/homeSlice';

// Importing Components
import Home from './pages/home/Home';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Details from './pages/details/Details'
import SearchPage from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import styled from 'styled-components';


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state)=> state.home)

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig= ()=>{
    console.log(import.meta.env.VITE_TMDB_TOKEN);

    fetchDataFromApi("/configuration")
    .then((res)=> {
      // console.log(res);

      const url ={
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

    dispatch(getApiConfig(url))
    })

    }

    const genresCall = async ()=>{
      let promises = []
      let endPoints =["tv","movie"]
      let allGenres = {}

      endPoints.forEach((url)=>{
        return promises.push(fetchDataFromApi(`/genre/${url}/list`))
      })

      const data = await Promise.all(promises);

      data.map(({genres})=>{

        return genres.map((item)=>(allGenres[item.id] = item))
      });

      dispatch(getGenres(allGenres));
    }
 
  return (
   <BrowserRouter>
      <Header/>
      <Bg>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:mediaType/:id' element={<Details/>}/>
          <Route path='/search/:query' element={<SearchPage/>}/>
          <Route path='/explore/:mediaType' element={<Explore/>}/>
          <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
      </Bg>
   </BrowserRouter>
  );
}

export default App;
const Bg = styled.div`
  background-color: #19281f;
  
`
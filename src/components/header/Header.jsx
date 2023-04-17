import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
// import logo from "../../assets/logo.png";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [location])

    useEffect(() => {
     window.addEventListener('scroll', controlNav )
     return ()=>{
     window.remove('scroll', controlNav )
        
     }
    }, [lastScrollY]);

    const controlNav=()=>{
        if(window.scrollY >200){
           if(window.scrollY > lastScrollY && !mobileMenu)
            setShow('hide');
            else{
                setShow('show');
            }
        }
        else{
            setShow('top');
        }
       
    }

    const searchQuery = (event)=>{
        if(query && event.key ==="Enter"){
          navigate(`/search/${query}`)

          setTimeout(()=>{
            setShowSearch(false)
          }, 1000)
        }
    }

    const openSearch =()=>{
        setMobileMenu(false)        
        setShowSearch(true)
    }
    const openMobileMenu =()=>{
            setMobileMenu(true)        
            setShowSearch(false)        
    }

    const goto =(type)=>{
        if(type === 'movie'){
            navigate('/explore/movie')
        }else{
            navigate('/explore/tv')
        }

        setMobileMenu(false)
    }

    return (
        <header className={`header ${mobileMenu? 'mobileView': ''} ${show}`} >
            <ContentWrapper>
                <div className="cent"> 
                <div className="logo" onClick={()=> navigate("/")}>
             <h1 className="logo">Digimovies</h1>
                </div>

                <ul className="menuItems">
                    <li className="menuItem" onClick={()=>{goto('movie')}}>Movies</li>
                    <li className="menuItem" onClick={()=>{goto('tv')}}>Tv Shows</li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch}/>
                        </li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
                </div>
                
            </ContentWrapper>


           { showSearch &&  (
            <div className="searchBar">
                <ContentWrapper>
                    <div className='searchInput'>
            <input type='text' className="inp" placeholder='Search Movie, Web Series, Tv Shows'
                  onChange={(e)=>{setQuery(e.target.value)}}
                  onKeyDown={searchQuery}/>

                  <VscChromeClose onClick={()=>{setShowSearch(false)}}/>
                </div> </ContentWrapper>
            </div>)}
                
        </header>
    );
};

export default Header;

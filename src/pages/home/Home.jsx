import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import styled from 'styled-components';
import IndianMovies from './Indian Movies/IndianMovies';
import IndianMovies2 from './Indian Movies2/IndianMovies2';
import IndianMovies3 from './Indian Movies3/IndianMovies3';
// import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
    <Homepage>
    
          <HeroBanner/>

      <Back>      
          <Trending/>
          <TopRated/>
          
        {/*    <IndianMovies/>
    <IndianMovies2/>
          <IndianMovies3/> */}
          
          <Popular/>
        
       
      </Back>

    </Homepage>
    </>
  );
}

export default Home;

const Back = styled.div`
background-repeat: no-repeat;
background-size: cover;
backdrop-filter: saturate(180%) blur(10px);
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1279%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(39%2c 61%2c 48%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c672.826C122.85%2c688.436%2c206.396%2c547.468%2c298.985%2c465.23C378.035%2c395.017%2c441.896%2c316.619%2c500.281%2c228.471C569.246%2c124.349%2c695.337%2c26.022%2c671.032%2c-96.48C646.476%2c-220.245%2c490.501%2c-262.512%2c388.209%2c-336.385C309.378%2c-393.315%2c226.028%2c-432.661%2c140.771%2c-479.421C28.504%2c-540.994%2c-66.116%2c-676.77%2c-192.249%2c-654.739C-315.901%2c-633.141%2c-372.921%2c-486.557%2c-436.849%2c-378.532C-491.786%2c-285.7%2c-506.502%2c-181.052%2c-534.257%2c-76.815C-566.186%2c43.098%2c-675.469%2c172.85%2c-612.068%2c279.522C-546.644%2c389.599%2c-361.57%2c325.762%2c-253.842%2c394.986C-146.125%2c464.203%2c-127.018%2c656.687%2c0%2c672.826' fill='%2319281f'%3e%3c/path%3e%3cpath d='M1440 1063.689C1544.796 1057.402 1653.81 1085.828 1747.547 1038.5520000000001 1845.567 989.116 1921.863 900.6800000000001 1964.116 799.356 2005.664 699.723 1994.6019999999999 589.319 1979.451 482.43899999999996 1964.274 375.374 1941.085 268.492 1876.561 181.71699999999998 1809.064 90.945 1712.732 29.506999999999948 1609.042-15.702999999999975 1494.11-65.81500000000005 1369.551-124.86699999999996 1248.522-92.11400000000003 1126.951-59.214000000000055 1030.924 43.84500000000003 973.95 156.16500000000002 922.469 257.657 960.929 376.473 953.242 490.015 946.271 592.977 904.59 692.717 930.8679999999999 792.513 959.886 902.717 1007.203 1023.363 1107.786 1076.9360000000001 1207.625 1130.112 1327.086 1070.463 1440 1063.689' fill='%23355241'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1279'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`

const Homepage = styled.div`
  display: block;
  margin :0 ;
  padding: 0;
  background-color: #19281f;
`

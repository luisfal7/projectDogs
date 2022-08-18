import React from 'react';
import Nav from '../Nav/Nav';
import Filter from '../Filter/Filter';
import Pages from '../Pagination/Pages';

function Home() {
   
    return ( 
        <div>
            
                <Nav/> 
                <Filter/>
                <Pages/> 
        
        </div>
     );
}

export default Home;


import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Auther from './Auther.js';

function App()
{
    return (
    <div className='container'>
        <Header/>
        <Main/>
        <Footer/>
        <Auther name="Rutuja" surname="Mane"/>
    </div>
);
}
export default App;


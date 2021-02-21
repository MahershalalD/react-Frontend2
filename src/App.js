import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Section_two from './components/section_two/section_two'
import Section_three from './components/Section_three/Section_three'
import Section_four from './components/Section_four/Section_four'
import Footer from './components/footer/footer'
import Signin from './components/SignIn/Signin'


function App(){
    return(
        <div>
            <Navbar />
            <Header />
            <Section_two />
            <Section_three />
            <Section_four />
            <Footer /> 
        </div>
    )
}
export default App;

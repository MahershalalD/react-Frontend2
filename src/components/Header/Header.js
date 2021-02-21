import React, { useState } from 'react'
import './Header.css'

function Header() {
    const [x,setx]= useState(0);

    function goleft(){
        console.log(x);
        x === 0 ? setx(-100*(3-1)) : setx(x + 100)
      }
    function goright() {
        console.log(x);
        x=== -100*(3-1)?setx(0):setx(x-100)
    }
    function setx1(){
        setx(0)
    }
    function setx2(){
        setx(-100)
    }
    function setx3(){
        setx(-200)
    }
    return (
        <div className="main">
            <div className="main_wrapper">
            <div >
                    <h1 className="head_text" style={{ transform: `translateX(${x}%)` }}>WHERE THERE IS LIGHT THERE IS A WAY</h1>
                    <button className="get" style={{ transform: `translateX(${x}%)` }}>Get Started</button>
                <img src='./Images/3d1.png' className="thrd_1" style={{ transform: `translateX(${x}%)` }}/>

            </div>
            <div>
                    <h1 className="head_text" style={{ transform: `translateX(${x}%)` }}>Grow with us to your Success</h1>
                <img src='./Images/3d2.png' className="thrd_1" style={{ transform: `translateX(${x}%)` }}/>

            </div>
            <div>
                    <h1 className="head_text" style={{ transform: `translateX(${x}%)` }}>Drops of Help could make a Success Story</h1>
                <img src='./Images/3d3.png' className="thrd_1" style={{ transform: `translateX(${x}%)` }}/>
            </div>
            </div>
            <img id="prev" src="./Images/right-arrow.svg" onClick={goleft} />
            <img id="next" src="./Images/right-arrow.svg" onClick={goright} />
            <div className="circle">
                <div className={x === 0 ? "circle1 circle_active" :"circle1"} onClick={setx1}></div>
                <div className={x === -100 ? "circle2 circle_active" : "circle2"} onClick={setx2}></div>
                <div className={x === -200 ? "circle3 circle_active" : "circle3"} onClick={setx3}></div>
            </div>
        </div>
    )
}
export default Header;
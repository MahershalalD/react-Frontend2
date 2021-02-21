import React from 'react';
import './Section_three.css';

export default function Section_three() {
    return (
        <div className="section_three">
            <div className="section_three_main">
                <img src="./Images/iicWorklogo.png" className="section_three_back_img"></img>
                <div className="box">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
                <div className="box5"></div> 
                </div>
                <div className="section_three_flex_main">
                    <div className="section_three_flex_main_flex">
                        <div className="section_three_flex_main_svg">
                        <img src="./Images/portfolio.svg" style={{color:"white"}}></img>
                            <h3 style={{ marginLeft: "10px" }}>  Browse portfolios</h3>
                    </div>
                        <p className="section_three_flex_main_flex_text">Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
                    </div>
                    <div className="section_three_flex_main_flex">
                        <div className="section_three_flex_main_svg">
                            <img src="./Images/wall-clock.svg" style={{ fill: "white" }}></img>
                            <h3 style={{marginLeft:"10px"}}>  Track progress</h3>
                        </div>
                        <p className="section_three_flex_main_flex_text">Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
                    </div>
                    <div className="section_three_flex_main_flex">
                        <div className="section_three_flex_main_svg">
                            <img src="./Images/live-chat (1).svg" style={{ color: "white" }}></img>
                            <h3 style={{ marginLeft: "10px" }}>  Live chat</h3>
                        </div>
                        <p className="section_three_flex_main_flex_text">Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Section_four.css'

export default function Section_four() {
    return (
        <div className="section_main">
            <div className="section_main_heading">
                <h2>Top Picks ....</h2>
            </div>
            <div className="section_main_list">
                <div className="section_main_picks">
                    <img src="./Images/web-programming.svg" ></img>
                    <h2>WEB DEVELOPMENT</h2>
                </div>
                <div className="section_main_picks">
                    <img src="./Images/web-design.svg" ></img>
                    <h2>UI/UX DESIGN</h2>
                </div>
                <div className="section_main_picks">
                    <img src="./Images/app-development.svg" ></img>
                    <h2>APP DEVELOPMENT</h2>
                </div>
                <div className="section_main_picks">
                    <img src="./Images/backend.svg" ></img>
                    <h2>BACKEND DEVELOPMENT</h2>
                </div>
                <div className="section_main_picks">
                    <img src="./Images/chip.svg" ></img>
                    <h2>HARDWARE WORK</h2>
                </div>
            </div>
            <div className="section_four_triangle1"></div>
            <div className="section_four_triangle2"></div>
        </div>
    )
}

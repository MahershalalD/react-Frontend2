import React from 'react'
import './section_two.css'

export default function Section_two() {
    return (
        <div className="section_two">
            <div className="section_two_main">
            <div className="section_two_triangle1"></div>
                <div className="section_two_triangle2"></div>
            <div className="section_two_card_main">
                <img src="./Images/graphic-designer.svg" className="section_two_card_svg"></img>
                    <img src="./Images/iicWorklogo.png" className="section_two_card_logo"></img>
                    <div className="section_two_text_part">
                    <h2 className="section_two_text">START WORKING</h2>
                    <p className="section_two_text_p">Showcase your skills and get hired</p>
                    <button className="section_two_button">Start here</button>
                    </div>
                    
            </div>
            <div className="section_two_card_main">
                    <img src="./Images/employee.svg" className="section_two_card_svg"></img>
                    <img src="./Images/iicWorklogo.png" className="section_two_card_logo"></img>
                    <div className="section_two_text_part">
                        <h2 className="section_two_text">START WORKING</h2>
                        <p className="section_two_text_p">Showcase your skills and get hired</p>
                        <button className="section_two_button">Start here</button>
                    </div>
            </div>
        </div> 
        </div>
       
    )
}

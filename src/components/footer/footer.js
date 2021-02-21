import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_main">
            <div className="footer_sub">
                <img src="./Images/iicWorklogo.png"></img>
                <h3>IIC WORK</h3>
            </div>
                <p>Whatever your needs, there will be a 
            freelancer to get it done: from web 
            design, mobile app development, virtual 
            assistants, product manufacturing, and 
graphic design</p>
        <div className="line"></div>
        <div className="footer_foot_two_text">
            <div className="footer_foot_two_text_p">
                <h3>Registered Users</h3>
                <p>0000000</p>
            </div>
            <div className="footer_foot_two_text_p">
                <h3>Total Jobs Posted</h3>
                <p>0000000</p>
            </div>
        </div>
            </div>
            <div className="circle_footer2"></div>
            <div className="circle_footer1"></div>
        </div>
    )
}

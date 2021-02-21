import React, { useState } from 'react'
import './Signin.css'
import PersonIcon from '@material-ui/icons/Person';
import BallotIcon from '@material-ui/icons/Ballot';
import WorkIcon from '@material-ui/icons/Work';
import PublishIcon from '@material-ui/icons/Publish';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import transitions from '@material-ui/core/styles/transitions';

export default function Signin() {
    const [X,setX]= useState(0);
    const callNext= () =>{
        setX(X-1920)
    }
    const callPrev = () => {
        setX(X+ 1920)
    }
    console.log(X);
    return (
        <div className="signin_up">
            <div className="signin_mockup_circle_small" style={{ transform: X === -1920 ? `translate(-900px,-900px)` : X === 0 ? 'translate(1100px,400px)' : X === -3840 ? 'translate(1100px,-950px)' : "none" }}></div>
        <div className="signin_mockup_circle" style={{ transform: X === -1920 ? `translate(-900px,-900px)` : X === 0 ? 'translate(1100px,400px)' : X === -3840 ? 'translate(1100px,-950px)' : "none" }}></div>
            <div className="signin_up_0" style={{ transform:`translateX(${X}px)`}}>
            <div className="signup_logo">
                <img src="./Images/iicWorklogo.png" ></img>
                <h2>IIC Work</h2>
            </div>
            <div className="signin_up_main">
               <h1>SIGN IN</h1>
               <h3>PROFILE DETAILS</h3>
               <div className="signup_form">
                   <div className="signin_input">
                       <p>FIRST NAME</p>
                       <input type="text" placeholder="ENTER YOU FIRST NAME"></input>
                   </div>
                    <div className="signin_input">
                        <p>LAST NAME</p>
                        <input type="text" placeholder="ENTER YOU FIRST NAME"></input>
                    </div>
                    <div className="signin_input">
                        <p>EMAIL ID</p>
                        <input type="text" placeholder="ENTER YOU FIRST NAME"></input>
                    </div>
                    <div className="signin_input">
                        <p>PASSWORD</p>
                        <input type="text" placeholder="ENTER YOU FIRST NAME"></input>
                    </div>
                    <div className="signin_input">
                        <p>CONFIRM PASSWORD</p>
                        <div>
                           <input type="text" placeholder="ENTER YOU FIRST NAME" />
                        </div>
                        
                    </div>
                    <div className="signin_input">
                        <button type="button" onClick={callNext}>NEXT</button>
                    </div>
               </div>
            </div>
          
  
</div>
            <img src="./Images/undraw_Blog_post_re_fy5x.svg" className="signin_mockup_logo" style={{ transform: X === 0 ? `translate(-100px,-100px)` : 'translate(1100px,400px)'}}/>
            {/* ----------------------------------------------SIGNUP_TERM2--------------------------------- */}
         <div className="signin_up1" style={{ transform: `translateX(${-1920-X}px)` }}>
            <div className="signup_logo1">
                <img src="./Images/iicWorklogo.png" ></img>
                <h2>IIC Work</h2>
            </div>
            <div className="signin_up_main1">
                <h1>SIGN IN</h1>
                <h3>GENERAL DETAILS</h3>
                <div className="signup_form1">
                    <div className="signin_input1">
                        <p>PHONE NUMBER</p>
                        <input type="text" placeholder="ENTER YOU PHONE NUMBER"></input>
                    </div>
                    <div className="signin_input1">
                        <p>CONTACT MAIL ID</p>
                        <input type="text" placeholder="ENTER YOU CONTACT MAIL ID"></input>
                    </div>
                        <div className="signin_input1">
                            <p>DEPARTMENT</p>
                            <div>
                                <select>
                                    <option className="signin_input1_option" value="volvo">DEPARTMENT</option>
                                    <option className="signin_input1_option" value="saab">AUTOMOBILE ENGINEERING</option>
                                    <option className="signin_input1_option" value="opel">Opel</option>
                                    <option className="signin_input1_option" value="audi">Audi</option>
                                </select>
                            </div>

                        </div>
                    <div className="signin_input1">
                        <p>STUDYING YEAR</p>
                        <input type="text" placeholder="ENTER YOU STUDYING YEAR"></input>
                    </div>
                    <div className="signin_input1">
                        <p>ROLL NO</p>
                        <input type="text" placeholder="ENTER YOU ROLL NO"></input>
                    </div>
                    
                    <div className="signin_input1" style={{display:"flex",marginLeft:"10px"}}>
                            <button type="button" onClick={callPrev}>PREV</button>
                            <button type="button" style={{ marginLeft: "10px" }} onClick={callNext}>NEXT</button>
                    </div>
                </div>
                
            </div>
           
            </div>
            <img src="./Images/undraw_information_tab_ocka.svg" className="signin_mockup_logo1" style={{ transform: X === -1920 ? `translate(80px,50px)` : 'translate(-1100px,-400px)' }}/>
            <div className="signin_up2" style={{ transform: `translateX(${-3840 - X}px)` }}>
                <div className="signup_logo2">
                    <img src="./Images/iicWorklogo.png" ></img>
                    <h2>IIC Work</h2>
                </div>
                <div className="signin_up_main2">
                    <h1>SIGN IN</h1>
                    <h3>GENERAL DETAILS</h3>
                    <div className="signup_form2">
                        <div className="signin_input2">
                            <p>PHONE NUMBER</p>
                            <input type="text" placeholder="ENTER YOU PHONE NUMBER"></input>
                        </div>
                        <div className="signin_input2">
                            <p>CONTACT MAIL ID</p>
                            <input type="text" placeholder="ENTER YOU CONTACT MAIL ID"></input>
                        </div>
                        <div className="signin_input2">
                            <p>DEPARTMENT</p>
                            <div>
                                <select>
                                    <option className="signin_input1_option" value="volvo">DEPARTMENT</option>
                                    <option className="signin_input1_option" value="saab">AUTOMOBILE ENGINEERING</option>
                                    <option className="signin_input1_option" value="opel">Opel</option>
                                    <option className="signin_input1_option" value="audi">Audi</option>
                                </select>
                            </div>

                        </div>
                        <div className="signin_input2">
                            <p>STUDYING YEAR</p>
                            <input type="text" placeholder="ENTER YOU STUDYING YEAR"></input>
                        </div>
                        <div className="signin_input2">
                            <p>ROLL NO</p>
                            <input type="text" placeholder="ENTER YOU ROLL NO"></input>
                        </div>

                        <div className="signin_input2" style={{ display: "flex", marginLeft: "10px" }}>
                            <button type="button" onClick={callPrev}>PREV</button>
                            <button type="button" style={{ marginLeft: "10px" }} onClick={callNext}>NEXT</button>
                        </div>
                    </div>

                </div>

            </div>
            <img src="./Images/undraw_updated_resume_u4fy.svg" className="signin_mockup_logo2" style={{ transform: X === -3840? `translate(-120px,100px)` : 'translate(1100px,-1000px)' }} />
            <div className="signin_timeflow">
                <PersonIcon className="icon" style={{ border: X === 0 || -1920 ? "none" : "1px solid #3A2424", backgroundColor: X === 0 || -1920 ? "#3A2424" : "transparent", color: X === 0 || -1920 ? "white" : "#3A2424", padding: "5px", borderRadius: "20px" }} />
                <div className="signin_timeflow_line" style={{ border: X === -1920 ? "2px solid #3A2424" : "0px solid #3A2424" }}></div>
                <BallotIcon className="icon" style={{ border: X === -1920 ? "none" : "1px solid #3A2424", backgroundColor: X === -1920 ? "#3A2424" : "transparent", color: X === -1920 ? "white" : "#3A2424", padding: "5px", borderRadius: "20px" }} />
                <div className="signin_timeflow_line"></div>
                <WorkIcon className="icon" style={{ border: "1px solid #3A2424", color: "#3A2424", padding: "5px", borderRadius: "20px" }} />
                <div className="signin_timeflow_line"></div>
                <PublishIcon className="icon" style={{ border: "1px solid #3A2424", color: "#3A2424", padding: "5px", borderRadius: "20px" }} />
            </div>
            
        </div>
    )
}

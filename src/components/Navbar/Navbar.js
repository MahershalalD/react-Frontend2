import React, { useState } from 'react';
import './Navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BorderBottom } from '@material-ui/icons';

function Navbar(){
    const [click,setClick] =useState(true);
    const [acc_btn,setAcc_btn] = useState(false);

    function setHandleClick(){
        setClick(!click);
    }
    const setHandleAcc=()=>{
        setAcc_btn(!acc_btn);
    }
    return(
        <div>
            <nav className="navbar" >
                <div className="nav_ham" onClick={setHandleClick}>
                    <div className="ham_line1"></div>
                    <div className="ham_line2"></div>
                    <div className="ham_line3"></div>
                </div>
                <div className="nav_logo">
                    <img src='./Images/iicWorklogo.png' alt="IIC_LOGO" className="nav_logo_img" />
                </div>
                <div className="nav_logo_text">
                    <h3>IIC WORK</h3>
                </div>
                <div className="nav_account">
                    <AccountCircleIcon className="nav_account_icon" fontSize='large' onClick={setHandleAcc}/>
                </div>
               
            </nav>
             <div className={click ? "drop_down" :"drop_down_active"} >
                <ul>
                    <li>
                        <h3>Hire</h3>
                    </li>
                    <li>
                        <h3>Find Job</h3>
                    </li> 
                    <hr style={{BorderBottom:"2px solid yellow"}}></hr>
                </ul>
            </div>
            <div className={acc_btn && click===true ? "acc_main_active": "acc_main"}>
                <div className="acc_sub">
                    <ul>
                        <li>
                            <span>My Profile</span>
                        </li>
                        <li>
                            <span>Sign Out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
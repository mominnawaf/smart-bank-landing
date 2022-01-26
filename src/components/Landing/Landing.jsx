import React, { Component } from "react";
import "./Landing.css";
import { AppBar, IconButton } from "@material-ui/core";
import Logo from "../../assets/logo.png";
import VisaCard from '../../assets/visa-card.png';
import { Work, ArrowRightAlt } from "@material-ui/icons";

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <AppBar
                    position="static"
                    color="transparent"
                    elevation={0}
                    className="app-bar"
                >
                    <div className="nav-container">
                        <div className="nav-links">
                            <nav>About</nav>
                            <nav>How it works</nav>
                            <nav>Contacts</nav>
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <IconButton className="shop-btn">
                            <Work style={{ color: "#6B7275" }} />
                        </IconButton>
                    </div>
                </AppBar>
                <div className="landing-2">
                    <div className="left-container">
                        <h1>Banking <div className="eclips">more</div> smart</h1>
                        <h5>Meet the only spend management platform and corporate card.</h5>
                        <div className="btn">
                            <div className="arrow">
                                <ArrowRightAlt style={{ color: "#ffff", 'margin-top': '10px' }} />
                            </div>
                            <div style={{ 'margin-top': '10px', 'margin-left': '10px' }} >Get your Card</div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="right-wrapper">
                            <div className="blue">
                                <img src={VisaCard} alt="visa-card" className="visa" />
                            </div>
                            <div className="yellow">
                                <div className="yellow-container">
                                    <IconButton className="icon">
                                        <Work style={{ color: "#6B7275" }} />
                                    </IconButton>
                                    <IconButton className="icon">
                                        <Work style={{ color: "#6B7275" }} />
                                    </IconButton>
                                    <IconButton className="icon">
                                        <Work style={{ color: "#6B7275" }} />
                                    </IconButton>
                                    <IconButton className="icon">
                                        <Work style={{ color: "#6B7275" }} />
                                    </IconButton>
                                    <IconButton className="icon">
                                        <Work style={{ color: "#6B7275" }} />
                                    </IconButton>
                                    <IconButton className="icon">
                                        <Work style={{ color: "#6B7275" }} />
                                    </IconButton>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="deal">
                    <div className="hot-deal">
                        <h3>
                            Hot 🔥 <br/> deals for you
                        </h3>
                        <p>
                        Online shopping for retail sales direct to consumers
                        </p>
                    </div>
                    <div className="hot-deal-2">
                        <Work />
                        <h4>
                        1.5% cashback
                        </h4>
                        <p>
                        Online shopping for retail sales direct to consumers
                        </p>
                    </div>
                    <div className="hot-deal">
                        <h3>
                            Hot deals for you
                        </h3>
                        <p>
                        Online shopping for retail sales direct to consumers
                        </p>
                    </div>
                    <div className="hot-deal">
                        <h3>
                            Hot deals for you
                        </h3>
                        <p>
                        Online shopping for retail sales direct to consumers
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

import React from 'react';
import './App.css';

function Huddle() {
    return (
      <div id="main-wrapper">
            <div className="header">
            <div id="sub-header">
                    <h1><a href="#" class=""><i class="far fa-comment-dots"></i></a>
                        Huddle
                    </h1>
                </div>
                <div id="click">
                    <input type="submit" value="Try free"/>
                </div>
               
                <div id='textArea'>
                    <div className="para">
                        <h2>Build The Community</h2> 
                        <h2> Your fans Will Love</h2> 
                        
                        <p >Huddle re-imagine the way we 
                            build communities.
                            You have a voice,
                            but so does your audience.
                            Create connections with
                            your users as you engage in genuine discussion.
                        </p>
                        
                        <br/>
                        <input type="submit" value="Get Started for free"/>
                    </div>
                        <img src="" alt=""/>
                </div>
            </div>
            
            <div className="body"> 
                <div id="text">
                    <div className="txt-1">
                        <h3>Grow Together</h3>
                        <p>Generate meaning discussions with your audience and
                            build a strong, loyal community. Think of the insightful
                            conversation you miss out on with a feedback form.
                        </p>
                    </div>
                    <div className="image">
                        <img src={require("./images/growtogether.jpg")}/>
                    </div>
                </div>

                <div id="text">
                    <div className="txt-2">
                        <h4>Flowing conversation</h4>
                        <p>You woundn't paginate a conversation in a real life, so why do
                        it online? Our threads have just-in-time loading for a more nature flow.
                        </p>
                    </div>
                    <div className="pic">
                        <img src={require("./images/flowing-conversation.jpg")}/>
                    </div>    
                </div>

                <div id="text">
                    <div className="txt-1">
                        <h3>Your User</h3>
                        <p>it takes no time at all to integrate Huddle with your app's 
                            authentication solution. The means, once signed in to your
                            app, your user can start chatting immediately.
                        </p>
                   </div>
                   <div className="image">
                        <img src={require("./images/Youruser.jpg")}/>
                    </div>
                </div>
            </div>
  
            <div id="build">
                <h2>Ready To Build Your Community?</h2>
                <div className="btn">
                    <input  type="submit" value="Get Started for free"/>
                </div>
            </div>

            <div id="footer">
                <div className="footer-huddle">
                    <h1><a href="#" class=""><i class="far fa-comment-dots"></i></a>Huddle</h1>
                    <p><a href="#" class=""><i class="fas fa-map-marker-alt"></i></a>
                    Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Fuga optio nulla,
                        delectus ut, vitae, perferendis qui
                        quam ullam repellendus dolorem modi
                        maxime rem ipsam soluta doloremque sed.
                        Repellendus, quasi doloremque.</p>
                    <p><a href="#" class=""><i class="fas fa-phone"></i></a>+1-543-123-4567</p>
                    <p><a href="#" class=""><i class="fas fa-envelope"></i></a>example@huddle.com</p>
                </div>
                <div className="footer-abt">
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footer-cnt">
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="#" class=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#" class=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#" class=""><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>                
                <div className="footer-last">
                    <p>&copy;Copyright 2018 Huddle. All rights reserved.</p>
                </div>
            </div> 
            
      </div>  
               
        
      
    );
  }
export default Huddle; 

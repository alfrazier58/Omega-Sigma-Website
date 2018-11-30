/* global gapi GoogleAuth */
import React, { Component } from 'react';
import './App.css';
import './gallery.css';
import './component.css';
import './font-awesome/css/font-awesome.css';
import './bootstrap/css/bootstrap.min.css';
import $ from 'jquery';
import Login from './LoginConnector';

class App extends Component {
  componentDidUpdate() {
    //$(this.ref.toggleInput.getDOMNode()).bootstrapToggle();
  }

  render() {
    return (
      <div className="Home">
        <div className="nav-bar">
          <div className="upper-bar">
              <div className="nav-home">
                  <img src={require('./images/Shine Brighter.png')} width="250px" />
                  <a href="#top-link">
                      <h1 className="nav-title">Omega Sigma</h1>
                  </a>
              </div>
              <div className="upper-item">
                  <a href="#poop">
                      <img className="heart" src={require("./images/Donate_logo.png")} width="25px" />
                      <h2>Donate</h2>
                  </a>
                  <Login onDidMount={this.initAuth2} />
              </div>
          </div>
          <div className="lower-bar">
              <a href="#about-link">
                  <p>About</p>
              </a>
              <a href="#history-link">
                  <p>History</p>
              </a>
              <a href="#news-link">
                  <p>News & Events</p>
              </a>
              <a href="#members-link">
                <p>Members</p>
              </a>
              <a href="#faq-link">
                  <p>FAQ</p>
              </a>
              <a href="#join-link">
                  <p>Join</p>
              </a>
              <a href="#contact-link">
                  <p>Contact</p>
              </a>

          </div>
      </div>
      <a className='anchor' id='top-link'></a>
      <div className="content">
          <img className="banner" src={require("./images/banner.png")} width="100%"/>
          <div className="about vl">
          <a className='anchor' id='about-link'></a>
              <h1>About us</h1>
    
              <h2>Our Objective</h2>
              <p>Omega Sigma is a service organization at Missouri University of Science and Technology that is dedicated to providing
                  various leadership opportunities and promoting a close unity and friendship among our members through volunteer
                  work.
              </p>
              <h2>Our Values</h2>
              <div class="cards">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={require("./images/service.png")} alt="Avatar" width="200px" height="260px" />
                    </div>
                    <div class="flip-card-back">
                    <h2>Service</h2>
                    <p>Service is our highest priority in Omega Sigma. Each member serves the Rolla community by donating time and energy
                      to local charities and philanthropies. Our members enjoy a variety of service events, from volunteering
                      at local animal shelters to co-hosting campus blood drives.</p>
                    </div>
                  </div>
                </div>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={require("./images/sisterhood.png")} alt="Avatar" width="200px" height="260px" />
                    </div>
                    <div class="flip-card-back">
                    <h2>Sisterhood</h2>
                    <p>An important part of Omega Sigma is spending time with our sisters. This can be anything from playing as 
                        a team in intramural sports to just staying in for a movie night as long as we are having fun.</p>
                    </div>
                  </div>
                </div>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={require("./images/Social.png")} alt="Avatar" width="200px" height="260px" />
                    </div>
                    <div class="flip-card-back">
                    <h2>Social</h2>
                    <p>We love to get together with other organizations on campus and have fun! Past social events 
                        have included bowling with Lambda Chi Alpha and a tie-dye party with Pi Kappa Phi and many more.
                        We typically try to plan two fun themed socials a month!</p>
                    </div>
                  </div>
                </div>
              </div>
                  <div className="philanthrophy">
                  <h2>Our Philanthropy</h2>
                    <img className="SAVE" src={require("./images/SAVE.jpg")} width="200px" height="200px"/>
                    
                      <p>The Rolla Animal Shelter</p>
                      <p>Omega Sigma holds a fundraiser every semester to raise money for our philanthropy, 
                        the Rolla Animal Shelter. We are helping not only with their day-to-day expenses, but 
                        the Rolla Animal Shelter is having their S.A.V.E. Campaign to raise money to build a new facility.</p>
                  </div>
                  {/*}
                      <h2>Our Symbols</h2>
                      <div className="symbols">
                        <div className="sunsymbol">
                            <img src={require("./images/Login_logo.png")} width="130px" height="130px"/>
                            <p>A 10 point sun</p>
                        </div>
                        <div className="colorsymbol">
                            <img src={require("./images/clover colors.png")} width="130px" height="130px"/>
                            <p>The colors: cardinal red, canary yellow, and jade black</p>
                        </div>
                        <div className="rosesymbol">
                            <img src={require("./images/yellow-rose.svg")} width="130px" height="130px"/>
                            <p>A yellow rose</p>
                        </div>
                        <div className="unicornsymbol">
                            <img src={require("./images/cornyu.png")} width="130px" height="130px"/>
                            <p>A unicorn</p>
                        </div>
    </div>{*/}
          </div>

          
          <div className="history vl">
          <a className='anchor' id='history-link'></a>
              <h1>ΩΣ History</h1>
              <p>In the fall of 1974, Phi Kappa Theta started a little sister’s organization, which officially became known as Phi
                  Kappa Theta Order of the Sun. In the fall of 1989, it came to pass that the Order of the Sun could no longer
                  be recognized as an official organization. Unwilling to watch their organization deteriorate and become nonexistent,
                  the members formed Omega Sigma on the twenty-fifth day of October in 1990. They wished to establish an organization
                  that is dedicated to working together with old friends while establishing new friendships. Our Greek letters,
                  Omega and Sigma, represent and call to mind the former Order of the Sun.</p>
              <h2>ΩΣ Founders</h2>
              <p></p>
          </div>

          <div className="news vl">
            <a className='anchor' id='news-link'></a>
              <h1>News & Events</h1>
              <article id="cc-slider">
                <input checked="checked" name="cc-slider" id="slide1" type="radio" />
                <input name="cc-slider" id="slide2" type="radio"/>
                <input name="cc-slider" id="slide3" type="radio"/>
                <input name="cc-slider" id="slide4" type="radio"/>
                <input name="cc-slider" id="slide5" type="radio"/>
                <div id="cc-slides">
                  <div id="overflow">
                    <div class="inner">
                      <article>
                        <div class="cctooltip">
                          <h3>Amazing / Photoshop / Photography</h3>
                          <h4>By <a href="#">codeconvey</a></h4>
                        </div>
                        <img src={require("./images/slide-1.jpg")}/>
                      </article>
                      <article>
                      <div class="cctooltip">
                        <h3>Abstract Retro Photography</h3>
                        <h4>By <a href="#">codeconvey</a></h4>
                      </div>
                      <img src={require("./images/slide-2.jpg")}/> 
                      </article>
                    <article>
                      <div class="cctooltip">
                        <h3>Street Photography</h3>
                        <h4>By <a href="#">codeconvey</a></h4>
                      </div>
                      <img src={require("./images/slide-3.jpg")}/> 
                    </article>
                    <article>
                      <div class="cctooltip">
                        <h3>Portrait / Woman / Photography</h3>
                        <h4>By <a href="#">codeconvey</a></h4>
                      </div>
                      <img src={require("./images/slide-4.jpg")}/>
                    </article>
                    <article>
                      <div class="cctooltip">
                        <h3>Fashion / Sport / Photography</h3>
                        <h4>By <a href="#">codeconvey</a></h4>
                      </div>
                      <img src={require("./images/slide-5.jpg")}/>
                    </article>
                  </div>
                </div>
              </div>
              <div id="controls">
                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
                <label for="slide4"></label>
                <label for="slide5"></label>
              </div>
            </article>
          </div>


          <div className="members vl">
            <a className='anchor' id='members-link'></a>
            <h1>Members</h1>
            <div classname="executives">
              <div className="bio">
              <div>
                  <img src={require("./images/becca.png")} width="150px" height="150px"/>
                </div>
                <h3>Becca Campbell</h3>
                <h4>President</h4>
              </div>
              <div className="bio">
                <div>
                  <img src={require("./images/megan.png")} width="150px" height="150px"/>
                </div>
                <h3>Megan Potthast</h3>
                <h4>Vice President</h4>
              </div>
              <div className="bio">
                <div>
                  <img src={require("./images/jessie.png")} width="150px" height="150px"/>
                </div>
                <h3>Jessie Mass</h3>
                <h4>Tresurer</h4>
              </div>
              <div className= "bio2">
                <div className="bio two">
                <div>
                  <img src={require("./images/sara.png")} width="150px" height="150px"/>
                </div>
                  <h3>Sara Johnson</h3>
                  <h4>Service</h4>
                </div>
                <div className="bio two">
                <div>
                  <img src={require("./images/emma.png")} width="150px" height="150px"/>
                </div>
                  <h3>Emma Woods</h3>
                  <h4>Secretary</h4>
                </div>
              </div>
            </div>
            <div className="namelist">
              <h2>Active Members</h2>
              <p>Adrienne Lister Becca Campbell - Sisterhood Chair Claire Donze Kelly-Marie Christensen Megan Potthast - Fundraising
                  Chair Morgan Watkins Sara Johnson - Associate Member Chair Sarah Ferguson Steph Gladbach - Social Chair Sofia
                  Cozzoni Jessie Maass Kendall Butler - Public Relations Chair Amber Lawrence - Historian Katherine Feissle ​
              </p>
            </div>
            <div className="namelist">
              <h2>New Memers</h2>
              <p>Sarah Albertson Hannah Cannady Jenna Graff Lyn Pollard Amanda Frazier Lily Ma Kim Dyhouse ​Emily Workman</p>
            </div>
            <div className="namelist">
              <h2>Alumni</h2>
              <p>Dakota Juett Ashley “Ronduh” Nickolaisen Anne Parker Leticia Watson Cate Gladbach Cortnee Templeton Sam Avery Adrienne
                  Comage Hannah Gretlein Paige Fitzgibbons Jana Hochard ​Molly Moran Reagan Schneiders Jolene Harbin Stephanie
                  Dunham Alicia Pajda Ambria Powell Kellie L’Hote ​Cari Martin Catherine Standley Katie Mazanec Melissa Cassmeyer
              </p>
            </div>
    </div>
          <div className="FAQ vl">
          <a className='anchor' id='faq-link'></a>
              <h1>FAQ's</h1>
              <div className="container FAQ-wrapper">


                  <div className="panel-group" id="accordion">
                      <div className="faqHeader">General questions</div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a ref="toggleInput" className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">What will being in Omega Sigma do for me?</a>
                              </h4>
                          </div>
                          <div id="collapseOne" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p> Omgea Sigma will provide you with: </p>
                                  <ul>
                                      <li>Leadership oppertunities</li>
                                      <li>Lifelong friendships</li>
                                      <li>Sisterhood</li>
                                      <li>Opportunity to give back to the community through service</li>
                                      <li>Emphasis on scholarship</li>
                                      <li>Social Opportunities</li>
                                      <li>Everlasting memories</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Would I live in a house?</a>
                              </h4>
                          </div>
                          <div id="collapseThree" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Nope! No house!</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Parties?</a>
                              </h4>
                          </div>
                          <div id="collapseFour" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>As a group we do attend socials with other organizations, however, the
                                    parties followed are not required. Lots of our members attend though!</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Can I be a part of Omega Sigma while being in another Sorority?</a>
                              </h4>
                          </div>
                          <div id="collapseFive" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Yes! However, this question should be answered by your sorority. We have
                                    no qualms against this, but cannot speak for your organization.</p>
                              </div>
                          </div>
                      </div>
                      <div className="faqHeader">Omega Sigma Requirements</div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsesix">What is required of me to be an active member?</a>
                              </h4>
                          </div>
                          <div id="collapsesix" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Active members, for each semester, are required to attend every meeting,
                                    have 10 service hours, at least 4 sisterhood points and 4 social points,
                                    and then 4 more to make a total of 12 sisterhood points. Actives are
                                    required to attend one fundraising event per semester. Active members
                                    are also given the ability to vote of constitutional matters, merchandise,
                                    and come up with ideas for events!</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseseven">Do I have to drink?</a>
                              </h4>
                          </div>
                          <div id="collapseseven" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Nope! No drinking required!</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseeight">How much commitment is required to be a part of Omega Sigma?</a>
                              </h4>
                          </div>
                          <div id="collapseeight" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Omega Sigma is a relaxed commitment, a lot of it being up to you! </p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsenine">How much does it cost to be a member of Omega Sigma and where does the money go?</a>
                              </h4>
                          </div>
                          <div id="collapsenine" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Membership for Omega Sigma is $25 for your associate semester and
                                    then $15 for your active semesters. This money goes towards putting on
                                    fundraisers, getting merchandise, sponsoring sisterhoods, and decorating
                                    for socials. </p>
                              </div>
                          </div>
                      </div>
                      <div className="faqHeader">Recruitment</div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseten">Do I need to register to be a part of recruitment?</a>
                              </h4>
                          </div>
                          <div id="collapseten" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Nope! Just show up to any of our events and talk with anyone there!</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseeleven">What should I expect recruitment to be like?</a>
                              </h4>
                          </div>
                          <div id="collapseeleven" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Recruitment is a relaxed process. It requires you to go to some of our
                                    events to get a feel for our organization and casually learn about who we
                                    are and what we do. </p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsetwelve">What if I'm shy or I don't know anyone?</a>
                              </h4>
                          </div>
                          <div id="collapsetwelve" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Don’t let that deter you! We love new faces and would love to help you
                                    meet new people or come out of your shell. None of us are too scary,
                                    hopefully!</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsethirteen">What if during recruitment I discover that I am not ready to commit to the organization?</a>
                              </h4>
                          </div>
                          <div id="collapsethirteen" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>No worries! We understand that everyone has different wants and goals
                                    for this organization, we will not force you to join! You are also always
                                    welcome to join any of the following semesters.</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefourteen">Is there a minimum GPA requirement?</a>
                              </h4>
                          </div>
                          <div id="collapsefourteen" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>There is no GPA requirement.</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefifteen">I’m an upperclassmen. Should I bother going through recruitment?</a>
                              </h4>
                          </div>
                          <div id="collapsefifteen" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>Absolutely! We are a group wanting to make friends while serving
                                    passionately. Anyone, no matter their year, is welcome.</p>
                              </div>
                          </div>
                      </div>
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h4 className="panel-title">
                                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsesixteen">Does Omega Sigma haze?</a>
                              </h4>
                          </div>
                          <div id="collapsesixteen" className="panel-collapse collapse">
                              <div className="panel-body">
                                  <p>No, we do not haze.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="Join vl">
          <a className='anchor' id='join-link'></a>
              <h1>Join</h1>
              <div className="join-p">
                <p>If you are interested in rushing Omega Sigma or would like to find out more about us, please fill out the interest form.</p>
              </div>
                <div className="form-img">
                <form>
                  <div className="name-form">
                  <div className="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="name" class="form-control" id="exampleInputName1" aris-describedby="nameHelp" placeholder="Enter first name" />
                    <input type="name" class="form-control" id="exampleInputName2" aris-describedby="nameHelp" placeholder="Enter last name" />
                  </div>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="comment-box">
                  <div className="form-group">
                    <label for="exampleInputPassword1">Comments</label>
                    <textarea type="comment" class="form-control" id="exampleInputComment1" placeholder="Enter comments" rows="5"/>
                  </div>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <img src={require("./images/Join.png")} width="20000px"/>
              </div>
          </div>
        
          <div className="Contact vl">
          <a className='anchor' id='contact-link'></a>
              <h1>Contact Us</h1>
              <div className="links">
                <a href="">
                  <img src= {require("./images/email.png")} width="80px" height="80px"/>
                </a>
                <a href="https://www.facebook.com/omegasigmamst" target="_blank">
                  <img src= {require("./images/facebook.png")} width="70px" height="70px"/>
                </a>
                <a href="https://www.instagram.com/omegasigmamst" target="_blank">
                  <img src= {require("./images/instagram.png")} width="70px" height="70px"/>
                </a>
              </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;

/* global gapi GoogleAuth */
import React, { Component } from 'react';
import './App.css';
import './component.css';
import './font-awesome/css/font-awesome.css';
import './bootstrap/css/bootstrap.min.css';
import $ from 'jquery';
import Login from './LoginConnector';

class App extends Component {
  componentDidUpdate() {
    $(this.ref.toggleInput.getDOMNode()).bootstrapToggle();
  }

  render() {
    return (
      <div className="Home">
        <div className="nav-bar">
          <div className="upper-bar">
              <div className="nav-home">
                  <img src={require('./images/Shine Brighter.png')} width="250px" />
                  <a href="#">
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
              <a href="#ABOUT">
                  <p>About</p>
              </a>
              <a href="HISTORY">
                  <p>History</p>
              </a>
              <a href="NEWS">
                  <p>News & Events</p>
              </a>
              <a href="MEMBERS">
                <p>Members</p>
              </a>
              <a href="FAQ'S">
                  <p>FAQ</p>
              </a>
              <a href="JOIN">
                  <p>Join</p>
              </a>
              <a href="CONTACT">
                  <p>Contact</p>
              </a>

          </div>
      </div>
      <div className="content">
          <img src={require("./images/group photo.jpg")} width="350px" height="200px"/>
          <img src={require("./images/hike.jpg")} width="550px" height="450px"/>
          <img src={require("./images/animal.jpg")} width="350px" height="200px"/>
          <br />
          <br />
          <br />
          <br />
          <div className="about vl">
              <h1>About us</h1>
              <h2>Our Objective</h2>
              <p>Omega Sigma is a service organization at Missouri University of Science and Technology that is dedicated to providing
                  various leadership opportunities and promoting a close unity and friendship among our members through volunteer
                  work.
              </p>
              <h2>Our Values</h2>
                  <p></p>
                  <h2>Service</h2>
                  <p>Service is our highest priority in Omega Sigma. Each member serves the Rolla community by donating time and energy
                      to local charities and philanthropies. Our members enjoy a variety of service events - from volunteering
                      at local animal shelters to co-hosting campus blood drives. In addition to traditional service, Omega Sigma
                      holds a fundraiser every semester to raise money for our philanthropy, the Rolla Animal Shelter. We are helping
                      not only with their day-to-day expenses, but the Rolla Animal Shelter is having their S.A.V.E. Campaign to
                      raise money to build a new facility. Omega Sigma is always striving to increase our service on campus and
                      within the community. Please contact our service chair if you have volunteering opportunities for us! </p>
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1"></li>
                          <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>

                      <div className="carousel-inner">
                          <div className="item active">
                              <img src="la.jpg" alt="Los Angeles" />
                          </div>

                          <div className="item">
                              <img src="chicago.jpg" alt="Chicago"/>
                          </div>

                          <div className="item">
                              <img src="ny.jpg" alt="New York"/>
                          </div>
                      </div>

                      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                          <span className="glyphicon glyphicon-chevron-left"></span>
                          <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" href="#myCarousel" data-slide="next">
                          <span className="glyphicon glyphicon-chevron-right"></span>
                          <span className="sr-only">Next</span>
                      </a>
                  </div>
                  <h2>Our Philanthropy</h2>
                      <p>The Rolla Animal Shelter</p>
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
                      </div>
          </div>
          <br />
          <div className="history vl">
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
              <h1>News & Events</h1>
              <div className="main ">
                  <div id="cbp-qtrotator" className="cbp-qtrotator">
                      <div className="cbp-qtcontent current">
                          <img src={require("./images/Login_logo.png")} width="100px" height="100" alt="img01" />
                          <blockquote>
                              <p>People eat meat and think they will become as strong as an ox, forgetting that the ox eats grass.</p>
                              <footer>Pino Caruso</footer>
                          </blockquote>
                      </div>
                      <div className="cbp-qtcontent">
                          <img src={require("./images/Login_logo.png")} width="100px" height="100" alt="img02" />
                          <blockquote>
                              <p>Nothing will benefit human health and increase the chances for survival of life on Earth as much
                                  as the evolution to a vegetarian diet.</p>
                              <footer>Albert Einstein</footer>
                          </blockquote>
                      </div>
                      <div className="cbp-qtcontent">
                          <img src={require("./images/Login_logo.png")} width="100px" height="100" alt="img03" />
                          <blockquote>
                              <p>If you don't want to be beaten, imprisoned, mutilated, killed or tortured then you shouldn't condone
                                  such behaviour towards anyone, be they human or not.</p>
                              <footer>Moby</footer>
                          </blockquote>
                      </div>
                      <div className="cbp-qtcontent">
                          <img src={require("./images/Login_logo.png")} width="100px" height="100" alt="img04" />
                          <blockquote>
                              <p>My body will not be a tomb for other creatures.</p>
                              <footer>Leonardo Da Vinci</footer>
                          </blockquote>
                      </div>
                      <span className="cbp-qtprogress"></span>
                  </div>
              </div>
              <br/>
          </div>
          <div className="members vl">
              <h1>Members</h1>
              <div className="container-card">
                  <div className="content-card">
                      <a href="#" className="btn-card left-card">
                          <span className="left-card icon-card">
                              <span className="arrow-left-card"></span>
                          </span>
                          <span className="right-card title-card">Executives</span>
                      </a>

                      <a href="#" className="btn-card right-card">
                          <span className="left-card title-card">New</span>
                          <span className="right-card icon-card">
                              <span className="arrow-right-card"></span>
                          </span>
                      </a>
                  </div>
                  <div className="content-card">
                      <a href="#" className="btn-card left-card">
                          <span className="left-card icon-card">
                              <span className="arrow-left-card"></span>
                          </span>
                          <span className="right-card title-card">Active</span>
                      </a>

                      <a href="#" className="btn-card right-card">
                          <span className="left-card title-card">Alumni</span>
                          <span className="right-card icon-card">
                              <span className="arrow-right-card"></span>
                          </span>
                      </a>
                  </div>
              </div>


              <h3>President</h3>
              <h3>Vice President</h3>
              <h3>Tresurer</h3>
              <img src={require("./images/jessie.JPG")} width="100px" height="100px"/>
              <h3>Service</h3>
              <img src={require("./images/sara.jpg")} width="100px" height="100px"/>
              <h3>Secretary</h3>
              <img src={require("./images/emma.JPG")} width="100px" height="100px"/>
              <h2>Active Members</h2>
              <p>Adrienne Lister Becca Campbell - Sisterhood Chair Claire Donze Kelly-Marie Christensen Megan Potthast - Fundraising
                  Chair Morgan Watkins Sara Johnson - Associate Member Chair Sarah Ferguson Steph Gladbach - Social Chair Sofia
                  Cozzoni Jessie Maass Kendall Butler - Public Relations Chair Amber Lawrence - Historian Katherine Feissle ​
              </p>
              <h2>New Memers</h2>
              <p>Sarah Albertson Hannah Cannady Jenna Graff Lyn Pollard Amanda Frazier Lily Ma Kim Dyhouse ​Emily Workman</p>
              <h2>Alumni</h2>
              <p>Dakota Juett Ashley “Ronduh” Nickolaisen Anne Parker Leticia Watson Cate Gladbach Cortnee Templeton Sam Avery Adrienne
                  Comage Hannah Gretlein Paige Fitzgibbons Jana Hochard ​Molly Moran Reagan Schneiders Jolene Harbin Stephanie
                  Dunham Alicia Pajda Ambria Powell Kellie L’Hote ​Cari Martin Catherine Standley Katie Mazanec Melissa Cassmeyer
              </p>
          </div>
          <div className="FAQ vl">
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
              <h1>Join</h1>
          </div>
          <div className="Contact vl">
              <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

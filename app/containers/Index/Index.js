import React from 'react';
import { Spin, Alert } from 'antd';
import { Link } from 'react-router-dom';
import Companyvideo from 'containers/Videos/Companyvideo';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Header from '../../components/Header/index';
import subBanner from './subBanner.png';
import banner3 from './banner3.jpg';
import './general.css';
import './grid.css';
import './responsive.css';
import './style.css';
import leftside2 from './leftside2.jpg';
import leftside3 from './leftside3.jpg';
import leftside4 from './leftside4.jpg';
import leftside5 from './leftside5.png';
import ntuclearning from './ntuclearning.jpg';
import rightside1 from './rightside1.jpg';
import rightside2 from './rightside2.jpg';
import rightside3 from './rightside3.jpg';
import rightside4 from './rightside4.jpg';
import rightimage from './2.jpg';
import mainimage from './mainimage.png';
import leftside6 from './leftside6.jpg';
import left7 from './left7.jpg';
import left8 from './left8.jpg';
import right5 from './right5.jpg';
import right6 from './right6.jpg';
import right7 from './right7.jpg';
import right8 from './right8.jpg';

const CompanyDescription = styled.div`
  font-family: 'Lato', sans-serif;
  color: #012653;
  font-size: 16px;
  padding-top: 20px;
`;
const Btn = styled(Link)`
  text-decoration: none;
  width: 400px;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  color: #fff;
  background: #373a43;
  text-transform: uppercase;
  border-radius: 0.2rem;
  font-size: 20px;
  font-weight: bolder;
  padding: 1rem 3rem;
  cursor: pointer;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      jobId: null,
      error: null,
      // error: null,
    };
  }

  componentDidMount() {
    this.jobId = this.props.location.search.split('?id=')[1];
    if (!this.jobId) return;
    this.setState({ jobId: this.jobId });
    fetch(`http://138.197.207.41:9000/api/joblistings/${this.jobId}`)
      .then(res => res.json())
      .then(data => {
        if (!data.message) {
          this.setState({
            job: data.job,
            loading: false,
            company: data.company,
          });
        } else {
          this.setState({
            error: true,
            loading: false,
          });
        }
      })
      .catch(error => {
        console.warn(error);
        this.setState({ loading: false, error: true });
      });
  }

  renderLandingPageContent = (jobId, profile, job) => {
    if (jobId === 'AR32siWcy7XZKXXWe') {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 order-sm-2 order-md-1">
            <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'600',fontSize:'18px'}}>TRADES CAMPUS TRAINERS' EXPERIENCE AT TECHNOLOGY-ENABLED LEARNING WORKSHOP 2018
                </h3>
                </div>
                <Companyvideo videoId="ziPPLqTnG_0" className="mb-1" />
                <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'600',fontSize:'18px'}}>NTUC LEARNINGHUB ITC TRAINING
                </h3>
                </div>
                <Companyvideo videoId="LJiWZEv2x-A" className="mb-1" />
                  <div className="img-section mt-3 featured-img">
                  <img src={leftside2} alt="Ntuc" className="img-fluid"/>
                  </div>
                  <div className="img-section mt-3 featured-img">
                  <img src={leftside3} alt="Ntuc Image 2" className="img-fluid"/>
                  </div>
                  <div className="img-section mt-3 featured-img">
                  <img src={leftside4} alt="Ntuc Image 3" className="img-fluid"/>
                  </div>
                  <div className="img-section mt-3 featured-img">
                  <a href="https://www.google.com/maps/search/ntuc+learning+hub/@1.2862833,103.8400858,15z/data=!3m1!4b1" target="_blank">
                  <img src={leftside5} alt="Ntuc Image 4" className="img-fluid"/></a>
                  </div>
            </div>
            {/* First col end  */}

            <div className="col-md-6 col-sm-12 order-sm-1 order-md-2">
              <div className="pr-2">
              <div className="featured-img">
                      <img
                        src={mainimage}
                        alt="Sub banner"
                        className="img-fluid"
                      />
                    </div>
                    <div className="video-title ptb-3">
                        <h1 style={{color:'#012653',fontSize:'26px',fontWeight:'600',marginBottom:'0'}}>COMPANY DESCRIPTION</h1>
                    </div>
                <div className="pt-3 pb-1">
                    <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'600',marginBottom:'0'}}>NTUC LearningHub: One Of The Largest Continuing Education Centre in Singapore
</h2>
                    </div>
                <CompanyDescription className="pt-2">
                NTUC LearningHub (NTUC LHUB) was established in 2004 to provide engaging, meaningful, and convenient training opportunities for Singapore’s workforce. Transformation is at the heart of what we do, inspiring us to invest in our communities and incorporate sustainable practices in our operations.<br/>
At our core, NTUC LHUB helps businesses unlock the full potential of their most valuable asset – human capital. To remain competitive in the face of Industry 4.0, organisations need Worker 4.0 talents, whom we develop and equip with the necessary Technical, Technology, and Adaptive Skills.
To date, NTUC LHUB has a pool of over 400 certified trainers across 5 training centres teaching over 500 courses, and has helped transform 16,700 organisations and clocked 2.3 million training places in the areas of:
                </CompanyDescription>
               

                <div className="ptb-3 featured-img">
                  <img src={ntuclearning} alt="Sub banner" className="img-fluid" />
                </div>
                <div className="description">
                <div className="video-title ptb-1">
                        <h1 style={{color:'#012653',fontSize:'25.5px',fontWeight:'600',marginBottom:'0'}}>Job DESCRIPTION</h1>
                    </div>
                                            <div className="pt-1 pb-1">
                                                <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold'}}>
                                        Trainers in Information and Communication Technologies (ICT)
                                    </h2>
                                            </div>
                                            <div className="pb-3">
                                                <p style={{fontSize:'16px',fontFamily:'Lato'}}><b>NTUC LearningHub</b> has immediate vacancies for ICT trainers to conduct classroom training on assignment or short term contract basis</p>
                                            </div>
                                            <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold'}}>Pre-requisites</h2>
                                            <div className="pl-1 pb-3">
                                                <ul>
                                                    <li>Advanced/Higher Dip in IT/ Computer Studies; or Bachelor’s Degree in a relevant discipline; or ICDL/Microsoft Certifications (Advanced Level); AND</li>
                                                    <li>ACTA; AND</li>
                                                    <li>2 years of working experience at Supervisory or Managerial Level; AND</li>
                                                    <li>2 years relevant training experience over the last 4 years</li>
                                                </ul>
                                            </div>
                                            <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold'}}>Skills &amp; Experience</h2>
                                            <div className="pl-1 pb-3">
                                                <ul>
                                                    <li>Conducted IT training for adults including learners with low literacy level, slow and without IT skills</li>
                                                    <li>Preferably bilingual</li>
                                                    <li>Relevant experience in the following IT skills would be advantageous
                                                        <ul>
                                                            <li>Computer Essentials</li>
                                                            <li>Online Essentials</li>
                                                            <li>Online Collaboration</li>
                                                            <li>Project Planning</li>
                                                            <li>Image Editing</li>
                                                            <li>Web Editing</li>
                                                            <li>IT security</li>
                                                            <li>MS Office </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold'}}>Requirements</h2>
                                            <div className="pl-1 pb-3">
                                                <ul>
                                                    <li>Prepared to train at different training locations</li>
                                                    <li>Able to conduct evening and weekend training</li>
                                                    <li>Ability to work in a team environment</li>
                                                </ul>
                                            </div>
                                        </div>
                <div className="btn-wrapper">
                <a href={`/useronboarding/${this.state.jobId}`} className="btn btn-lg">Proceed to Application</a>
                  </div>
              </div>
              
            </div>
            {/* 2nd col end  */}
            <div className="col-md-3 col-sm-12  order-md-3 order-sm-3">
            <div className="mb-3">
                <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'bold',fontSize:'17.5px'}}>OUR VISION</h3>
                </div>
                    
                <p style={{fontFamily:'Lato,sans-serif',fontSize:'16px'}}>
                To be the leader in continuing education and training as well as your trusted lifelong partner in learning and development
               </p></div>
               <div className="mb-3">
                    <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'bold',fontSize:'17.5px'}}>OUR MISSION</h3>
                </div>
                    
                <p style={{fontFamily:'Lato,sans-serif',fontSize:'16px'}}>
                To provide learning that transforms employability and creates a better life for working people of all collars, ages and nationalities
                                        </p></div>
                                        <div className="img-section mt-3 " style={{background:'#e4e4e4'}}>
                <img src={rightside1} alt="NTUC CEO" className="img-fluid"/>
                <div style={{padding:'1.5rem  0.5rem'}}>
                <h2 style={{fontWeight:'bold',marginBottom:'0'}}>Anthony Chew</h2>
                <h3 style={{fontWeight:'bold'}}>Head, Business Development</h3>
                </div>
                </div>

                <div className="img-section mt-3 " style={{background:'#e4e4e4'}}>
                <img src={rightside2} alt="NTUC CEO" className="img-fluid"/>
                <div style={{padding:'1.5rem  0.5rem'}}>
                <h2 style={{fontWeight:'bold',marginBottom:'0'}}>Senthil Kumar P V</h2>
                <h3 style={{fontWeight:'bold'}}>Business Unit Manager (ICT)</h3>
                </div>
                </div>

                <div className="img-section mt-3 featured-img">
                <img src={rightside3} alt="NTUC image 3" className="img-fluid"></img>
                </div>
                <div className="img-section mt-3 featured-img">
                <img src={rightside4} alt="NTUC image 4" className="img-fluid"></img>
                </div>

            </div>
            {/* 3rd col end  */}
            <br />
          </div>
        </div>
      );
    }
    if (jobId === 'LsPmsu8QhGDb3GMeQ') {
      return (
        <Spin spinning={this.state.loading} tip="Loading..." size="large">
          {/* <h1>Hello from index</h1>
        Company Logo Coming from DB: <img src={profile.logo} alt="Company Logo" width="50px" height="50px" />  */}
          <main>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 order-sm-2 order-md-1">
                <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'600',fontSize:'17.5px'}}>NTUC LEARNINGHUB AS PART OF THE LABOR MOVEMENT

                </h3>
                </div>
                  <Companyvideo videoId="Z71J2Ex0BXk" className="mb-1" />
                
                  <div className="img-section mt-3 featured-img">
                  <img src={leftside2} alt="Ntuc" className="img-fluid"/>
                  </div>
                  <div className="img-section mt-3 featured-img">
                  <img src={leftside6} alt="Ntuc Image 6" className="img-fluid"/>
                  </div>

                  <div className="img-section mt-3 featured-img">
                  <img src={leftside4} alt="Ntuc Image 4" className="img-fluid"/>
                  </div>

                  <div className="img-section mt-3 featured-img">
                  <img src={left7} alt="Ntuc Image 7" className="img-fluid"/>
                  </div>

                  <div className="img-section mt-3 featured-img">
                  <img src={left8} alt="Ntuc Image 8" className="img-fluid"/>
                  </div>

                  <div className="img-section mt-3 featured-img">
                  <a href="https://www.google.com/maps/search/ntuc+learning+hub/@1.2862833,103.8400858,15z/data=!3m1!4b1" target="_blank">
                  <img src={leftside5} alt="Ntuc Image 4" className="img-fluid"/></a>
                  </div>

                </div>
                {/* First col end  */}

                <div className="col-md-6 col-sm-12 order-sm-1 order-md-2">
                  <div className="pr-2">
                  <div className="featured-img">
                      <img
                        src={mainimage}
                        alt="Sub banner"
                        className="img-fluid"
                      />
                    </div>
                    <div className="video-title ptb-3">
                        <h1 style={{color:'#012653',fontSize:'25.5px',fontWeight:'bold',marginBottom:'0'}}>COMPANY DESCRIPTION</h1>
                    </div>
                <div className="pt-3 pb-1">
                    <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>NTUC LearningHub: One Of The Largest Continuing Education Centre in Singapore
</h2>
                    </div>
                <CompanyDescription className="pt-2">
                NTUC LearningHub (NTUC LHUB) was established in 2004 to provide engaging, meaningful, and convenient training opportunities for Singapore’s workforce. Transformation is at the heart of what we do, inspiring us to invest in our communities and incorporate sustainable practices in our operations.<br/>
At our core, NTUC LHUB helps businesses unlock the full potential of their most valuable asset – human capital. To remain competitive in the face of Industry 4.0, organisations need Worker 4.0 talents, whom we develop and equip with the necessary Technical, Technology, and Adaptive Skills.
To date, NTUC LHUB has a pool of over 400 certified trainers across 5 training centres teaching over 500 courses, and has helped transform 16,700 organisations and clocked 2.3 million training places in the areas of:
                </CompanyDescription>
             

                <div className="ptb-3 featured-img">
                  <img src={ntuclearning} alt="Sub banner" className="img-fluid" />
                </div>
                <div className="video-title ptb-1">
                        <h1 style={{color:'#012653',fontSize:'25.5px',fontWeight:'bold',marginBottom:'0'}}>Job DESCRIPTION</h1>
                    </div>
                    <div className="description">
                    <div className="pt-1 pb-1">
                            <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold'}}>Corporate Account Managers</h2>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Job Responsibilities</h2>
                        <div className="pb-3">
                            <p style={{fontFamily:'Lato',fontSize:'16px'}}>The Corporate Account Manager build relationships with corporate clients to drive revenue
                                growth. This role requires familiarity with sales tactics such as cold calling and
                                prospecting to identify and attract high-value clients. Corporate account managers also
                                need excellent relationship-building skills to maintain excellent client relationships
                                and build value for both their companies and the clients whose accounts and portfolios
                                they manage. They should be able to identify opportunities for business development,
                                expansion, and strategic growth.</p>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Duties/Tasks</h2>
                        <div className="pl-1 pb-3">
                            <ul>
                                <li>Manage client portfolio to understand their financial goals, needs, and pain points,
                                    and identify opportunities to increase profitability, benefitting both the
                                    organization and the corporate client.
                                </li>
                                <li>play an important role in new business development to approach potential clients and
                                    explain how he can help them achieve their revenue goals.
                                </li>
                                <li>build and maintain positive relationships with high-value clients by responding to
                                    client needs and resolving issues.
                                </li>
                                <li>Suggest solutions and innovative ideas to meet client needs</li>
                                <li>Handle issues in a timely and effective manner</li>
                                <li>Act as a liaison between key clients and internal teams</li>
                                <li>Monitor sales performance metrics</li>
                                <li>Prepare monthly, quarterly and annual reports and forecasts</li>

                            </ul>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Performance Expectations</h2>
                        <div class="pl-1 pb-3">
                            <ul>
                                <li>Achieve revenue goals</li>
                                <li>Manage monthly 4x pipelines</li>
                                <li>Forecast and track key account metrics; tracking opportunity-to-win ratio</li>
                                <li>Identify and approach new potential customers</li>
                                <li>Identity areas of improvement to exceed sales quotas</li>
                                <li>Ability to work cohesively and collaboratively</li>
                                <li>Ensure timely and successful delivery of our solutions according to customer needs
                                    and objectives
                                </li>
                                <li>Ability to communicate clearly the progress of monthly/quarterly initiatives to
                                    internal/external stakeholders
                                </li>
                                <li>Identify and grow opportunities within given sectors/industries and collaborate with
                                    members of the unit to ensure growth attainment
                                </li>
                                <li>Assist with high severity requests or issue escalations as needed</li>


                            </ul>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Job Competencies (Knowledge, Skills &amp; Abilities)</h2>
                        <div className="pl-1 pb-3">
                            <ul>
                                <li>Required key knowledge, skills, and abilities for performance of the job</li>
                                <li>Behavioural Competencies</li>
                                <li>Gets the job done by doing whatever it takes, within appropriate time frame</li>
                                <li>Shows persistence in overcoming obstacles</li>
                                <li>Ensures follow-through to desired results</li>
                                <li>Communicates in an open, candid and consistent manner</li>
                                <li>Show tact and diplomacy in dealing with others</li>
                                <li>Possesses knowledge and skills necessary to perform job</li>
                                <li>Builds effective networks and alliances inside and outside the organization</li>
                                <li>Considers the total organization when making decision</li>
                                <li>Establishes priorities that address the details and timelines needed to achieve
                                    desired results
                                </li>
                                <li>Proactively anticipates and addresses concerns to peers, team, upper management and
                                    customers
                                </li>
                                <li>Focuses time and resources on activities that yields the greatest benefit</li>
                                <li>Works effectively under pressure – balances multiple objectives</li>
                                <li>Obtains information and utilizes resources effectively</li>
                                <li>Takes responsibility for actions, results and mistakes</li>
                                <li>Follow-through on commitments</li>
                                <li>Functional Competencies</li>
                                <li>Ability to prepare customer quotation/proposal as well as tender proposal</li>
                                <li>Proficient in Microsoft Office especially Excel and PowerPoint</li>
                                <li>Possess confidence when engaging with all levels including upper management inside
                                    and outside
                                </li>
                                <li>Resolves differences between people using persuasion, diplomacy and logic</li>
                                <li>Adapts own attitudes and behavior to work effectively with different people and
                                    situations
                                </li>
                                <li>Handles pressure and stress appropriately</li>
                                <li>Offers open exploration of differing ideas and solutions within the team</li>
                                <li>Openly shares information, knowledge and expertise with the team and co-workers</li>
                                <li>Actively works to remove barriers to team effectiveness</li>
                                <li>Demonstrates customer focus by seeking out, understanding, and responding to the
                                    needs of both internal and external customers
                                </li>
                                <li>Sets an example by consistently modeling high standards of performance, honest and
                                    integrity
                                </li>
                                <li>Takes the initiative to learn new skills that would benefit the position and
                                    operational objectives
                                </li>

                            </ul>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Job Competencies (Knowledge, Skills &amp; Abilities)</h2>
                        <div className="pl-1 pb-3">
                            <ul>
                                <li>Proven work experience as sales account manager/key account manager</li>
                                <li>Demonstrate the ability to communicate, present and influence credibly and
                                    effectively at all levels of the organization, including executive and C-level
                                </li>
                                <li>Experience in delivering client-focused solution based on customer needs</li>
                                <li>Proven ability to manage multiple projects at a time while paying strict attention
                                    to details
                                </li>
                                <li>Excellent listening, negotiation and presentation skills</li>
                                <li>Excellent verbal and written communication skills</li>
                                <li>Recognised degree from an accredited institution majoring in Business Administration
                                    or Sales &amp; Marketing or equivalent
                                </li>
                                <li>Proficient in Microsoft Office especially in Excel and Powerpoint presentation</li>

                            </ul>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                   <a href={`/useronboarding/${this.state.jobId}`} className="btn btn-lg">Proceed to Application</a></div>
                  </div>
                </div>
                {/* 2nd col end  */}
                <div className="col-md-3 col-sm-12 order-sm-3 order-md-3">
                <div className="mb-3">
                <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'bold'}}>OUR VISION</h3>
                </div>
                    
                <p style={{fontFamily:'Lato,sans-serif',fontSize:'16px'}}>
                To be the leader in continuing education and training as well as your trusted lifelong partner in learning and development
               </p></div>
                <div className="mb-3">
                    <div className="video-title">
                <h3 style={{color:'#012653',fontWeight:'bold'}}>OUR MISSION</h3>
                </div>
                    
                <p style={{fontFamily:'Lato,sans-serif',fontSize:'16px'}}>
                To provide learning that transforms employability and creates a better life for working people of all collars, ages and nationalities
                                        </p></div>

                <div className="img-section mt-3 " style={{background:'#e4e4e4'}}>
                <img src={right5} alt="NTUC Manager" className="img-fluid"/>
                <div style={{padding:'1.5rem  0.5rem'}}>
                <h2 style={{fontWeight:'bold',marginBottom:'0',color:'#012653',fontFamily:'Lato'}}>Sivakami GK</h2>
                <h3 style={{fontWeight:'bold',marginTop:'0',color:'#012653',fontFamily:'Lato'}}>Director, Employability Campus & Next U</h3>
                </div>
                </div>



                <div className="img-section mt-3 featured-img">
                <img src={rightside3} alt="NTUC image 3" className="img-fluid"></img>
                </div>

                <div className="img-section mt-3 featured-img">
                <img src={right7} alt="NTUC image 4" className="img-fluid"></img>
                </div>


                <div className="img-section mt-3 featured-img">
                <img src={right6} alt="NTUC image 4" className="img-fluid"></img>
                </div>


                <div className="img-section mt-3 featured-img">
                <img src={right8} alt="NTUC image 4" className="img-fluid"></img>
                </div>
                                        
                <div>
              
                </div>
                </div>
                {/* 3rd col end  */}
                <br />

              </div>
            </div>
          </main>
        </Spin>
      );
    }
    if (jobId === 'BvEQ3FmJK4H4B2ZhL') {
      return (
        <Spin spinning={this.state.loading} tip="Loading..." size="large">
        {/* <h1>Hello from index</h1>
      Company Logo Coming from DB: <img src={profile.logo} alt="Company Logo" width="50px" height="50px" />  */}
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12 order-sm-2 order-md-1">
              <div className="video-title">
              <h3 style={{color:'#012653',fontWeight:'600',fontSize:'17.5px'}}>NTUC LEARNINGHUB AS PART OF THE LABOR MOVEMENT

              </h3>
              </div>
                <Companyvideo videoId="Z71J2Ex0BXk" className="mb-1" />
                
                <div className="img-section mt-3 featured-img">
                <img src={leftside2} alt="Ntuc" className="img-fluid"/>
                </div>
                <div className="img-section mt-3 featured-img">
                <img src={leftside6} alt="Ntuc Image 6" className="img-fluid"/>
                </div>

                <div className="img-section mt-3 featured-img">
                <img src={leftside4} alt="Ntuc Image 4" className="img-fluid"/>
                </div>

                <div className="img-section mt-3 featured-img">
                <img src={left7} alt="Ntuc Image 7" className="img-fluid"/>
                </div>

                <div className="img-section mt-3 featured-img">
                <img src={left8} alt="Ntuc Image 8" className="img-fluid"/>
                </div>

                <div className="img-section mt-3 featured-img">
                <a href="https://www.google.com/maps/search/ntuc+learning+hub/@1.2862833,103.8400858,15z/data=!3m1!4b1" target="_blank">
                  <img src={leftside5} alt="Ntuc Image 4" className="img-fluid"/></a>
                </div>

              </div>
              {/* First col end  */}

              <div className="col-md-6 col-sm-12 order-sm-1 order-md-2">
                <div className="pr-2">
                
                <div className="featured-img">
                      <img
                        src={mainimage}
                        alt="Sub banner"
                        className="img-fluid"
                      />
                    </div>
                    <div className="video-title ptb-3">
                        <h1 style={{color:'#012653',fontSize:'25.5px',fontWeight:'bold',marginBottom:'0'}}>COMPANY DESCRIPTION</h1>
                    </div>
                <div className="pt-3 pb-1">
                    <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>NTUC LearningHub: One Of The Largest Continuing Education Centre in Singapore
</h2>
                    </div>
                <CompanyDescription className="pt-2">
                NTUC LearningHub (NTUC LHUB) was established in 2004 to provide engaging, meaningful, and convenient training opportunities for Singapore’s workforce. Transformation is at the heart of what we do, inspiring us to invest in our communities and incorporate sustainable practices in our operations.<br/>
At our core, NTUC LHUB helps businesses unlock the full potential of their most valuable asset – human capital. To remain competitive in the face of Industry 4.0, organisations need Worker 4.0 talents, whom we develop and equip with the necessary Technical, Technology, and Adaptive Skills.
To date, NTUC LHUB has a pool of over 400 certified trainers across 5 training centres teaching over 500 courses, and has helped transform 16,700 organisations and clocked 2.3 million training places in the areas of:
                </CompanyDescription>
             

                <div className="ptb-3 featured-img">
                  <img src={ntuclearning} alt="Sub banner" className="img-fluid" />
                </div>
                <div className="video-title ptb-1">
                        <h1 style={{color:'#012653',fontSize:'25.5px',fontWeight:'bold',marginBottom:'0'}}>Job DESCRIPTION</h1>
                    </div>

                  <div className="description">
                  <div className="pt-1 pb-1">
                            <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold'}}>Senior/Course Consultant, Consumer Sales</h2>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Job Responsibilities</h2>
                        <ul>
                                <li>To outreach and engage working people to up-skill and improve their employability or
                                    achieve their learning aspirations
                                </li>
                                <li>To be responsible in proposing suitable training solutions to customers</li>
                                <li>To actively participate in assigned corporate events, road-show, class visits, and
                                    seminars
                                </li>
                                <li>To perform Branch-counter and call-centre duties as assigned</li>
                                <li>Actively scout the environment to grow one’s sales portfolio</li>
                                <li>To lead team of consultants at assigned events</li>
                                <li>To build and enhance relationships with both internal and external stakeholders to
                                    grow one’s portfolio
                                </li>

                            </ul>
                            <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Duties/Tasks</h2>
                        <div className="pl-1 pb-3">
                        <ul>
                                <li>Outreach and engage customers by proposing suitable training solutions</li>
                                <li>Responsible for personal sales portfolio</li>
                                <li>Follow up on sales leads</li>
                                <li>Lead consultants to achieve agreed target</li>

                            </ul>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Performance Expectations</h2>
                        <div className="pl-1 pb-3">
                            <ul>
                                <li>Able to engage customers at various outreach channels (road-show, branches,
                                    corporate events, call-centre and so on)
                                </li>
                                <li>Able to engage peers and work as a team</li>
                                <li>Embrace challenges with a Never-Say-Die attitude</li>
                                <li>Act with Integrity</li>
                                <li>Be responsible for one’s portfolio and achieve assigned target</li>

                            </ul>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Key Job Competencies (Knowledge, Skills & Abilities)
</h2>
<div className="pl-1 pb-3">
                            <ul>
                                <li>Proven ability to engage and handle customers’ requests</li>
                                <li>A keen learner and have a quest for life-long learning</li>
                                <li>Good communication skills</li>
                                <li>Ability to understand and propose training solutions to transform the employability
                                    of working people
                                </li>
                                <li>Independent learner and able to self-motivate to do better by constantly maintaining
                                    a positive mental attitude
                                </li>
                                <li>Passionate in undertaking any assigned project and deliver result</li>
                            </ul>
                        </div>
                        <h2 style={{color:'#012653',fontSize:'20px',fontWeight:'bold',marginBottom:'0'}}>Qualifications</h2>
                        <div className="pl-1 pb-3">
                            <ul>
                                <li>Diploma and above
                                </li>

                            </ul>
                        </div>
                  </div>
                  <div className="btn-wrapper">
                  <a href={`/useronboarding/${this.state.jobId}`} className="btn btn-lg">Proceed for Application</a></div>
                </div>
              </div>
              {/* 2nd col end  */}
              <div className="col-md-3 col-sm-12 order-sm-3 order-md-3">
              <div className="mb-3">
              <div className="video-title">
              <h3 style={{color:'#012653',fontWeight:'bold'}}>OUR VISION</h3>
              </div>
                  
              <p style={{fontFamily:'Lato,sans-serif',fontSize:'16px'}}>
              To be the leader in continuing education and training as well as your trusted lifelong partner in learning and development
             </p></div>
              <div className="mb-3">
                  <div className="video-title">
              <h3 style={{color:'#012653',fontWeight:'bold'}}>OUR MISSION</h3>
              </div>
                  
              <p style={{fontFamily:'Lato,sans-serif',fontSize:'16px'}}>
              To provide learning that transforms employability and creates a better life for working people of all collars, ages and nationalities
                                      </p></div>


              <div className="img-section mt-3 featured-img">
              <img src={right7} alt="NTUC image 4" className="img-fluid"></img>
              </div>


              <div className="img-section mt-3 featured-img">
              <img src={right6} alt="NTUC image 4" className="img-fluid"></img>
              </div>


              <div className="img-section mt-3 featured-img">
              <img src={right8} alt="NTUC image 4" className="img-fluid"></img>
              </div>
                                      
              <div>
            
              </div>
              </div>
              {/* 3rd col end  */}
              <br />

            </div>
          </div>
        </main>
      </Spin>
      );
    }

    return (
      <Alert
        message="Warning"
        description="No Job found with the provied job id"
        type="warning"
        showIcon
      />
    );
  };

  render() {
    const profile = this.state.company || {};
    const job = this.state.job || {};
    return (
      <div>
        <Spin spinning={this.state.loading} tip="Loading..." size="large">
          <Header jobId={this.state.jobId} />
          {this.state.error ? (
            <Alert message="oops the job is not available" banner closable />
          ) : (
            <main className="ptb-5">
              {this.renderLandingPageContent(this.state.jobId, profile, job)}
            </main>
          )}
        </Spin>
      </div>
    );
  }
}
export default Index;
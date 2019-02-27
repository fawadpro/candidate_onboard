import React, { component } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const FormCard = styled.div`
max-width: 100%;
border-width: 1px;
border-style: solid;
border-color: rgb(230, 230, 230);
border-image: initial;
padding: 30px;
background-color: rgb(255, 255, 255);
box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px;
margin-bottom: 1.5rem;
border-radius: 5px;
overflow: hidden;
transition: all 0.3s cubic-bezier(0.41, 0.094, 0.54, 0.07) 0s;
margin-top: 30px;
`;

const Photoavatar=styled.div`
border-radius: 100px;
overflow: hidden;
height: 150px;
width: 150px;
position: relative;
margin: 0 auto 1rem;
/* top: -60px; */
transition: all 0.3s ease-in-out;
-webkit-transition: all 0.3s ease-in-out;
-moz-transition: all 0.3s ease-in-out;
box-shadow: 0 0 0 7px #f0f0f0;
-webkit-box-shadow: 0 0 0 7px #f0f0f0;
-moz-box-shadow: 0 0 0 7px #f0f0f0;
}
`

const Profiledata=styled.div`
width:100%;
text-align:center;
color:#012653;
font-family:'Lato',sans-serif;
line-height:20px;
`
const PhotoText = styled.div`
font-size: 26px;
font-weight: bold;
padding: 2rem 0 1rem 0;
display: block;
text-align: center;
`;

const Suggested=styled.span`
    color: #0992d8;
    background: #f9f9f9;
    border: 1px solid #e6e6e6;
    font-size: 14px;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    margin-right: 0.5rem;
    display: inline-block;
    margin-bottom: 1rem;
    text-transform: capitalize;
`

class ProfileView extends React.Component {
render() {
  return (
    <div>
        <FormCard>
          <Photoavatar>
          <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
          </Photoavatar>
          <Profiledata>
            <h1 style={{fontSize:"26px"}}>John Doe </h1>
            <h2>Marketing Manager</h2>

            <div style={{marginRight:'1rem'}}>
              <span style={{marginRight:'1rem'}}><i class="fas fa-building"></i> Singtel</span>
                <span><i class="fas fa-map-marker-alt"></i> Indonesia</span>
                 </div>

                 <div style={{borderTop:'1px solid #eee',marginTop:'20px'}}>
                           <h2 style={{marginTop:'20px',marginBottom:'20px'}}>Skills</h2>
                           <Suggested>Planning</Suggested>
                           <Suggested>Insurance</Suggested>
                           <Suggested>Marketing</Suggested>
                           <Suggested>Human Resource</Suggested>
                           <Suggested>Resource Finance</Suggested>
                       </div>

                <div style={{padding:'2rem 1rem',borderTop:'1px solid #eee'}}>
                            <h2 style={{paddingBottom:'1rem'}}>summary</h2>
                            <p style={{paddingBottom:'1rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolor voluptatem repellat eos, ducimus suscipit pariatur dignissimos? Nobis quisquam amet, quae quod tempora sint dolorem aperiam saepe deleniti expedita cupiditate!
                             </p>
                             <p style={{paddingBottom:'1rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolor voluptatem repellat eos, ducimus suscipit pariatur dignissimos? Nobis quisquam amet, quae quod tempora sint dolorem aperiam saepe deleniti expedita cupiditate!
                                </p>
                        </div>
          </Profiledata>
          </FormCard>
    </div>
  );
}
}
export default ProfileView;

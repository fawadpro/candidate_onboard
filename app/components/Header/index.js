import React from 'react';
// import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import ImageWrapper from './ImageWrapper';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.png';
import '../../containers/Index/general.css';
import '../../containers/Index/grid.css';
import '../../containers/Index/responsive.css';
import '../../containers/Index/style.css';
// import messages from './messages';
import ntuclogo from './ntuc.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: '',
      website: '',
      locality: '',
      sector: '',
    };
  }

  componentDidMount = () => {
    if (this.props.jobId) {
      fetch(`http://138.197.207.41:9000/api/joblistings/${this.props.jobId}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            logo: data.company.logo,
            website: data.company.website,
            locality: data.job.locality.country,
            sector: data.company.sector,
          });
        })
        .catch(error => {
          console.warn(error);
        });
    }
  };

  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="Blonk - Landing Page" />
        </A>
        <nav className="navbar">
    <div className="container">
        <div className="logo-wrapper">
            <a href="/"><img src={ntuclogo} alt=""/>
            </a>
        </div>
        <ul id="nav-info">
            <li><i className="fas fa-globe-asia"></i><a href="https://www.ntuclearninghub.com/" style={{textDecoration:'none',paddingLeft:'0.5em',color:'#012653'}}>www.ntuclearninghub.com</a></li>
            <li><i className="fas fa-map-marker-alt"></i> Singapore</li>
        </ul>
    </div>
</nav>
        {/* <NavBar>
          <ImageWrapper>
            <A href="/">
              <Img src={ntuclogo} alt="profile image-logo" />
            </A>
          </ImageWrapper>
          <div
            style={{
              maxWidth: '1140px',
              marginLeft: '260px',
            }}
          >
            <HeaderLink to="/">
              <li
                className="fas fa-globe-asia"
                style={{
                  color: '#012653',
                  marginRight: '10px',
                  verticalAlign: 'sub',
                }}
              />
              
              <a href="https://www.ntuclearninghub.com/" style={{textDecoration:'none',paddingLeft:'0.5rem',color:'#012653',verticalAlign:'middle'}} target="_blank">www.ntuclearninghub.com</a>

            </HeaderLink>

            <HeaderLink to="/">
              <i
                className="fas fa-map-marker-alt"
                style={{
                  color: '#012653',
                  marginRight: '10px',
                  verticalAlign: 'sub',
                }}
              />
              <span>Singapore</span>
            </HeaderLink> */}

            {/* <HeaderLink to="/">
              <i
                className="fas fa-tags"
                style={{
                  color: '#012653',
                  marginRight: '10px',
                  verticalAlign: 'middle',
                }}
              />
              <span>{this.state.sector || ''}</span>
            </HeaderLink> */}
          {/* </div>
        </NavBar> */}
      </div>
    );
  }
}

export default Header;
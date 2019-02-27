import styled from 'styled-components';

// import NormalImg from 'components/Img';

const ImageWrapper = styled.div`
  position: absolute;
  border: 1px solid #eaeaea;
  background: #fff;
  bottom: -15px;
  margin-left: 80px;
  max-width: 150px;
  -webkit-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.2);
`;

export const ProfileUi = styled.ul`
  list-style-type: none;
  margin-left: 170px;
`;

export default ImageWrapper;

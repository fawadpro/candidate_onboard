import styled from 'styled-components';

export const SubText = styled.div`
  font-size: 20px;
  text-align: center;
  padding-bottom: 30px;
  width: 330px;
  color: #012653;
  margin: 0 auto;
  font-weight: 440;
`;
export const GeneralText = styled.div`
  color: red;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  min-width: 266px;
  padding-bottom: 30px;
  font-family: Lato, sans-serif;
  margin-top: 50px;
  color: #012653;
`;
export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 26px;
`;

export const Wrapper = styled.div`
  &.ant-steps-item-process .ant-steps-item-icon {
    border-color:#FF9D08;
    border-width: 2px;
    background:#fff;
  }
  .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
    color: #ff9d08;
    font-weight: 600;
  }
  
  /* .ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
    color: #ff9d08;
    margin:3px;
    background:#FAFAFA;
  } */
  
  .anticon anticon-check ant-steps-finish-icon {
    background: #ff9d08;
    font-weight: bold;
  }
  .ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title:after {
    background-color: #000000;
    margin: 0;
    margin-left: -12px;
  }
  
  .ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-title:after {
    background-color: #000000;
    margin-left: -23px;
  }
  .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
    margin-right: 16px;
    white-space: nowrap;
    margin: 0;}
  
    .ant-steps-item-wait .ant-steps-item-icon {
      border:2.4px solid #000;
      background-color: #fff;
      font-weight: 600;
  }
  
  .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
    color:#333;
  }
  .ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
    color: #ff9800;
    background-color: #FAFAFA;
  }
  
    .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title:after {
      background-color: #ff9800;
      margin-left: -23px;
      border-width: 2px;
  }
  .ant-steps-item-process .ant-steps-item-icon {
    border-color: #FF9D08;
    border-width: 2px;
    background: #fff;
}

  .ant-steps-item-title:after {
    content: '';
    height: 3px;
    width: 9999px;
    background: #ff9d08;
    display: block;
    position: absolute;
    top: 16px;
    left: 100%;
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    border-color: rgb(255, 157, 8);
    background-color: #fff;
  }
  
  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: #ff9800;
  }
  
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #ff9800;
    border-width: 2px;
  }
  
  .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title:after {
    background-color: #ff9800;
  }
  
  .anticon svg {
    display: inline-block;
    margin-top: -7px;
  }
  .preButton:focus,
  .preButton:active,
  .preButton:hover {
    color: #ff9800;
  }
  .ant-card{
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px;
  }
  
  
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) .anticon:not(:last-child)
  {
    float: right;
    padding-top: 5px;
      margin-left: 20px;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal{
    display:flex;
    min-width: 400px;
  }
  
  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item:not(:last-child) > .ant-steps-item-tail
  {
  margin-right: 100px;
  }
  
`;
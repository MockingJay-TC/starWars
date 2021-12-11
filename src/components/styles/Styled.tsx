import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const Item = styled.li`
  color: white;
  font-size: 18px;
  &:hover {
    color: #cecece;
  }
`;
export const Logo = styled.img`
  width: 80px;
`;

export const ItemChild = styled.li`
  text-align: center;
  text-decoration: none;
  fontSize: "18px",
  padding: "3px",
  
  &:hover {
    transition: 0.5s ease-in-out;
    color: "black",
  }
  
 
`;

export const Frame = styled.div`
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: #ca7c4e;
  background: linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EEBE6C', endColorstr='#CA7C4E',GradientType=1 );
  color: #786450;
  font-family: "Open Sans", Helvetica, sans-serif;
`;

export const Center = styled.div`
  height: 299px;
  width: 320px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const Profile = styled.div`
  float: left;
  width: 200px;
  height: 320px;
  text-align: center;

  &:hover {
    cursor: pointer;
    div:nth-child(1) {
      transform: rotate(360deg);
    }
    div:nth-child(2) {
      transform: rotate(-360deg);
    }
  }
`;

export const Image = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  margin: 38px auto 0 auto;
  text-align: center;
`;

export const Circle1 = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 76px;
  height: 76px;
  top: -3px;
  left: -3px;
  border-width: 1px;
  border-style: solid;
  border-color: #786450 #786450 #786450 transparent;
  border-radius: 50%;
  transition: all 1.5s ease-in-out;
`;

export const Circle2 = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  transition: all 1.5s ease-in-out;
  border-width: 1px;
  border-style: solid;
  width: 82px;
  height: 82px;
  top: -6px;
  left: -6px;
  border-color: #786450 transparent #786450 #786450;
`;

export const Initial = styled.div`
  margin: auto;
  line-height: 70px;
  font-size: 28px;
  color: #eebe6c;
  font-weight: 800;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  color: #786450;
`;

export const Age = styled.div`
  font-size: 12px;
  line-height: 15px;
`;

export const Actions = styled.div`
  margin-top: 33px;
`;

export const MoreInfo = styled.button`
  box-shadow: 0px 0px 2px 0.5px rgba(0, 0, 0, 0.3);
  display: block;
  width: 120px;
  height: 30px;
  margin: 0 auto 10px auto;
  background: none;
  outline: none;
  border: none;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: #786450;

  &:hover {
    background: #786450;
    color: #fff;
  }
`;

export const Stats = styled.div`
  float: left;
`;

export const Box = styled.div`
  box-sizing: border-box;
  width: 120px;
  height: 99px;
  background: #f5e8df;
  text-align: center;
  padding-top: 28px;
  transition: all 0.4s ease-in-out;
  margin: 1px 0;

  &:hover {
    background: #e1cfc2;
    cursor: pointer;
  }
  &:nth-child(2) {
    margin: 1px 0;
  }

  span {
    display: block;
  }
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
export const Parameter = styled.span`
  font-size: 12px;
`;

export const Title = styled.h1`
  color: #786450;
`;
export const Back = styled.button`
  color: #786450;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border: none;
  align-items: center;
  margin: 15px auto;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0.2px #786450;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #786450;
    transition: 0.3s ease-in-out;
  }

  span {
    &:nth-child(1) {
      font-size: 38px;
      margin-right: 3px;
      line-height: 30px;
      margin: auto;
    }
    &:nth-child(2) {
      font-size: 28px;
      line-height: 30px;
    }
  }
`;

export const Details = styled.div`
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 25px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ca7c4e;
  background: linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EEBE6C', endColorstr='#CA7C4E',GradientType=1 );
  color: #786450;
  font-family: "Open Sans", Helvetica, sans-serif;
`;
export const DetailCenter = styled.div`
  position: relative;
  width: 100%;
  padding: 15px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const Top = styled.div`
  display: inline;
`;
export const Pro = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Left = styled.div`
  margin: auto;
`;
export const Right = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Middle = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  margin: 10px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 0.2px rgba(0, 0, 0, 0.2);
  transition: 0.6s ease-in-out;

  &:hover {
    transition: 0.6s ease-in-out;

    img {
      transform: rotate(360deg);
      transition: 2s ease-in-out;
    }
    price {
      font-weight: 500;
      transition: 0.6s ease-in-out;
    }
  }
`;

export const Side = styled.div`
  border: 2px solid #008aff;
`;

export const Button = styled.button`
  background: #ca7c4e;
  background: linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EEBE6C', endColorstr='#CA7C4E',GradientType=1 );
  width: 150px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 5px auto;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export const Film = styled.div`
  margin: 8px 5px;
  font-size: 24px;
  text-align: center;
  padding: 5px 8px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const Bucket = styled.div`
  height: 299px;
  width: 320px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
`;


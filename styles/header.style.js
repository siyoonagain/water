import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 15px 8px -8px #9d898938;
  color: #000;
  background: #fff;
`;

export const Title = styled.h1`
  font-size: 54px;
  margin: 22px 44px;
  font-family: "Leckerli One", cursive;
  cursor: pointer;
`;

export const Gnb = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
`;

export const GnbList = styled.li`
  padding: 22px 88px;
  font-size: 24px;
  cursor: pointer;
  font-family: "Kantumruy Pro", sans-serif;
  transition: all 0.3s ease 0s;
  width: 120px;
  text-align: center;
  :hover {
    color: #0f7dff;
    font-weight: bold;
  }
`;

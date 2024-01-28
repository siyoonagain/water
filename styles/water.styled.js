import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 33px;
`;

export const TopBanner = styled.div`
  width: 100%;
  height: 500px;
  background: url("water.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 0;
`;

export const Title = styled.h1`
  font-size: 44px;
  font-family: "Kantumruy Pro", sans-serif;
  text-align: left;
  background: #fff;
`;

export const TitleInner = styled.span`
  color: #0f7dff;
`;

export const ContainerUl = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Container = styled.li`
  width: 100%;
  background: #efefef;
  height: 500px;
`;

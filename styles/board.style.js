import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  margin: 44px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 34px;
  margin: 66px 44px;
  margin-bottom: 22px;
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: 700;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  margin: 66px 44px;
  margin-top: 0;
  font-family: "Kantumruy Pro", sans-serif;
  text-align: center;
`;

export const BoardTable = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  margin-top: 22px;
`;

export const BoardList = styled.li`
  width: 100%;
  height: 44px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TableTitle = styled.h4`
  width: 80%;
  font-weight: 700;
  font-family: "Kantumruy Pro", sans-serif;
`;

export const TableTitle2 = styled.p`
  width: 10%;
  font-weight: 700;
  font-family: "Kantumruy Pro", sans-serif;
`;

export const BoardList2 = styled.li`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  line-height: 200%;
`;

export const TableSub1 = styled.p`
  width: 10%;
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: normal;
`;

export const TableSub2 = styled.h4`
  width: 80%;
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: normal;
  transition: all 0.3s ease;
  :hover {
    font-weight: bold;
  }
`;

export const PageSpace = styled.div`
  margin: 44px auto;
  text-align: center;
`;

export const PageControl = styled.span`
  font-size: 24px;
  color: #000;
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  transition: all 0.3s ease 0;
  :hover {
    opacity: 0.3;
  }
`;

export const PageNum = styled.span`
  font-family: "Kantumruy Pro", sans-serif;
  font-size: 24px;
  color: #000;
  background: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: inline-block;
  line-height: 180%;
  margin: 0 22px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }

  &.active {
    background: #0f7dff;
    color: #fff;
  }
`;

export const ATag = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

export const SearchSpace = styled.div`
  width: 100%;
  text-align: center;
  margin: 44px auto;
  margin-top: 0;
`;

export const Search = styled.input`
  width: 10%;
  padding: 8px;
  border-radius: 10px;
  margin-right: 11px;
  margin-left: 44px;
`;

export const SearchBtn = styled.button`
  width: 44px;
  height: 44px;
  color: #fff;
  background: #0f7dff;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  margin-left: 11px;
  transition: all 0.3s ease 0;
  :hover {
    color: #0f7dff;
    background: #fff;
    border: 1px solid #0f7dff;
  }
`;

export const CountText = styled.p`
  width: 90%;
  font-size: 18px;
  font-weight: bold;
  color: #0f7dff;
  font-family: "Kantumruy Pro", sans-serif;
`;

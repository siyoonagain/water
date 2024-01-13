import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  margin: 44px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Kantumruy Pro", sans-serif;
`;

export const DetailSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  margin-top: 22px;
  box-shadow: -3px 0px 21px #f6f5f5;
  text-align: center;
  padding-bottom: 22px;
`;

export const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  padding: 0 24px;
  text-wrap: pretty;
`;

export const SubTitle = styled.span`
  text-align: right;
  display: inline-block;
  width: 70%;
`;

export const Content = styled.p`
  width: 70%;
  margin: 44px auto;
  font-size: 18px;
  line-height: 180%;
  text-wrap: pretty;
`;

export const ListBtn = styled.span`
  width: 5%;
  padding: 5px 15px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 24px;
  text-align: center;
  margin-top: 44px;
  background: #0f7dff;
  color: #fff;
  transition: all 0.3s ease 0s;
  :hover {
    opacity: 0.3;
  }
`;

export const Comment = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-top: 44px;
  padding: 44px 0;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentName = styled.input`
  text-align: left;
  border: none;
  background: #fff;
  padding: 22px;
`;

export const CommentInput = styled.textarea`
  width: 90%;
  height: 200px;
  margin: 0 auto;
  font-size: 16px;
  padding: 24px;
  border: none;
`;

export const CommentSpace = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentTitle = styled.p`
  width: 90%;
  font-size: 24px;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 22px;
  font-weight: bold;
`;

export const CommentBtn = styled.span`
  width: 6%;
  padding: 5px 15px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 44px;
  margin-top: 44px;
  background: #0f7dff;
  color: #fff;
  transition: all 0.3s ease 0s;
  :hover {
    opacity: 0.3;
  }
`;

export const CommentUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 92%;
  list-style: none;
  margin-top: 44px;
`;

export const CommentList = styled.li`
  background: #fff;
  margin-bottom: 24px;
`;

export const CommentP = styled.div`
  font-size: 18px;
  padding: 22px;
  text-align: left;
  padding-top: 0;
`;

export const CommendToolS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommendTool = styled.div`
  margin: 22px;
`;

export const CommendToolBtn = styled.span`
  cursor: pointer;
  margin: 0 11px;
  padding: 22px;
  :hover {
    opacity: 0.3;
  }
`;

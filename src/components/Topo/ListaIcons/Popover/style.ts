import styled from "styled-components";

export const BotaoOpenPopover = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  border-radius: 50%;

  :hover {
    cursor: pointer;
  }
`;

export const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;

  gap: 10px;

  width: 230px;
  height: 37px;

  font-size: 14px;

  padding: 8px 16px;

  :hover {
    background-color: #FAFAFA;
    cursor: pointer;
  }
`;

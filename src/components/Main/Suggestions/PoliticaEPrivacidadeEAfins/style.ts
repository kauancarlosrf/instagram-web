import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 319px;

  display: flex;
  flex-direction: column;
  gap: 21px;

  margin-top: 30px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #C7C7C7;
  line-height: 14px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Epacamento = styled.span`
  color: #C7C7C7;
`;

export const Copy = styled.p`
  font-size: 12px;
  color: #C7C7C7;
  line-height: 14px;
  text-transform: uppercase;
`;

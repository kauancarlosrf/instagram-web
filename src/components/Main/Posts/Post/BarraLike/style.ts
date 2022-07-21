import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 46px;

  padding: 0 12px 6px;
  margin: 4px 0 0;
`;

export const DivLikeCommentShare = styled.div`
  display: flex;
  align-items: center;
`;

export const BotaoLike = styled.button`
  padding: 8px 8px 8px 1px;

  &:hover {
    cursor: pointer;
  }
`;

export const BotaoComentarios = styled.button`
  padding: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const BotaoCompartilhar = styled.button`
  padding: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const BotaoSavePost = styled.button`
  padding: 8px;

  &:hover {
    cursor: pointer;
  }
`;

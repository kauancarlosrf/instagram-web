import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 46px;

  padding: 0 4px 6px;
  margin: 4px 0 0;
`;

export const BoxLikeCommentShare = styled.div`
  display: flex;
  align-items: center;
`;

export const BotaoLike = styled.button`
  padding: 8px;

  &:hover {
    cursor: pointer;
    color: #777;
  }
`;

export const BotaoComentarios = styled.button`
  padding: 8px;

  &:hover {
    cursor: pointer;
    color: #777;
  }
`;

export const BotaoCompartilhar = styled.button`
  padding: 8px;

  &:hover {
    cursor: pointer;
    color: #777;
  }
`;

export const BotaoSavePost = styled.button`
  padding: 8px;
  color: #222;
  cursor: pointer;

  &:hover {
    color: #777;
  }
`;

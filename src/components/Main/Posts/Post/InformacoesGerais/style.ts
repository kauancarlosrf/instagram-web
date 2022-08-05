import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;

  padding: 0 12px;
  gap: 10px;
`;

export const QuantidadeCurtidas = styled.span`
  font-weight: bold;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const BoxDescricao = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const NomeDoPerfil = styled.a`
  color: #262626;
  font-weight: bold;
  margin-right: 1px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MostrarTodaDescricao = styled.button`
  font-size: 14px;
  color: #8E8E8E;

  padding: 0 1px;

  &:hover {
    cursor: pointer;
  }
`;

export const VerMaisComentarios = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #8E8E8E;

  &:hover {
    cursor: pointer;
  }
`;

export const TempoAtras = styled.span`
  text-transform: uppercase;
  color: #8E8E8E;
  font-size: 10px;
  line-height: 11px;

  margin-bottom: 12px;
`;


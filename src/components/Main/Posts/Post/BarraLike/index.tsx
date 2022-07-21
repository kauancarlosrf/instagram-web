import React from "react";
import { Container, DivLikeCommentShare, BotaoLike, BotaoComentarios, BotaoCompartilhar, BotaoSavePost } from "./style";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function BarraLike() {

  return (
    <Container>
      

      <DivLikeCommentShare>

        <BotaoLike>
          <FavoriteBorderOutlinedIcon />
        </BotaoLike>

        <BotaoComentarios>
          <ModeCommentOutlinedIcon />
        </BotaoComentarios>  

        <BotaoCompartilhar>
          <SendOutlinedIcon />
        </BotaoCompartilhar>

      </DivLikeCommentShare>


      <BotaoSavePost>
        <BookmarkBorderOutlinedIcon />
      </BotaoSavePost>


    </Container>
  );
}

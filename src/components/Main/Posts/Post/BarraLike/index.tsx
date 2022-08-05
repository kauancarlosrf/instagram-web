import React, { useState } from "react";
import { Container, BoxLikeCommentShare, BotaoLike, BotaoComentarios, BotaoCompartilhar, BotaoSavePost } from "./style";
//icons
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { FiSend } from 'react-icons/fi';
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';

export default function BarraLike() {
  const [savedPost, setSavedPost] = useState(false);

  return (
    <Container>
      
      <BoxLikeCommentShare>

        <BotaoLike>
          <AiOutlineHeart style={{ width: 27, height: 27 }} />
        </BotaoLike>

        <BotaoComentarios>
          <ModeCommentOutlinedIcon />
        </BotaoComentarios>  

        <BotaoCompartilhar>
          <FiSend style={{ width: 25, height: 25 }} />
        </BotaoCompartilhar>

      </BoxLikeCommentShare>

      <BotaoSavePost onClick={() => {setSavedPost(!savedPost)}}>
        {
          savedPost === false
          ? <RiBookmarkLine style={{ width: 23, height: 23, color: '#222' }} />
          : <RiBookmarkFill style={{ width: 23, height: 23, color: '#222' }} />
        }
      </BotaoSavePost>

    </Container>
  );
}

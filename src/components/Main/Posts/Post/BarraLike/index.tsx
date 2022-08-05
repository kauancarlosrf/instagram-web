import React, { useState } from "react";
import { Container, BoxLikeCommentShare, BotaoLike, BotaoCompartilhar, BotaoSavePost } from "./style";
import ModalComentarios from './ModalComentarios';
//icons
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

        <ModalComentarios />

        <BotaoCompartilhar>
          <FiSend style={{ width: 25, height: 25 }} />
        </BotaoCompartilhar>

      </BoxLikeCommentShare>

      <BotaoSavePost onClick={() => {setSavedPost(!savedPost)}}>
        {
          savedPost === false
          ? <RiBookmarkLine style={{ width: 23, height: 23 }} />
          : <RiBookmarkFill style={{ width: 23, height: 23 }} />
        }
      </BotaoSavePost>

    </Container>
  );
}

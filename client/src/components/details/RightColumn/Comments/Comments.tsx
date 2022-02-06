import { Button } from "@mui/material";
import { FaComment, FaComments, FaFlag } from "react-icons/fa";
import {
  Container,
  CommentEntry,
  CommentInput,
  TitleContainer,
  CommentsList,
} from "./Comments.styled";
import TextField from "@mui/material/TextField";

const Comments = () => {
  return (
    <Container>
      <TitleContainer>
        <FaComments size="24px" />
        <h2>Comentarios</h2>
      </TitleContainer>

      <CommentsList>
        <CommentEntry>
          <b id="name">Pepe guardiola:</b>
          <p id="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>

          <div id="extras">
            <span>Publicado el 02/13/22 20:33</span>
            <FaFlag size="10px" color="gray" />
          </div>
        </CommentEntry>
      </CommentsList>

      <CommentInput>
        <TextField
          className="comment-input"
          label="Comentario"
          multiline
          rows={4}
          defaultValue=""
        />
        <Button variant="contained" startIcon={<FaComment />}>
          Enviar comentario
        </Button>
      </CommentInput>
    </Container>
  );
};

export default Comments;

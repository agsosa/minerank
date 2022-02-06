import { Button } from "@mui/material";
import { FaComment } from "react-icons/fa";
import { Container, CommentEntry, CommentInput } from "./Comments.styled";
import TextField from "@mui/material/TextField";

const Comments = () => {
  return (
    <Container>
      <h3>Comentarios</h3>

      <CommentEntry>
        <b id="name">Pepe guardiola:</b>
        <p id="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>
        <span id="date">Publicado el 02/13/22 20:33</span>
      </CommentEntry>

      <CommentInput>
        <TextField
          id="outlined-multiline-static"
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

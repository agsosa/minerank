import { Container, Flex } from "./Filters.styled";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button, TextField } from "@mui/material";
import { FaRandom, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectGameModeState } from "src/state/gamemode";
import { selectVersionState } from "src/state/version";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Filters = () => {
  const { gamemodes } = useSelector(selectGameModeState);
  const { versions } = useSelector(selectVersionState);

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Container>
      <Flex>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Nombre de Servidor"
          variant="outlined"
          size="small"
        />
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Modo de Juego</InputLabel>
          <Select
            multiple
            value={personName}
            size="small"
            onChange={handleChange}
            input={<OutlinedInput label="Modo de Juego" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {gamemodes.map(({ label_es, id }) => (
              <MenuItem key={id} value={label_es}>
                <Checkbox checked={personName.indexOf(label_es) > -1} />
                <ListItemText primary={label_es} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Premium</InputLabel>
          <Select
            multiple
            value={personName}
            size="small"
            onChange={handleChange}
            input={<OutlinedInput label="Modo de Juego" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Version</InputLabel>
          <Select
            multiple
            value={personName}
            size="small"
            onChange={handleChange}
            input={<OutlinedInput label="Modo de Juego" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {versions.map(({ label, id }) => (
              <MenuItem key={id} value={label}>
                <Checkbox checked={personName.indexOf(label) > -1} />
                <ListItemText primary={label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>País</InputLabel>
          <Select
            multiple
            value={personName}
            size="small"
            onChange={handleChange}
            input={<OutlinedInput label="Modo de Juego" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button sx={{ width: "80%" }} startIcon={<FaRandom />} variant="outlined" size="large">
          Servidor al azar
        </Button>
      </Flex>
    </Container>
  );
};

export default Filters;

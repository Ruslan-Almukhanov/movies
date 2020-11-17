import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./AppHeader.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    width: 600
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  select: {
    width: 220,
    marginLeft: 10
  }
}));

const AppHeader = ({ search, setSearch, selectHandler, selectYearHandler }) => {
  const classes = useStyles();
  return (
    <div className={styles.overlay}>
      <Container>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search movies"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <SearchIcon />
          <FormControl variant="outlined" className={classes.select}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Фильтр по категориям
            </InputLabel>
            <Select
              native
              defaultValue="Фильтр по категориям"
              onChange={e => selectHandler(e)}
              label="Фильтр по категориям"
            >
              <option aria-label="None" value="" />
              <option value={"movie"}>Фильмы</option>
              <option value={"series"}>Сериалы</option>
            </Select>
          </FormControl>
        </Paper>
        <div className={styles.year} onClick={selectYearHandler}>
          <h6 value="2020" style={{ textAlign: "center", cursor: "pointer" }}>
            новинки
          </h6>
          <h6 value="2000" style={{ textAlign: "center", cursor: "pointer" }}>
            старые
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default AppHeader;

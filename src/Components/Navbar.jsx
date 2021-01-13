import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../assets/images/logo.png';

import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  link: {
      marginLeft: 10,
      color: '#264796',
      textDecoration: 'none',
      fontSize: 18,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    objectFit: 'contain',
    objectPosition: 'center'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
            <Link to="/">
              <img src={Logo} className={classes.logo} alt="Logo" />
            </Link>
        </Toolbar>
        <Toolbar className={classes.nav}>
            <Link className={classes.link} to="/">Главная</Link>
            <Link className={classes.link} to="/catalog">Каталог</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
import * as React from 'react';
import { StatisticsModel } from '../../@types/channel.types';
import { navBarStyles } from './navbar-styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Grid } from '@material-ui/core';

export interface NavBarProps {
  className?: string;
  statistics?: StatisticsModel;
}

const CHANNEL_LINK =
  'https://www.youtube.com/channel/UCxh3BvgXBr3oTi_VHoewdyg?view_as=subscriber';

const NavBar: React.FunctionComponent<NavBarProps> = props => {
  const { statistics } = props;
  const classes = navBarStyles({});
  return (
    <React.Fragment>
      <Box className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar classes={{ root: classes.toolBarRoot }}>
            <Typography className={classes.title} variant="h6" noWrap>
              CodeAi
            </Typography>
            <Grid
              style={{ width: 'auto' }}
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <i className="fa fa-search" />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Link
                component="a"
                target="_blank"
                rel="noreferrer"
                href={CHANNEL_LINK}
              >
                <IconButton
                  className={classes.iconButton}
                  aria-label="Go to channel page"
                >
                  <i className="fab fa-youtube" />
                </IconButton>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ height: 64 }} id="nav-offset" />
    </React.Fragment>
  );
};

export default NavBar;

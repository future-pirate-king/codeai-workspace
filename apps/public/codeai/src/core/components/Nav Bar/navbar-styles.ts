import { makeStyles, createStyles, withStyles } from '@material-ui/styles';
import { fade, Theme, darken } from '@material-ui/core/styles';

export const navBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      boxShadow: 'none !important'
    },
    toolBarRoot: {
      justifyContent: 'space-between'
    },
    iconButton: {
      margin: theme.spacing(2),
      color: '#FF0000 !important',
      '&:hover': {
        backgroundColor: fade('#FF0000', 0.08) + ' !important'
      }
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.primary.dark, 0.5),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.dark, 0.75)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    searchIcon: {
      width: theme.spacing(9),
      color: darken(theme.palette.primary.dark, 0.15),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: `${theme.spacing(1.2, 1, 1.2, 9)} !important`,
      transition: theme.transitions.create('width'),
      color: '#000000 !important',
      fontSize: '1.1rem !important',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '120px !important',
        '&:focus': {
          width: '200px !important'
        }
      }
    }
  })
);

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f8f9fc'
    },

    paper: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        minWidth: '400px',
        width: '35%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        padding: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    shadow: {
        boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important',
        borderRadius: 'calc(0.35rem - 1px) calc(0.35rem - 1px) calc(0.35rem - 1px) calc(0.35rem - 1px)',
        border: '1px solid #e3e6f0',
    },
}));

export default function Login() {
    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs" className={classes.root}>
            <CssBaseline/>
            <div className={classes.paper}>
                <form className={`${classes.form} ${classes.shadow}`} noValidate>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="ID"
                        name="id"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
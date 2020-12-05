import React from "react";
import {ToastContainer} from "react-toastify";
import {Box, Grid, Typography} from "@material-ui/core";
import MultiAxisLine from "../Component/LineGraph";
import DouExample from "../Component/DouGraph";
import Orders from "../Component/Orders";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f8f9fc',
        height: '100vh',
    },

    title: {
        backgroundColor: '#f8f9fc',
        borderRadius: 'calc(0.35rem - 1px) calc(0.35rem - 1px) 0 0',
        margin: 0,
        padding: 10,
        borderBottom: '1px solid #e3e6f0',
    },

    body: {
        backgroundColor: '#ffffff',
        borderRadius: '0 0 calc(0.35rem - 1px) calc(0.35rem - 1px)',
        margin: 0,
        padding: 10,
    },


    shadow: {
        boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important',
        borderRadius: 'calc(0.35rem - 1px) calc(0.35rem - 1px) calc(0.35rem - 1px) calc(0.35rem - 1px)'
    },

    container: {
        boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important',
        border: '1px solid #e3e6f0',
        margin: 10,
    },

    test: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 20,
        color: "#333",
        fontWeight: 500,
        border: '1px solid #e3e6f0'
    },

    paper: {
        height: 140,
        width: 100
    }
})

export default function Dashboard() {
    const classes = useStyles();
    return (
        <Box className={classes.root} maxHeight={"sm"}>
            <ToastContainer/>

            <Box m={2}>
                <Typography variant="h5" color="textPrimary">
                    My Portfolio
                </Typography>
            </Box>


            <Grid container spacing={0} alignItems="flex-start">
                <Grid item xs={12} sm={3}>
                    <Box className={`${classes.shadow} ${classes.test}`}>
                        전일 대비
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box className={`${classes.shadow} ${classes.test}`}>
                        총 손익
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box className={`${classes.shadow} ${classes.test}`}>
                        투자액
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box className={`${classes.shadow} ${classes.test}`}>
                        평가 가치
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box className={`${classes.shadow} ${classes.test}`}>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.container}>
                        <Box className={`${classes.title}`}>
                            <Box ml={1}>
                                <Typography variant="h6" color="textPrimary">
                                    수익률
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={`${classes.body}`}>
                            <MultiAxisLine/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.container}>
                        <Box className={`${classes.title}`}>
                            <Box ml={1}>
                                <Typography variant="h6" color="textPrimary">
                                    투자 지분율
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={`${classes.body}`}>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <DouExample/>
                                </Box>
                                <Box>
                                    <DouExample/>
                                </Box>

                            </Box>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12}>
                    <Box className={classes.container}>
                        <Box className={`${classes.title}`}>
                            <Box ml={1}>
                                <Typography variant="h6" color="textPrimary">
                                    보유 종목
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={`${classes.body}`}>
                            <Orders/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}
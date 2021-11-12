import {Breadcrumbs, Link, Paper, Typography} from '@mui/material';
import { Route, withRouter } from 'react-router';
import styles from './BreadCrumbs.module.css';
import {useTheme} from "@mui/styles";
import {useEffect} from "react";



const BreadCrumbs = (props: any) => {
    //Logic
    console.log(props);
    const { history, location } = props;
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((x: any) => x);
    console.log("path", pathnames);

    //Template
    return (
        <Paper sx={{display:'flex', backgroundColor: `rgba(0, 186, 219, 0.5)`, mt:.1, color:'black', pr:2, width:'max-content'}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography sx={{ml:1}}>Path:</Typography>
                {pathnames.length > 0 ? (
                <Link underline="hover" color="white" onClick={() => history.push("/")}>
                    Home
                </Link>
                ) : ("")}
                {pathnames.map((name: any, index: any) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (<Typography sx={{color:'white'}}> {name} </Typography>) :
                        (<Link underline="hover" color="white" onClick={() => history.push(routeTo)}>{name}</Link>);
                })}

            </Breadcrumbs>
        </Paper>
    )};

export default withRouter(BreadCrumbs);
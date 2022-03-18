import { Grid } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import MyNavbar from '../Header/MyNavbar';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';


const Home = () => {
    return (
        <div>
            <Grid spacing-md={3} spacing-sm={3}>
                <MyNavbar/>
                <Sidebar />
                <Content />
                <Footer />
            </Grid>
        </div>
    );
};

export default Home;
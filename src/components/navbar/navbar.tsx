import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Navbar = () => {
    return (
        <header>
            <Grid container>
                <Grid item sm={12}>
                    <Paper className='p40'>
                        <h2>Navigate to load the modules asynchronously</h2>
                        <nav className='nav-links'>
                            <Link to="/">Home</Link>
                            <Link to="/dplist">DP list page</Link>
                        </nav>
                    </Paper>
                </Grid>
            </Grid>
        </header>
    )
}
export default Navbar;
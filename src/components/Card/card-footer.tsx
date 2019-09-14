
import React, { useState, useEffect, useCallback } from "react";
import { Footer } from './card.styles'
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '../table/table';
import Modals from '../modal/modal';
import Select from '../select/select';

const rows = [
    {
        id: 0,
        left: 'name',
        right: 'shivangi'
    },
    {
        id: 1,
        left: 'City',
        right: 'jjehddhf kdhsk',
    },
    {
        id: 2,
        left: 'value',
        right: 'jjehddhf kdhsk',
    }
];
const notes = [
    {
        id: 0,
        left: 'Date & Time',
        center: 'Disposition / Notes',
        right: 'Entered by'
    },
    {
        id: 1,
        left: '6th April, 2018 10:30 am',
        center: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        right: 'jjehddhf kdhsk',
    },
    {
        id: 2,
        left: '6th April, 2018 10:30 am',
        center: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        right: 'jjehddhf kdhsk',
    },
    {
        id: 3,
        left: '6th April, 2018 10:30 am',
        center: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        right: 'jjehddhf kdhsk',
    },
    {
        id: 4,
        left: '6th April, 2018 10:30 am',
        center: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        right: 'jjehddhf kdhsk',
    }
];
const menusitems = ["daily", "monthly", "yearly"];
const CardFooter = (props) => {
    const [state, setState] = useState({ open: false });
    function handleChange(event) {
        setState({
            open: false
        });
    }
    function showChange() {
        setState({
            open: true
        });
    }

    return (
        <div>
            <Footer onClick={showChange}>
                {props.title}
            </Footer>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={state.open}
                onClose={handleChange}>
                <Modals header={props.title == "MORE DETAILS" ? ('Partner Details') : ('Notes')} >
                    {props.title.trim() == "MORE DETAILS" ? (
                        <Grid container>
                            <Grid item sm={6} style={{ paddingRight: '12px' }}>
                                <span className="personal">Personal</span>
                                <Table rows={rows} />
                            </Grid>
                            <Grid item sm={6}>
                                <span className="personal">Business</span>
                                <Table rows={rows} />
                            </Grid>
                        </Grid>) : (
                            <Grid container spacing={24}>
                                <Grid item sm={12} style={{ textAlign: 'right' }} >
                                    <Select menus={menusitems} size="sm" />
                                </Grid>
                                <Grid item sm={12}>
                                    <Paper>
                                        <Table rows={notes} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        )}
                </Modals>
            </Modal>
        </div>
    );
}


export default CardFooter;
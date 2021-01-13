import React from 'react'
// import { Link } from 'react-router-dom'

import '../styles/Catalog.css';

import {Card, Filter} from '../Components';
import { Grid } from '@material-ui/core';

function Catalog({state}) {
    const [vendor, setVendor] = React.useState(null);

    const handleChange = (e) => {
        setVendor(e.target.value);
    }

    const resetFilter = () => {
        setVendor('');
    }

    return (
        <>
            <Filter state={state} vendorName={vendor} onChange={handleChange} reset={resetFilter} />
            <Grid container spacing={2} style={{marginTop: 10}}>
                {
                    !vendor ? state.map((product, index) => (
                        <Grid item xs>
                            <Card key={index} product={product} />
                        </Grid>
                    )) : state.map((item, index) => item.vendor === vendor &&
                        <Grid item xs>
                            <Card key={index} product={item} />
                        </Grid>
                    )
                }
            </Grid>
        </>
            
    )
}

export default Catalog

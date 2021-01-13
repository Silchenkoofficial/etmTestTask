import React from 'react'
import { Button, Dialog, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

function Filter({state, vendorName, onChange, reset}) {
    let duplicateVendors = state.map(item => item.vendor);
    let vendors = duplicateVendors.filter((item, index) => duplicateVendors.indexOf(item) === index);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    
    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className="dialog">
                <DialogTitle>Фильтр</DialogTitle>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Производитель</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vendorName}
                        onChange={onChange}
                    >
                        {
                            vendors.map((product) => <MenuItem value={product}>{product}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <Button style={{marginTop: 10}} variant="contained" color="dafault" onClick={() => {reset(); setOpen(false)}}>Сбросить фильтр</Button>
                <Button style={{marginTop: 10}} variant="contained" color="primary" onClick={() => setOpen(false)}>Применить</Button>
            </Dialog>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Фильтр</Button>
        </>
    )
}

export default Filter

import React from "react";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';

const Playground = () => {
    return (
        <div className=''>
            <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
                <OutlinedInput
                    id='outlined-adornment-weight'
                    endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
                    aria-describedby='outlined-weight-helper-text'
                    inputProps={{
                        "aria-label": "weight",
                    }}
                />
                <FormHelperText id='outlined-weight-helper-text'>Weight</FormHelperText>
            </FormControl>
        </div>
    );
};

export default Playground;

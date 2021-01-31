import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import ThemeContext from '../../../containers/ThemeContext'
const AreaFilter = (props) => {
    const theme = useContext(ThemeContext);
    console.log(theme);
    let options =
        props.regions && props.regions.map((region, idx) => <MenuItem key={idx} value={region}>{region}</MenuItem>);
    return (
        <div>
            <Select onChange={props.changed} autoWidth="true">
                <MenuItem key="all" value="all">All Regions</MenuItem>
                {options}
            </Select>
            <Button variant="contained" color="primary">testing</Button>
        </div>
    );
}

export default AreaFilter;
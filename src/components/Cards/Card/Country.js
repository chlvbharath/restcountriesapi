import React from 'react';

import classes from './Country.module.css'
const countryControl = (props) => (
    <div className={classes.CardContainer}>
        <div>
            <img className = {classes.Flag} src= {props.flagUrl} alt='countryImage' />
        </div>
        <div>
            <span>{props.name}</span>
        </div>
        <div>
            <span>population</span>:<span>{props.population}</span>
        </div>
        <div>
<span>region</span>:<span>{props.region}</span>
        </div>
        <div>
<span>capital</span>:<span>{props.capital}</span>
        </div>
    </div>
);

export default countryControl;
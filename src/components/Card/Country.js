import React from 'react';

import Classes from './Country.module.css'
const countryControl = (props) => (
    <div>
        <div>
            <img className = {Classes.flag} src= {props.flagUrl} alt='countryImage' />
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
import React from 'react'
import Country from './Card/Country'
import classes from './Countries.module.css'
const CountriesControl = (props) => {
    let cards = props.data.map((row,i) => {
        return <Country
            key={i}
            name={row.name}
            region={row.region}
            capital={row.capital}
            flagUrl={row.flag}
            population={row.population} />;
    });
    return <div className={classes.CardsContainer}>
        {cards}
    </div>;
}

export default CountriesControl;
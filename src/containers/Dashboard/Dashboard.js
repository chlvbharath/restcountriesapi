import React, { Component } from 'react';
import axios from '../../axios-helper';
import Countries from '../../components/Cards/Countries';
import AreaFilter from '../../components/UI/FilterControl/AreaFilter';
import SearchFilter from '../../components/UI/SearchControl/SearchFilter';
import classes from './Dashboard.module.css';
import {ThemeProvider}  from '../ThemeContext';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            regions: [],
            sample:'testing'
        }
    }
    
    componentDidMount() {
        axios.get('/all?fields=name;capital;currencies;region;flag;population')
            .then(resp => {
                const regions = resp.data.map(row => row.region);
                const uniqueRegions = [...new Set(regions)];
                console.log(uniqueRegions);
                this.setState({
                    data: resp.data,
                    regions: uniqueRegions
                });
            });
    }

    searchHandler = (event) => {
        debugger;
        const searchValue = event.target.value;
        axios.get(`/name/${searchValue}`)
            .then(resp => {
                this.setState({ data: resp.data });
            });
    }

    areaFilterHandler = (event) => {
        debugger;
        const regionValue = event.target.value;
        let url = regionValue === "all" ?
            '/all?fields=name;capital;currencies;region;flag;population'
            : `/region/${regionValue}`
        axios.get(url)
            .then(resp => {
                this.setState({ data: resp.data });
            });
    }

    render() {
        let theme = 'light';
        return (
            <div>
                <ThemeProvider value={theme}>
                <div className={classes.FilterContainer}>
                <SearchFilter changed={(event) => this.searchHandler(event)} />
                <AreaFilter changed={(event) => this.areaFilterHandler(event)} regions={this.state.regions} />
                </div>
                </ThemeProvider>
                <Countries data={this.state.data} />
            </div>
        );
    }
}

export default Dashboard;
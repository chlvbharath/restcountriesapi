import React, { Component } from 'react';
import axios from '../../axios-helper';
import Card from '../../components/Card/Country';
class Dashboard extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('/all')
            .then(resp => {
                debugger;
                this.setState({ data: resp.data });
            });
    }
    render() {
        let cards =
            this.state.data.map(row => {
                return <Card
                    key={row.alpha2Code}
                    name={row.name}
                    region={row.region}
                    capital={row.capital}
                    flagUrl={row.flag}
                    population={row.population} />;
            });
        return (
            <div>{cards}</div>
        );
    }
}

export default Dashboard;
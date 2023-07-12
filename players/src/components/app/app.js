import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import PlayersList from '../players-list/players-list';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Marcus Rachford', scored: 14, assists: 3, playerOfTheMonth: false, id: 1},
                {name: 'Bruno Fernandes', scored: 8, assists: 9, playerOfTheMonth: true, id: 2},
                {name: 'Antony Martial', scored: 9, assists: 4, playerOfTheMonth: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
    
                <p>text</p>
                <PlayersList 
                data={this.state.data} 
                onDelete={this.deleteItem}/>
            </div>
        );
    }
}

export default App;
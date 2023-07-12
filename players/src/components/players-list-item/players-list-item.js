import { Component } from 'react';

import './players-list-item.css';

class PlayersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOfTheMonth: false
        }
    }

    onPlayerOfTheMonth = () => {
        this.setState(({playerOfTheMonth}) => ({
            playerOfTheMonth: !playerOfTheMonth
        }))
    }

    render() {
        const {name, scored, assists, onDelete} = this.props;
        const {playerOfTheMonth} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (playerOfTheMonth) {
            classNames += ' playerOfTheMonth';
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={scored + ' goals'}/>
                <input type="text" className="list-group-item-input" defaultValue={assists + ' assists'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onPlayerOfTheMonth}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default PlayersListItem;
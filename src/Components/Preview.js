import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Preview extends Component {
    render() {
        return (
            <section>
                <Link to='/form'>/<button> + </button> </Link>
                <ul>
                    {this.props.previousDays.map((day) => <li> {day.status} {day.date} {day.msg}
                    </li>)}
                </ul>

            </section>
        );
    }
}

export default Preview;

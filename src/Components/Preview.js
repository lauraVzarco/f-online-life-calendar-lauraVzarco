import React, { Component } from 'react';
import '../App.css';

class Preview extends Component {
    render() {
        return (
            <section>
                <button> + </button>
                <ul>
                    {this.props.previousDays.map((day) => <li> {day.status} {day.date} {day.msg}
                    </li>)}
                </ul>

            </section>
        );
    }
}

export default Preview;

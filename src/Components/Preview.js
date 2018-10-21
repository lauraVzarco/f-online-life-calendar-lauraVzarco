import React, { Component } from 'react';
import '../App.css';

class Preview extends Component {
    render() {
        const {
            date,
            status,
            msg
        } = this.props;

        return (
            <section>
                <button> + </button>
                <div> {status}</div>
                <div>{date} {msg} </div>
            </section>
        );
    }
}

export default Preview;

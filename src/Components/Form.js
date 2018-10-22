import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Form extends Component {
    render() {
        const {
            handleDate,
            handleStatus,
            handleMsg,
            date,
            msg,
            onSubmit
        } = this.props
        return (
            <section>
                <form>
                    <label htmlFor="fecha"> Fecha </label>
                    <input
                        type="text"
                        placeholder="dd/mm/aa"
                        value={date}
                        onChange={handleDate} />
                    <label htmlFor=":)"> :) </label>
                    <input
                        type="radio"
                        name="animo"
                        value=":)"
                        onChange={handleStatus}
                    />
                    <label htmlFor=":("> :( </label>
                    <input
                        type="radio"
                        name="animo"
                        value=":("
                        onChange={handleStatus}
                    />
                    <label htmlFor="mensaje"> Mensaje </label>
                    <input
                        type="text"
                        placeholder="¿Cómo fue el día?"
                        value={msg}
                        onChange={handleMsg}
                    />


                    <Link className="backToHome" to={'/'}> <button onClick={onSubmit}>Guardar</button> </Link>
                </form>
            </section>
        );
    }
}

export default Form;
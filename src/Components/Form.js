import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
    render() {
        const {
            handleDate,
            handleStatus,
            handleMsg,
            date,
            msg
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
                    <label htmlFor=":("> :) </label>
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
                    <input
                        type="submit"
                        value="Guardar" />
                </form>
            </section>
        );
    }
}

export default Form;
import React, { Component } from 'react'

export default class Form extends Component {

    state = { 
        inputName : '', 
        inputTwitter : '@',
        inputTerms : true
    };

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms : e.target.checked})
    }    
    
    render () {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleClick}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input 
                            id='name' 
                            name='userName'
                            onChange = {e => this.setState({inputName : e.target.value})} 
                            placeholder='Introduce el Nombre'
                            value={this.state.inputName}
                        />
                    </p>

                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input 
                            id='twitter' 
                            name='twitterAccount'
                            onChange = {e => this.setState({inputTwitter : e.target.value})}
                            placeholder='Introduce tu Twitter'
                            value={this.state.inputTwitter}    
                        />
                    </p>

                    <p>
                        <label>
                            Acept Terms
                            <input 
                                type='checkbox' 
                                onChange={this.handleChange}
                                checked={this.state.inputTerms}
                            />
                        </label>                        
                    </p>

                    
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
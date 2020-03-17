import React, { Component } from 'react'

class BotonLanzaError extends Component {
    state = { throwError : false}
    
    render() {
        if (this.state.throwError) {
            throw new Error ('Error lanzando por el boton')
        }

        return (
            <button onClick = {() => this.setState({throwError : true}) }>Lanzar Error</button>
        )
    }
}

class EjemploComponentDidCatch extends Component {
    state = { hasError: false, errorMesage : ''}

    componentDidCatch(error, infoError) {        
        console.log('Atrapar Error')
        this.setState({hasError : true, errorMesage : error.toString()})

    }

    render() {

        if(this.state.hasError) {
            return (
                <div>
                    <p>Error el componente: {this.state.errorMesage}</p>
                    <button onClick = {() => this.setState({hasError : false})}>Retornar Funcion</button>
                </div>                
            )
        }

        return (
            <div>
                <h4>Prueba de el Catch</h4>
                <BotonLanzaError></BotonLanzaError>
            </div>
        )
    }
}

export default EjemploComponentDidCatch;
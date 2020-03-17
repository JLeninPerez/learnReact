import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
    state = { windowsWidht: 0}

    _updateStateWindowsWidth = () => {
        console.log('Ejecucion')
        this.setState({ windowsWidht : document.body.clientWidth})
    }

    componentDidMount () {
        this._updateStateWindowsWidth()
        window.addEventListener('resize', this._updateStateWindowsWidth)
    }

    componentWillUnmount () {
        console.log('Desmontaje')
        window.removeEventListener('resize', this._updateStateWindowsWidth)
    }

    render () {
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowsWidht}</p>
            </div>
        )
    }
}


class EjemploDeComponentWillUnmount extends Component {
    state = { mostarComponente : true }
    render () {

        if (this.state.mostarComponente) {
            return (
                <div>
                    <h4>Ciclo de desmontaje</h4>
                    <ComponenteADesmontar></ComponenteADesmontar>
                    <button onClick={() => this.setState({mostarComponente : false})}>Desmontar</button>
                </div>
            )
        }

        return (
            <div>
                <p>Componente Desmontado</p>
            </div>
        )        
    }
}

export default EjemploDeComponentWillUnmount
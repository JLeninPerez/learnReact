import React, { Component } from 'react'

class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesion</button>
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido ususario!</p>
                <button>Cerrar sesion</button>
            </div>
        )
    }
}

/*function useConditionalRenderiing (mostrarA) {
    if (mostrarA) {
        return <ComponenteA></ComponenteA>
    }
    return <ComponenteB></ComponenteB>
}*/


export default class ConditionalSection extends Component {
    /*constructor () {
        super()
        this.state = { mostrarA : true}
    }*/
    state = { isUserLogged : true}
    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged ? <LogoutButton/> : <LoginButton/>}
            </div>
        )
    }
}
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGE = {
    dog : 'https://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    cat : 'https://ichef.bbci.co.uk/news/320/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg',    
    rabbit : 'https://misanimales.com/wp-content/uploads/2015/01/conejo.jpg',
    tiger : 'https://www.ambientum.com/wp-content/uploads/2019/02/tigre-bengala-696x392.jpg'
}

const ANIMAL = Object.keys(ANIMAL_IMAGE)

// Pure Component verifica si se debe renderizar o no pero de manera superficial
//class AnimalImage extends PureComponent {
class AnimalImage extends Component {
    state = { src : ANIMAL_IMAGE[this.props.animal]}

    componentWillReceiveProps ( nextProps ) {
        console.clear()
        console.log('1. Actualizar el state ', nextProps)
        this.setState({ src : ANIMAL_IMAGE[nextProps.animal] }) 
    }


    // Podemos analizar si el componente se debe renderizar
    shouldComponentUpdate (nextProps) {
        console.log('2. Debe actualizarse ', nextProps)
        return nextProps.animal !== this.props.animal
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('3. Antes de Actulizar ', nextProps, nextState)

        const img = document.querySelector('img')
        img.animate([{filter : 'blur(0px)'}, {filter: 'blur(2px)'}], {duration: 500, easing: 'ease'})
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('4. Ultimo cliclo')
        const img = document.querySelector('img')
        img.animate([{filter: '2px'}, {filter: '0px'}], {duration: 1500, easing: 'ease'})
    }

    render() {
        console.log('render')
        return (
            <div>
                <p>Selected { this.props.animal }</p>
                <img alt = { this.props.animal } src = { this.state.src } width = '250'></img>
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal : PropTypes.oneOf(ANIMAL)
}

/*AnimalImage.defaultProps = {
    animal : 'dog'
}*/

class EjemploCicloDeActualizacion extends Component {
    state = { animal : 'dog' }

    renderAnimalButton = (animal) => {
        return (
            <button 
                //disabled = { animal === this.state.animal } 
                key = {animal} 
                onClick = {() => this.setState({animal})}>{animal}
            </button>
        )
    }

    render () {
        return (
            <div>
                <h4>Ciclo de Actualizacon</h4>
                {ANIMAL.map(this.renderAnimalButton)}
                <AnimalImage animal = { this.state.animal }></AnimalImage>
            </div>
        )
    }
}

export default EjemploCicloDeActualizacion

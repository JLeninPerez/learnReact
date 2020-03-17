import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/*function Hello(props) {
  return <h1>{props.title}</h1>
}*/

//const Hello = (props) => <h1>{props.title}</h1>

/*class Hello extends Component {
  render () {    
    return <div>        
        {this.props.titulo}
        <h1>{this.props.title}</h1>
      </div>   
  }
}

Hello.defaultProps = {
  title : 'Texto por defecto' 
}

class Text extends Component {
  render () {
    const secondText = this.props.boll ? 'Texto 2' : 'Texto 1';
    return <div>
      <p>{this.props.title}</p>
      <p>{this.props.num}</p>
      <p>{secondText}</p>
    </div>    
  }
}

class Array extends Component {  
  render () {
    const arrayMap = this.props.array.map(n => n * 2);
    return <div>
      <p>{arrayMap.join(', ')}</p>
      <p>{this.props.object.key2}</p>
    </div> 
    
  }
}

class Multiply extends Component {
  render () {
    const {
      Operator, 
      Numbers
    } = this.props;
    const Result = Numbers.map(Operator);
    return <div>      
      <p>{Result.join('; ')}</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello          
          titulo={<h2>Esto es una etiqueta</h2>}  
        />
        
        <Text 
          boll={false} 
          num={2} 
          title='Probando los diferentes parametros' 
        />

        <Array 
          array={[1, 2, 3]}
          object={{key1 : 'Primer Valor', key2 : 'Segundo Valor'}}
        />

        <Multiply
          Numbers={[2, 3, 4]}
          Operator={numero => numero * 3}
        />


      </header>
      
    </div>
  );
}

export default App;*/

/*class Contador extends Component {  
  constructor (props) {
    super (props)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador : this.state.contador + 1})
    }, 1000)
  }

  render() {    
    return <ContarNumero number={this.state.contador}/>
  }
}

Contador.defaultProps = {
  contadorInicial : 10 
}

class Contando extends Component {
  state = { contando : 0 }    
  render () {    
    return <p>Estamos contando {this.state.contando}</p>
  }
}

class ContarNumero extends Component {  
  render () {
    console.log('contador');    
    return <span>Estoy contando {this.props.number}</span>    
  }
}

console.log('Hola')

class App extends Component {
  render () {
    return (
      <div className="App">
        <p>Primer componenete</p>        
        <Contador></Contador>
      </div>
    );   
  }
}



export default App;*/

//import ConditionalSection from './sections/conditional';
//import cars from './data/cars.json';

/*class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]
    return (
      <div className = 'App'>
        <h4>Trabajando con Listas</h4>
        {numbers.map( (number, index) => {
          return <p key = {index}>Soy el numero {number}</p>
        })}
      </div>
    );
  }
}*/

/*class CardItem extends Component {
  render() {
    const {car} = this.props
    return (
      <li>
        <p><strong>Nombre:</strong> {car.name}</p>
        <p><strong>Marca:</strong> {car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <h4>Trabajando con listas de Objetos</h4>
        <ul>
          {
            cars.map( car => {
              return <CardItem key = {car.id} car = {car}></CardItem>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;*/

/*class App extends Component {
  state = { mouseX : 0, mouseY : 0 };

  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({ mouseX : clientX, mouseY : clientY})
  }


  handleClick (e) {
    console.log(e)
    alert('Esto es una alerta')
  }

  render () {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hola!</button>

        <div
          onMouseMove = {this.handleMouseMove}
          style = {{ border : '1px solid #000', marginTop : 10, padding : 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>

      </div>
    )
  }
}

export default App;*/

/*import Form from './sections/forms'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Form></Form>
      </div>
    )
  }
}

export default App;*/

/*import PropTypes from 'prop-types'; 

class Box extends Component {
  render () {
    return (
      <div style={{ border: '1px solid #09f', margin: '5', padding: '5'}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author : PropTypes.string.isRequired
  }

  render () {
    const {author, title, date, children} = this.props
    return (
      <section>
        <h2>{title}</h2>
        { author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <h4>Children Props</h4>

        <Article
          author = 'Ryan'
          date = {new Date().toLocaleDateString()}
          title = 'Articulo sobre los children'
        >

          <p>El contenido del Articulo tiene otras etiquetas. <strong>Esto es un ejemplo</strong></p>
        </Article>        
      </div>
    )
  }
}

export default App;*/

/*import FetchExample from './sections/fetch-example.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <FetchExample></FetchExample>
      </div>
    )
  }
}

export default App;*/

/*import EjemploCicloDeActualizacion from './sections/ejemploCicloDeActualizacion.js'

class App extends Component {
  render () {
    return (
      <div className = 'App'>
        <EjemploCicloDeActualizacion></EjemploCicloDeActualizacion>
      </div>
    )
  }
}

export default App;*/


/*import ComponentWillUnmount from './sections/componentWillUnmount.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ComponentWillUnmount></ComponentWillUnmount>
      </div>
    )
  }
}

export default App;*/

/*import ComponentDidCatch from './sections/componentDidCatch.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ComponentDidCatch></ComponentDidCatch>
      </div>
    )
  }
}

export default App;*/

import BitcointPriceContainer from './sections/container-component'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <BitcointPriceContainer></BitcointPriceContainer>
      </div>
    )
  }
}

export default App;
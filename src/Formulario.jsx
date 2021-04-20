//import { getDefaultNormalizer } from '@testing-library/dom'
import React from 'react'


// Esta clase sera herencia de la clase react.componente de esa manera la clase formulario
// va a extender todos los atributos y metodos de component que presisamente declaran las
//  cualidades de un componente 
class Formulario extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date(),
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
        this.cambiarFecha = this.cambiarFecha.bind(this);

    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }
    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }
    render() {
        return (
            <div className="ed-grid">
                <h1> Ingrese nombres disponibles {this.props.name}</h1>
                <h4>Fecha Actual {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="form-postulacion">
                    <div className="ed-grid m-grid-2">

                        <div className="form__item">

                            <label>nombre displonible</label>
                            <input type="text"
                                onChange={this.cambiarNombre}
                                 />
                            <label>correo laboral</label>
                            <input type="text"
                                onChange={this. cambiarCorreo}/>
                            <a className="button">Ingresar Empleo</a>

                        </div>


                    </div>
                </form>

                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Este es tu correo ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.state.estado)
    }

    // componentDidUpdate(){
    //     console.log('didUpDate',new Date())
    // }
    // componentWillUnmount(){
    //     clearInterval(this.intervaloFecha)
    // }

}

export default Formulario
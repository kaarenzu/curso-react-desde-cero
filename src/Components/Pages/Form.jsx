//import { getDefaultNormalizer } from '@testing-library/dom'
import React from 'react'


// Esta clase sera herencia de la clase react.componente de esa manera la clase Form
// va a extender todos los atributos y metodos de component que presisamente declaran las
//  cualidades de un componente 
class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            date: new Date(),
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeDate = this.changeDate.bind(this);

    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    changeDate() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className="ed-grid">
                <h1>{this.props.name}</h1>
                <h4>Fecha Actual {Math.ceil(this.state.date/1000)}</h4>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">

                        <div className="form__item">

                            <label>nombre displonible</label>
                            <input type="text"
                                onChange={this.changeName}
                                 />
                            <label>correo laboral</label>
                            <input type="text"
                                onChange={this. changeEmail}/>
                            <a className="button">Ingresar Empleo</a>

                        </div>


                    </div>
                </form>

                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Este es tu correo ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let element = document.getElementById('form-element');

        this.dateRange = setInterval(()=>{
            this.changeDate()
        },1000)
    }

    componentDidUpdate(){
    }
    componentWillUnmount(){
        clearInterval(this.dateRange)
    }

}

export default Form
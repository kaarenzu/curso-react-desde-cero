import React from 'react'

const withLoader = (WrappedComponent, propsValue) => {
    return class WithLoader extends React.Component {
        constructor(props){
            super(props)
        }
        render(){

            return this.props[propsValue].length === 0 
            ?<h1>Cargandooo...</h1>
        :<WrappedComponent {...this.props}/>}
        
    }
}
export default withLoader
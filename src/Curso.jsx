import React from 'react';
import PropTypes from 'prop-types'
//  Debemos colocar como parametro props(es un objeto donde se encuentran todas
//  las propiedades que yo le he pasado al momento de imprimir el componente).
// Como "props" es donde almacenan todas las propiedades a props le voy a pedir la 
// propiedad image,title y price ej {props.image}
const Curso = ({image,title,price,profesor}) => (
  <>

    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">
          {title}
        </h3>
        <div className="s-main-center">
        {`Profesora ${profesor}` }
        </div>

          <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ed.team">{price}</a>
        </div>
      </div>
    </article>
  </>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps ={
  title: "No se encontró titulo",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3Vg57McPdxdRHOoxSQqjo1JJZWE-wpO4wg&usqp=CAU",
  price: "--",
  profesor: " "
}



export default Curso
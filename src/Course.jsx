import React from 'react'

const cursos = [
    {
        "id": 1,
        "titulo": "React desde Cero",
        "image": "data:image/png;base64,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",
        "price": "$12.000",
        "profesor": "Karen Zúñiga"
    },
    {
        "id": 2,
        "titulo": "HTML desde Cero",
        "image": "data:image/jpeg;base64,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",
        "price": "$10.000",
        "profesor": "Karen Zúñiga"
    },
    {
        "id": 3,
        "titulo": "CSS desde Cero",
        "image": "data:image/png;base64,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",
        "price": "$10.000",
        "profesor": "Karen Zúñiga"
    }

]

const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]
 
    return (
        <div className="ed-grid m-grid-3">
           {              
            cursoActual ? (
            <>
                <h1 className="m-cols-3">{cursoActual.titulo}</h1>
                <img className="m-cols-1"
                    src={cursoActual.image}
                    alt={cursoActual.titulo} />
                <p className="m-cols-2">Profesor(a):{cursoActual.profesor}</p>
            </>                
            ):
            <h1>curso no existe</h1>
            }
            

 </div>
    )
}




export default Course
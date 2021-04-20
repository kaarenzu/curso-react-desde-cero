import React from 'react'
import Curso from './Curso'

const cursos = [
    {   
        "id": "1",
        "titulo": "React desde Cero",
        "image": "data:image/png;base64,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",
        "price": "$12.000",
        "profesor": "Karen Zúñiga"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {cursos.map(c => <Curso key={c.id} 
        title={c.titulo}
        image={c.image}
        price={c.price}
        profesor={c.profesor}
         />)}

    </div>
)
export default CourseGrid
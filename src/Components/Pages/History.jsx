import React from 'react'

const History = ({match,location,history}) => (
    <div>
        <p>{JSON.stringify(history)}</p>
    </div>
)

export default History
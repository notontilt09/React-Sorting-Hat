import React from 'react'
import './App.css'

const Results = props => {
    const winner = Object.keys(props.scores).reduce((a,b) => {return props.scores[a] > props.scores[b] ? a : b});
    return (
        <section className='results hide'>
            <h1>{winner}</h1>
        </section>
    )
}

export default Results;
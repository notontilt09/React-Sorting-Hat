import React from 'react';
import './App.css';

const Intro = props => {
    return (
        <div className="intro">
            <p className="App-intro">
                I hope you enjoyed your ride across the lake.  You will now be sorted into your house!  Throughout
                your time at Hogwarts you will compete for the House Cup.  The house with the most points
                at the end of the year will win the cup!!!
            </p>
            <p className="App-intro">
                Points for your house will be awarded in a completely subjective matter.  Below is a small example 
                of a few actions and their accompanying point values.
            </p>
            <table className="intro-table">
             <tbody>
                <tr>
                    <th>Action</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>Answering a question correctly in class</td>
                    <td>+5 points</td>
                </tr>
                <tr>
                    <td>Wandering the corridors at night</td>
                    <td>-20 points</td>
                </tr>
                <tr>
                    <td>Going out of the castle after dark</td>
                    <td>-50 points</td>
                </tr>
                <tr>
                    <td>Saving the wizarding world from a dark wizard</td>
                    <td>+60 points</td>
                </tr>
             </tbody>
            </table>
            <p className="App-intro">So you see, we'd really like you to stay inside the castle.</p>
            <button className="sort-me">SORT ME!!!!!</button>
        </div>
    )
}

export default Intro;
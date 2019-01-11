import React from 'react';
import './App.css'

const Quiz = props => {
    return (
        <div className="quiz">
            <section className="question1">
                <h1>Question 1:  What house do you want to be in?</h1>
                <div className="answers">
                    <form className="form1" onSubmit={props.answerQuestion1}>
                        <input type="radio" name="quiz1" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Gryffindor</label><br />
                        <input type="radio" name="quiz1" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">Hufflepuff</label><br /> 
                        <input type="radio" name="quiz1" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">Ravenclaw</label><br />
                        <input type="radio" name="quiz1" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Slytherin</label><br /> 
                        <input type="radio" name="quiz1" id="unknown" value="unknown" /><label htmlFor="unknown">I DON'T KNOW!!!</label><br />
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
            <section className="question2">
                <h1>Question 2: Which of the follow describes a perfect afternoon for you?</h1>
                <div className="answers">
                    <form className="form2" onSubmit={props.answerQuestion2}>
                        <input type="radio" name="quiz1" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">Studying of course!</label><br />
                        <input type="radio" name="quiz1" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Setting up an elaborate prank on my enemy.</label><br /> 
                        <input type="radio" name="quiz1" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Fighting dragons or three-headed dogs.</label><br />
                        <input type="radio" name="quiz1" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">I just hope I make it to the afternoon.</label><br /> 
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Quiz;
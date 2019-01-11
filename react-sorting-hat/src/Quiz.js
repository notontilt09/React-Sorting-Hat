import React from 'react';
import './App.css'

const Quiz = props => {
    return (
        <div className="quiz">
            <section className="question1">
                <h1>Question 1:  What house do you want to be in?</h1>
                <div className="answers">
                    <form className="form1" onSubmit={props.answerQuestion1}>
                        <input required type="radio" name="quiz1" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Gryffindor</label><br />
                        <input required type="radio" name="quiz1" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">Hufflepuff</label><br /> 
                        <input required type="radio" name="quiz1" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">Ravenclaw</label><br />
                        <input required type="radio" name="quiz1" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Slytherin</label><br /> 
                        <input required type="radio" name="quiz1" id="unknown" value="unknown" /><label htmlFor="unknown">I DON'T KNOW!!!</label><br />
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
            <section className="question2">
                <h1>Question 2: Which of the follow describes a perfect afternoon for you?</h1>
                <div className="answers">
                    <form className="form2" onSubmit={props.answerQuestion2}>
                        <input required type="radio" name="quiz2" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">Studying of course!</label><br />
                        <input required type="radio" name="quiz2" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Setting up an elaborate prank on my enemy.</label><br /> 
                        <input required type="radio" name="quiz2" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Fighting dragons or three-headed dogs.</label><br />
                        <input required type="radio" name="quiz2" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">I just hope I make it to the afternoon.</label><br /> 
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
            {/* Left off here... need to change questions and values for 3-6 and update state accordingly */}
            <section className="question3">
                <h1>Question 3: Who is the most powerful wizard of all time?</h1>
                <div className="answers">
                    <form className="form3" onSubmit={props.answerQuestion3}>
                        <input required type="radio" name="quiz3" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">Cho Chang!</label><br />
                        <input required type="radio" name="quiz3" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Voldemort!</label><br /> 
                        <input required type="radio" name="quiz3" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Dumbledore!</label><br />
                        <input required type="radio" name="quiz3" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">Pomona Sprout!</label><br /> 
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
            <section className="question4">
                <h1>Question 4: How do you usually resolve conflict?</h1>
                <div className="answers">
                    <form className="form4" onSubmit={props.answerQuestion4}>
                        <input required type="radio" name="quiz4" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">Intellectual Reasoning.</label><br />
                        <input required type="radio" name="quiz4" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">I'm awesome so there is never conflict in my life.</label><br />
                        <input required type="radio" name="quiz4" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Sectumsempra.</label><br /> 
                        <input required type="radio" name="quiz4" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">I run away.</label><br /> 
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
            <section className="question5">
                <h1>Question 5: What do you think your favorite subject will be?</h1>
                <div className="answers">
                    <form className="form5" onSubmit={props.answerQuestion5}>
                        <input required type="radio" name="quiz5" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">I enjoy sleeping more then class.</label><br />
                        <input required type="radio" name="quiz5" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">History of Magic.</label><br />
                        <input required type="radio" name="quiz5" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Dueling lessons.</label><br /> 
                        <input required type="radio" name="quiz5" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Defense against the dark arts.</label><br />
                        <button type="Submit" className="next-question">Next Question!</button>
                    </form>
                </div>
            </section>
            <section className="question6">
                <h1>Question 6: Yes yes well done Slytherin, well done, HOWEVER... which recent event should be taken into account?</h1>
                <div className="answers">
                    <form className="form6" onSubmit={props.answerQuestion6}>
                        <input required type="radio" name="quiz6" id="hufflepuff" value="hufflepuff" /><label htmlFor="hufflepuff">I literally don't even know what this means.</label><br /> 
                        <input required type="radio" name="quiz6" id="slytherin" value="slytherin" /><label htmlFor="slytherin">Nothing needs to be taken into account...</label><br /> 
                        <input required type="radio" name="quiz6" id="gryffindor" value="gryffindor" /><label htmlFor="gryffindor">Uh, we stopped Voldemort guys...</label><br />
                        <input required type="radio" name="quiz6" id="ravenclaw" value="ravenclaw" /><label htmlFor="ravenclaw">I got an A on my finals.</label><br />
                        <button type="Submit" className="next-question">Get this hat off of me already!</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Quiz;
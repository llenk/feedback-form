import React, { Component } from 'react';
import { connect } from 'react-redux';

import StepHeader from '../../components/StepHeader/StepHeader';
import NumberForm from '../../components/NumberForm/NumberForm';

class StepOne extends Component {
    constructor() {
        super();
        this.state = {
            question: 'feeling',
            questionText: 'How are you feeling today?',
            nextPage: '/2', 
        };
    }

    render(props) {
        return (
            <div>
                <StepHeader />
                <NumberForm 
                    question={this.state.question}  
                    questionText={this.state.questionText}
                    history={this.props.history}
                    nextPage={this.state.nextPage}
                />
            </div>
        );
    }
}

export default connect()(StepOne);
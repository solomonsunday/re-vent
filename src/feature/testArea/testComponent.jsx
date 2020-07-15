import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '.testAction';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './testPlaceInput';


const mapState = (state) => ({
    data: state.test.data
})


const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const { data, incrementCounter, decrementCounter } = this.props;
        return (
            <div>
                <h1> Test Component</h1>
                <h3>The Answer is: {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'></Button>
                <Button onClick={decrementCounter} positive content='Decrement'></Button>
                <br/> <br/>
                <TestPlaceInput/>
            </div>
        );
    }
}

export default connect(mapState, actions)(TestComponent);
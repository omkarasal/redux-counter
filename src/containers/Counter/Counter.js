import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actions from '../../store/actions/index';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onAddition} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstraction} />
                <br/ >
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map(result => (
                            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrReducer.counter,
        storedResults: state.resReducer.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
        onAddition: () => dispatch(actions.addition(5)),
        onSubstraction: () => dispatch(actions.substraction(5)),
        onStoreResult: (result) => dispatch(actions.storeResult(result)),
        onDeleteResult: (resultElemId) => dispatch(actions.deleteResult(resultElemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
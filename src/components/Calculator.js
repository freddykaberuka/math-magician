import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

    handleEvent = (e) => {
      this.setState((prev) => calculate({
        total: prev.total,
        next: prev.next,
        operation: prev.operation,
      }, e.target.value));
    }

    render() {
      const { total, next, operation } = this.state;
      return (
        <div className="main-calculator">
          <div className="calculator-wrap">
            <div className="calculator-result">
              {total || ''}
              {operation || ''}
              {next || ''}
            </div>
            <div className="operation-container">
              <div className="calculator-upper">
                <div className="calculator-number">
                  <button type="button" alt="" onClick={this.handleEvent} value="AC">AC</button>
                  <button type="button" alt="" onClick={this.handleEvent} value="+">+/-</button>
                  <button type="button" alt="" onClick={this.handleEvent} value="%">%</button>
                </div>
                <div className="calculator-lower">
                  <div className="calculator-number">
                    <button type="button" alt="" onClick={this.handleEvent} value="7">7</button>
                    <button type="button" alt="" onClick={this.handleEvent} value="8">8</button>
                    <button type="button" alt="" onClick={this.handleEvent} value="9">9</button>
                  </div>
                  <div className="calculator-number">
                    <button type="button" alt="" onClick={this.handleEvent} value="4">4</button>
                    <button type="button" alt="" onClick={this.handleEvent} value="5">5</button>
                    <button type="button" alt="" onClick={this.handleEvent} value="6">6</button>
                  </div>
                  <div className="calculator-number">
                    <button type="button" alt="" onClick={this.handleEvent} value="1">1</button>
                    <button type="button" alt="" onClick={this.handleEvent} value="2">2</button>
                    <button type="button" alt="" onClick={this.handleEvent} value="3">3</button>
                  </div>
                  <div className="calculator-zero">
                    <button type="button" alt="" onClick={this.handleEvent} value="0">0</button>
                    <button type="button" alt="" onClick={this.handleEvent} value=".">.</button>
                  </div>
                </div>
              </div>
              <div className="calculator-operation">
                <button type="button" alt="" onClick={this.handleEvent} value="÷">÷</button>
                <button type="button" alt="" onClick={this.handleEvent} value="x">x</button>
                <button type="button" alt="" onClick={this.handleEvent} value="-">-</button>
                <button type="button" alt="" onClick={this.handleEvent} value="+">+</button>
                <button type="button" alt="" onClick={this.handleEvent} value="=">=</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default Calculator;

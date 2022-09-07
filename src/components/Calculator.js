import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-calculator">
        <div className="calculator-wrap">
          <div className="calculator-result">
            0
          </div>
          <div className="operation-container">
            <div className="calculator-upper">
              <div className="calculator-number">
                <button type="button" alt="">AC</button>
                <button type="button" alt="">+/-</button>
                <button type="button" alt="">%</button>
              </div>
              <div className="calculator-lower">
                <div className="calculator-number">
                  <button type="button" alt="">7</button>
                  <button type="button" alt="">8</button>
                  <button type="button" alt="">9</button>
                </div>
                <div className="calculator-number">
                  <button type="button" alt="">4</button>
                  <button type="button" alt="">5</button>
                  <button type="button" alt="">6</button>
                </div>
                <div className="calculator-number">
                  <button type="button" alt="">1</button>
                  <button type="button" alt="">2</button>
                  <button type="button" alt="">3</button>
                </div>
                <div className="calculator-zero">
                  <button type="button" alt="">0</button>
                  <button type="button" alt="">.</button>
                </div>
              </div>
            </div>
            <div className="calculator-operation">
              <button type="button" alt="">÷</button>
              <button type="button" alt="">x</button>
              <button type="button" alt="">-</button>
              <button type="button" alt="">+</button>
              <button type="button" alt="">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;

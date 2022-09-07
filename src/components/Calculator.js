/* eslint-disable */
import React, { Component } from 'react'

class Calculator extends Component {
  render() {
    return (
      <div className='main-calculator'>
          <div className="calculator-wrap">
              <div className="calculator-result">
                  0
              </div>
              <div className="operation-container">
              <div className="calculator-upper">
              <div className="calculator-number">
                  <button>AC</button>
                  <button>+/-</button>
                  <button>%</button>
              </div>
              <div className="calculator-lower">
                  <div className="calculator-number">
                      <button>7</button>
                      <button>8</button>
                      <button>9</button>
                  </div>
                  <div className="calculator-number">
                      <button>4</button>
                      <button>5</button>
                      <button>6</button>
                  </div>
                  <div className="calculator-number">
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                  </div>
                  <div className="calculator-zero">
                      <button>0</button>
                      <button>.</button>
                  </div>
              </div>
              </div>
              <div className="calculator-operation">
                  <button>÷</button>
                  <button>x</button>
                  <button>-</button>
                  <button>+</button>
                  <button>=</button>
              </div>
              </div>
          </div>
      </div>
    );
  }
}
export default Calculator;

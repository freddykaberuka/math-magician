import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h3>Welcome to Our Page!</h3>
      <p>
        Using a calculator can be extremely helpful
        but only if you know its particular
        conventions. While there are different types
        out there many of the features are the same.
        {' '}

      </p>
      <p>
        This tutorial will be of most benefit if you
        have your calculator at hand as you follow
        along.
      </p>
      <h3>Getting to Know Your Calculator</h3>
      <p>
        Look for the number pad and the four basic
        operations, multiplication
        {' '}
        <span>×</span>
        {' '}
        addition
        {' '}
        <span>+</span>
        {' '}
        subtraction
        {' '}
        <span>-</span>
        {' '}
        and division
        {' '}
        <span>÷</span>
        {' '}
        .
      </p>
      <p>
        To perform a calculation, make the necessary
        keystrokes and then hit
        {' '}
        <span>ENTER.</span>
        {' '}
        ◦ For example, key
        {' '}
        <span>4 ÷ 2 ENTER</span>
        {' '}
        . The calculator should
        show the answer we expect,
        {' '}
        <span>2</span>
        {' '}
        .
      </p>
      <p>
        Try some small calculations, like 2 + 3 and
        4 × 5, and take note of the following:
        ◦ Is the input still showing on the screen after I hit ENTER?
        ◦ Can I scroll back through previous inputs using arrow
        keys?
        ◦ The answers to these questions will depend on what
        type of calculator you have.
      </p>
    </div>
  );
}

export default Home;

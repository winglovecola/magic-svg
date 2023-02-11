// Constructor Arithmetic is imported.

//MUST install babel for Jest to work: npm install --save-dev babel-jest @babel/core @babel/preset-env
import { Circle, Rectangle, Triangle } from './svg.js';
//const Circle = require('./svg.js');


// A testing suite for Circle is created.
describe('Circle', () => {
  // A test is created to check if render of Circle has the correct output
  describe('render', () => {
    it('Render circle svg element and output the correct attributes accordingly', () => {
      
      const shape = new Circle("blue", 150, 100, 80);

      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" stroke="black" stroke-width="1" fill="blue" />');
    });
  });
});


// A testing suite for Rectangle is created.
describe('Rectangle', () => {
    // A test is created to check if render of Rectangle has the correct output
    describe('render', () => {
      it('Render rectangle svg element and output the correct attributes accordingly', () => {
        
        const shape = new Rectangle("blue", 10, 10, 300, 200, "black", 1);

        expect(shape.render()).toEqual('<rect x="10" y="10" width="300" height="200" stroke="black" stroke-width="1" fill="blue" />');
      });
    });
  });
  

// A testing suite for Rectangle is created.
describe('Triangle', () => {
    // A test is created to check if render of Rectangle has the correct output
    describe('render', () => {
      it('Render triangle svg element and output the correct attributes accordingly', () => {
        
        const shape = new Triangle("blue", "150, 18 244, 182 56, 182", "black", 1);

        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" stroke="black" stroke-width="1" fill="blue" />');
      });
    });
  });
  
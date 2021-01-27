// linking react
import React from 'react';

// linking react testing library
import { render, cleanup } from '@testing-library/react';

// linking jest dom package
import '@testing-library/jest-dom/extend-expect';

// linking about component 
import About from '..';

// cleaning up the enviroment
afterEach(cleanup);

// declare the component thats being tested
describe('About component', () => {
    // First test 
    it('renders', () => {
        render(<About />);
    });

    // Second test 
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
      })
  })
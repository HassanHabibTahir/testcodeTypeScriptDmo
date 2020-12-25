// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders Hassaan', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hassaan/i);
//   expect(linkElement).toBeInTheDocument();
// });


// //test application
// //it is serach form the whole application


// test('test world in the document',()=>{
//   const renderElement = render(<App/>);

//   const ElementWorld = renderElement.getByText(/world/i)
//   expect(ElementWorld).toBeInTheDocument();

// })
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});
});
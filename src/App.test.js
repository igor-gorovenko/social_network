import React from "react";
import SocialApp from "./App";
import * as ReactDOM from "react-dom";

// test('renders learn react link', () => {
//     render(<SocialApp/>);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SocialApp/>, div)
    ReactDOM.unmountComponentAtNode(div)
});


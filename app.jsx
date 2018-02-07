import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class App extends React.Component {
    render() {
        const Title = styled.h1`
            color: red;
        `;

        return <Title>Hello from RST</Title>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

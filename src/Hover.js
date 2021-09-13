import React, { Component } from 'react';
import withProcess from './withProcess';

class Hover extends Component {


    render() {
        const { count, handleCount } = this.props
        return (
            <div>
                <h1 onMouseOver={handleCount}>hoveres {count} times</h1>s
            </div>
        );
    }
}

export default withProcess(Hover);
import React, { Component } from 'react';

const withProcess = (OriginalComponent) => {
    class NewComponent extends Component {
        state = {
            count: 0,
            handleCount: () => {
                this.setState({
                    count: this.state.count + 1
                })
            },

        }
        render() {
            const { count, handleCount } = this.state
            return <OriginalComponent count={count} handleCount={handleCount} />
        }
    }

    return NewComponent;
};

export default withProcess;
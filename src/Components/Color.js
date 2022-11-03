import React from 'react';

/* NOTE: Extension until Wednesday evening */
const Color = () => {
    super(props)

    return (
        <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
    );
}

export default Color;

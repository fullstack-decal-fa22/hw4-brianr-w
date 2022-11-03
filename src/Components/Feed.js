import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';
import { render } from '@testing-library/react';

const Feed = () => {
    const [block1, block2] = React.useState(true);
    block1.map(Block);
    block2.map(Block);

    const posts = Feed.useState(0);

    return (
        <div>
            <Menu></Menu>
            {render()}
            {posts}
        </div>
    );
}

export default Feed;
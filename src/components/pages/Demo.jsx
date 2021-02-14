import React, { useState } from 'react'
import { Title, Wrapper } from '../styles/ButtonStyles';

const Demo = ({ name, wrapperAtt }) => {

    console.log(wrapperAtt);

    return (
        <Wrapper background={wrapperAtt} >
            <h1>
                {name}
            </h1>
            <button >
                Change
            </button>
        </Wrapper>
    )
}

export default Demo;
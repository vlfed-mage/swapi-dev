import React from "react";

const withChildren = (Parent, fn) => {
    return (props) => (
        <Parent { ...props }>
            { fn }
        </Parent>
    )
}

export {
    withChildren
};
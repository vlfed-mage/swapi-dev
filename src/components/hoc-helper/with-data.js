import React from "react";

import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

import { useData } from "../hooks";

const withData = ( View, name ) => {
    return ( props ) => {
        const { selectedItemId } = props,
        { loading, error, data } = useData(name, selectedItemId);

        return (
            loading
                ? <LoaderIndicator />
                : error
                    ? <ErrorIndicator />
                    : <View { ...props } data={ data } />
        )
    };
};

export {
    withData
};
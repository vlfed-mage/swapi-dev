import React, { useState, useEffect, useContext, useMemo } from "react";

import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

import ApiServicesContext from "../sw-service-context";

const withData = ( View, name, withId = false ) => {
    return ( props ) => {

        let cancelledReq = false;
        const { getItem, getCollection } = useContext(ApiServicesContext),

        [ data, setData ] = useState(null),
        [ loading, setLoading ] = useState(true),
        [ error, setError ] = useState(false),

        { selectedItemId } = props,

        getData = () => {
            return withId
                ? getItem(name, selectedItemId)
                : getCollection(name);
        },

        onDataLoaded = (data) => {
            if (!cancelledReq) {
                setData(data);
                setLoading(false);
            }
        },

        onDataError = () => {
            setLoading(false);
            setError(true);
        },

        onDataReset = () => {
            setLoading(true);
            setError(false);
        };

        useEffect(() => {
            onDataReset();
            getData()
                .then( onDataLoaded )
                .catch( onDataError );

            return () => {
                cancelledReq = true;
            }
        }, [selectedItemId]);

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
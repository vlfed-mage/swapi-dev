import { useEffect, useMemo, useState } from "react";

const useRequest = (request) => {

    let cancelledReq = false; // fot preventing race conditions

    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
    }), []),

    [ dataState, setDataState ] = useState(initialState),

    onDataLoaded = (data) => {
        if (!cancelledReq) {
            setDataState({
                data,
                loading: false,
                error: null
            });
        }
    },

    onDataError = (error) => {
        if (!cancelledReq) {
            setDataState({
                data: null,
                loading: false,
                error
            });
        }
    };

    useEffect(() => {
        setDataState(initialState);
        request()
            .then( onDataLoaded )
            .catch( onDataError );

        return () => {
            cancelledReq = true; // fot preventing race conditions
        }
    }, [ request, initialState ]);

    return dataState;
}

export {
    useRequest
};
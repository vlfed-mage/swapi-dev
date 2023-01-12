import { useCallback, useContext } from "react";

import { useRequest } from "./use-request-hook";
import ApiServicesContext from "../sw-service-context";

const useData = (name, id = null) => {
    const { getData } = useContext(ApiServicesContext),

    response = useCallback(
        () => getData(name, id),
        [ name, id ]
    );

    return useRequest(response);
};

export {
    useData
};
import { useCallback, useContext } from "react";

import { useRequest } from "./use-request-hook";
import ApiServicesContext from "../sw-service-context";

const useData = (name, id) => {
    const { getData } = useContext(ApiServicesContext),

    response = useCallback(
        () => getData(name, id),
        [id]
    );

    return useRequest(response);
};

export {
    useData
};
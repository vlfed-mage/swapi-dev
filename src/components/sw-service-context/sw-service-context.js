import { createContext } from "react";

const {
    Provider : ApiServiceProvider,
    Consumer : ApiServiceConsumer
} = createContext(undefined, undefined);

export {
    ApiServiceProvider,
    ApiServiceConsumer
}
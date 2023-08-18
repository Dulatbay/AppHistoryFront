declare global {
    export type Brand<K, T> = K & { [_brand]: T }
    export type Id = number

    declare type RootState = import('./../src/a_app/appStore').RootState
    declare type AppDispatch = import('./../src/a_app/appStore').AppDispatch
}
export {}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export type FluxStandardAction =  {
    type: string | symbol | any,
    payload?: any,
    error?: boolean | any,
    meta?: any
}
export type FluxStandardActionCreator = (payload?: any) => FluxStandardAction

export type Dependencies = {
    getJSON: (url: string) => Observable
}
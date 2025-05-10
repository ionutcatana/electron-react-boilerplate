export interface ICustom {
    value: string
}

export interface ICustomApi {
    setTitle: any
}

// export interface IRequests {
//     sendRequest
// }

declare global {
    interface Window {
        customValue: ICustom,
        electronApi: ICustomApi

    }
}
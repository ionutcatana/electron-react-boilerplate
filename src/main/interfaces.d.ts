export interface ICustom {
    value: string
}

export interface ICustomApi {
    setTitle: any
}

declare global {
    interface Window {
        customValue: ICustom,
        electronApi: ICustomApi
    }
}
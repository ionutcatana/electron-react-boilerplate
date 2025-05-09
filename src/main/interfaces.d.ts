export interface ICustom {
    value: number
}

declare global {
    interface Window {
        customValue: ICustom 
    }
}
import { net } from "electron"

export default function handleApiRequest(method: string, path: string, isJson: boolean, message: string | object): void {
    const request = net.request({
        method,
        protocol: 'http:',
        hostname: 'localhost:3000',
        path
    })
}
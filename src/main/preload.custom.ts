import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('customValue', {
    value: 13
});
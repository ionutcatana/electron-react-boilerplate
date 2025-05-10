import { contextBridge, ipcRenderer } from 'electron';

//
contextBridge.exposeInMainWorld('customValue', {
    value: 'click some buttons'
});

contextBridge.exposeInMainWorld('electronApi', {
    setTitle: (title: string) => ipcRenderer.send('set-title', title)
})
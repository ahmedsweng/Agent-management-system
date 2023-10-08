import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getProj: () => ipcRenderer.invoke("getProjet"),
  getAllProj: () => ipcRenderer.invoke("getAllProjet"),
  addProj: (data) => ipcRenderer.invoke("addProjet", { data }),
  getBien: () => ipcRenderer.invoke("getBien"),
  getAllBien: () => ipcRenderer.invoke("getAllBien"),
  addBien: (data) => ipcRenderer.invoke("addBien", { data }),
  getClient: () => ipcRenderer.invoke("getClient"),
  getAllClient: () => ipcRenderer.invoke("getAllClient"),
  addClient: (data) => ipcRenderer.invoke("addClient", { data }),
  getRes: (data) => ipcRenderer.invoke("getRes", { data }),
  addRes: (data) => ipcRenderer.invoke("addRes", { data }),
  search: () =>
    ipcRenderer.on("search", () => {
      console.log("search working");
      return true;
    }),
});

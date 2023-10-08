declare global {
  interface Window {
    electronAPI: {
      getProj: any;
      getAllProj: any;
      addProj: any;
      getBien: any;
      getAllBien: any;
      addBien: any;
      getClient: any;
      getAllClient: any;
      addClient: any;
      getRes: any;
      addRes: any;
    };
  }
}
export default global;

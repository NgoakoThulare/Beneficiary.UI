export class Endpoints {
    listEndpoint: string = "https://localhost:44389/api/Beneficiary/List";
    createEndpoint: string = "https://localhost:44389/api/Beneficiary/Create";
    viewEndpoint: string = "https://localhost:44389/api/Beneficiary/View/";
    editEndpoint: string = "https://localhost:44389/api/Beneficiary/Edit/";
    deleteEndpoint: string = "https://localhost:44389/api/Beneficiary/Delete/";

    constructor(listUrl: string, createUrl: string, viewUrl: string, editUrl: string, deleteUrl: string) {
        this.listEndpoint = listUrl;
        this.createEndpoint = createUrl;
        this.viewEndpoint = viewUrl;
        this.editEndpoint = editUrl;
        this.deleteEndpoint = deleteUrl;
    }
}
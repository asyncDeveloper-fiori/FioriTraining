sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("tests.controller.View1", {
        onInit() {

            var ip = this.getView().byId('inputField');
            ip.bindProperty("value" , "productDataModel>/ProductCollection/0/ProductId")


        },
        onRowClick (oEvent){
            var sPath = oEvent.getSource().getBindingContext("productDataModel").getPath();
            if(!this.oDialog){
                this.loadFragment({
                    name:"tests.fragments.Dialog",
                }).then(function(aDialog){
                    this.oDialog = aDialog;
                    this.oDialog.bindElement({
                        path:sPath,
                        model:"productDataModel"
                    })
                    this.oDialog.open();
                }.bind(this))
            }else{
                this.oDialog.open();
            }
        }
    });
});
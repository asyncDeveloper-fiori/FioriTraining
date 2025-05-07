sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("tests.controller.App", {
        onInit() {
          if(sap.ui.getCore().getConfiguration().getLanguage()==='en-GB'){
            var oModel = this.getOwnerComponent().getModel("i18n_hi");
            this.getOwnerComponent().setModel(oModel , "i18n");
          }
        }
    });
  });
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function(Controller,MessageToast, JSONModel) {
   "use strict";
   

   return Controller.extend("sapui5.walkthrough.controller.App", {
      onInit: function() {
         // set the data model on the view
         var oData = {
            recipient: {
               name: "UI5"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },
      onShowHello: function(){
         //Show a native or vanilla JS alert
         MessageToast.show("Hello There!")
      }

   });
});
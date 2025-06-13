sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function(Controller,MessageToast) {
   "use strict";
   

   return Controller.extend("sapui5.walkthrough.controller.App", {
      onShowHello: function() {
         // show a native or vanilla JavaScript alert
         MessageToast.show("Hello there!")
      }
   });
});
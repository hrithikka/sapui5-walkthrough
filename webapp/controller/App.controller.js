sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function(Controller) {
   "use strict";

   return Controller.extend("sapui5.walkthrough.controller.App", {
      onShowHello: function() {
         // show a native or vanilla JavaScript alert
         alert("Hello World");
      }
   });
});
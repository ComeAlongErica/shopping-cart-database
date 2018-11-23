"use strict";
const mainComp = {
  templateUrl: "app/app.html",
  controller: ["MainService", function(MainService) {
    const vm = this;

    // promise on requests
    function updateList(result) {
      vm.listofProducts = result.data;
    }

    // gets info on load
    MainService.getProducts().then(updateList);

    //add phrase
    vm.addProduct = (newProduct) => {
      MainService.postProducts(newProduct).then(updateList);
    };

    vm.deleteProduct = (id) => {
      MainService.deleteProducts(id).then(updateList);
    };

    vm.updateProduct = (editedProduct) => {
      MainService.updateProducts(editedProduct).then(updateList);
    };

  }]
};

angular
  .module("App")
  .component("mainComp", mainComp);
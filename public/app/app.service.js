"use strict";
function MainService($http) {
  const self = this;

  self.getProducts = () => {
    return $http({
      url: "/products",
      method: "GET"
    });
  };

  self.postProducts = (newProduct) => {
    return $http({
      url: "/products",
      method: "POST",
      data: newProduct
    });
  };

  self.deleteProducts = (id) => {
    console.log("clicked");
    console.log(id);
    return $http({
      url: `/products/${id}`,
      method: "DELETE"
    });
  };

  self.updateProducts = (editedProduct) => {
    return $http({
      url: `/products/${editedProduct.id}`,
      method: "PUT",
      data: editedProduct
    });
  };
}

angular
  .module("App")
  .service("MainService", MainService);
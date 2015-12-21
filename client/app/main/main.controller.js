'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.awesomeCustomers = [];

    $http.get('/api/customers').then(response => {
      this.awesomeCustomers = response.data;
      socket.syncUpdates('customer', this.awesomeCustomers);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('customer');
    });
  }

  addCustomer() {
      this.$http.post('/api/customers', 
	{ customerNumber: this.newCustomerNumber,
          name: this.newCustomerName,
          email: this.newCustomerEmail,
          phone: this.newCustomerPhone
	  });
  }

  deleteCustomer(customer) {
    this.$http.delete('/api/customers/' + customer._id);
  }
}

angular.module('clientApp')
  .controller('MainController', MainController);

})();

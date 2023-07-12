// login component
angular.module('gitsonApp').component('login', {
    templateUrl: 'login.template.html',
    controller: function LoginController($http) {
      this.username = '';
      this.password = '';
  
      this.submitForm = function() {
        const credentials = {
          username: this.username,
          password: this.password
        };
  
        $http.post('/api/login', credentials)
          .then(function(response) {
            // Handle successful login
            console.log(response.data);
          })
          .catch(function(error) {
            // Handle login error
            console.error(error);
          });
      };
    }
  });
  

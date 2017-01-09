angular.module('FingerPrintModule', ['ionic', 'ionic.native'])
.run(function($ionicPlatform){
  $ionicPlatform.registerBackButtonAction(function (event) {
                    event.preventDefault();
                  }, 100);
})
.controller('MyCtrl',function ($scope, FingerPrintAuthService, $state, $cordovaToast) {
  $scope.authenticate = function () {
    var encryptConfig = {
        clientId: "myAppName",
        cipherMode: 'encrypt',
        username: "currentUser",
        password: "currentUserPassword",
        disableBackup:true,
        userAuthRequired:false,
        dialogTitle:'Swipe the Finger to get the insurance details'
    };
    FingerPrintAuthService.autherize(encryptConfig).then(function(result){
      console.log(JSON.stringify(result));
      if(result.withFingerprint){
        $state.go("authFP");
      }else if (result.withBackup) {
        $scope.go("authPwd");
      }
    },
    function (error) {
      $cordovaToast.show(error,'long','bottom').subscribe();
      console.log(error);
    });
  };
});

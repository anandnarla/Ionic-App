angular.module('FingerPrintModule', ['ionic', 'ionic.native'])

.controller('MyCtrl',function ($scope, FingerPrintAuthService, $window, $cordovaToast) {
  $scope.authenticate = function () {
    var encryptConfig = {
        clientId: "myAppName",
        // cipherMode: 'decrypt',
        cipherMode: 'encrypt',
        username: "currentUser",
        password: "currentUserPassword",
        disableBackup:true,
        // token:'YzMfo1k/3z8INCBtXAnULMYg/id1PwMrukb19kGlfHc=',
        userAuthRequired:false,
        dialogTitle:'Swipe the Finger to get the details'
    };
    FingerPrintAuthService.autherize(encryptConfig).then(function(result){
      console.log(JSON.stringify(result));
      if(result.withFingerprint){
        $window.location.href = '#/authFP';
        console.log("with fp");
      }else if (result.withBackup) {
        $window.location.href = "#/authPwd"
        console.log("with backup");
      }
    },
    function (error) {
      $cordovaToast.show(error,'long','bottom').subscribe();
      console.log(error);
    })
  };
});

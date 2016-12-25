
angular.module('FingerPrintModule')
.service('FingerPrintAuthService', FingerPrintAuthService);

function FingerPrintAuthService($cordovaAndroidFingerprintAuth, $cordovaToast, $location, $q) {
  var service = this;
  service.autherize=function (configObject) {
    var defer = $q.defer();
    $cordovaAndroidFingerprintAuth.isAvailable().then(function(result) {
      if(result.isAvailable){
        defer.resolve($cordovaAndroidFingerprintAuth.show(configObject).then(function(result){
            return result;
         }));
      }
      else{
        defer.reject("FP is unavailable");
      }
    });
    return defer.promise;
  };
}

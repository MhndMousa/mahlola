var auth = firebase.auth()
var mac = firebase.auth().currentUser;
// var newPassword = getASecureRandomPassword();
var newPassword = "adfadsfadsfdsfaafd"
var credential

$(document).ready(function(){
  $('#password_update').click(function(){
    console.log("click");
    auth.onAuthStateChanged(function(user){

      user.reauthenticate(credential).then(function() {
        firebase.database().ref(`updatePassword/credential`).push(credential)
      }, function(error) {
        window.location.reaload()
      });

      user.updatePassword(newPassword).then(function() {
        firebase.database().ref(`updatePassword`).push(newPassword)
      }, function(error) {
        alert(error)
      });
    })
  })
})

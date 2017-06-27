/*
This page includes anything that is shared between all
pages. Both jQuery and javascript are be used here
*/

var config = {
  apiKey: "AIzaSyASvCbX5tmzjv98xhgXpjMh0b2-fGaEygA",
  authDomain: "mahlola-107ef.firebaseapp.com",
  databaseURL: "https://mahlola-107ef.firebaseio.com",
  projectId: "mahlola-107ef",
  storageBucket: "mahlola-107ef.appspot.com",
  messagingSenderId: "596370494983"
};
firebase.initializeApp(config);

// Global colors
var colors = {
  text : "grey-text ",
  primary : "amber darken-3 ",
  textAccent : "text-lighten-1 ",
  textAccentHeader : "text-lighten-4 "
}

// Formats Header
function getNav(){

  $('mheader').append(
    $('<nav>', {class:"nav-extended " + colors.primary}).append([
      $('<div>',{class: "nav-wrapper "}).append(
        // Logo Picture
        $('<a>',{href: "#", class: "center brand-logo"}).html("Logo"),
      )
    ])
  );

}

// Formats tabs bellow the nav
function getTabs() {
  $('.nav-extended').append(
    $('<div>',{class: "nav-content arabic z-depth-1"}).append(
      $('<ul>',{class: "tabs tabs-transparent"}).append([
        $('<li>',{class: "tab"}).append($('<a>',{href: "#test"}).html("اعمال منزلية")),
        $('<li>',{class: "tab"}).append($('<a>',{href: "#test2"}).html("اعمال بطريق")),
        $('<li>',{class: "tab disabled"}).append($('<a>',{href: "#"}).html("اعمال هندسية")),
        $('<li>',{class: "tab"}).append($('<a>',{href: "#"}).html("اعمال الكترونية")),
        $('<li>',{class: "tab"}).append($('<a>',{href: "#"}).html("اعمال 2")),
        $('<li>',{class: "tab"}).append($('<a>',{href: "#"}).html("اعمال 3")),
        $('<li>',{class: "tab"}).append($('<a>',{href: "#"}).html("اعمال 4")),
        $('<li>',{class: "tab"}).append($('<a>',{href: "#"}).html("اعمال 5")),

      ])
    )
  )
}

// Dectects weather a user logged in or not and formats side nav accordingly
function getSideNav() {

  // Getnav() and append a side nav inside of it
  $('.nav-wrapper').append(
    $('<a>',{href: "#", "data-activates": "slide-out-menu",id:"slide-out-button", class: "button-collapse show-on-large"}).append(
      $('<i>', {class: "material-icons"}).html("menu")
    ),
    // User Side menu
    $('<ul>',{ id: "slide-out-menu", class: "side-nav "}).append(
      $('<li>').append(
        $('<div>', {class:"userView"}).append([
          $('<div>', {class:"background", id: "side-nav-background"}).append($('<img>' ,{src: "https://4.bp.blogspot.com/--NkLOnsQtMc/Voe2VuTrHgI/AAAAAAAAxrE/qV7WcTpRxik/s1600/Materail_wallpaper2.png"})),
          $('<a>').append($('<img>', {class: "circle", id:"user_photo" ,src:"https://www.nct.org.au/wp-content/themes/Nature%20Conservation%20Trust/img/user_image_placeholder.jpg"})),
          $('<a>').append($('<span>',{class: "white-text name", id:"user_name"}).html("no display name")),
          $('<a>').append($('<span>',{class: "white-text email", id:"user_email" }).html("no email")),
        ]))
      )
    )

  firebase.auth().onAuthStateChanged(function(user){
    //if the user is logged in, create a side nav with his info
    if (user){
      var ref = firebase.database().ref(`users/${user.uid}`)

      var value = ref.on("value",function(snap){
        $("#user_photo").attr("src",snap.val().photoURL)
        $("#user_email").html(snap.val().email);
        $("#user_name").html(snap.val().displayName);
      })

      // Menu Button
      $('#slide-out-menu').append([
        $('<li>').append($('<a>',{ href: "post.html", class: "waves-effect arabic"}).html("اعلن الان").append($('<i>',{class:"material-icons"}).html("get_app"))),
        $('<li>').append($('<a>',{ href: "settings.html", class: "waves-effect arabic"}).html("الاعدادات").append($('<i>',{class:"material-icons"}).html("settings"))),
        $('<li>',{class: "divider"}),
        $('<li>').append($('<a>',{ id:"logout_button", onclick:"firebase.auth().signOut(); window.location.reload();", class: "waves-effect red-text text-darken-2 arabic"}).html("تسجيل خروج"))
      ])
      getFloatingButton()
    }
    //if the user is not logged in, create another side nav with no iformation
    else{

      // Delete side nav and create a login button
      $('#slide-out-menu').remove()
      $('#slide-out-button').remove()
      getLoginButton()
    }
    animationActivate()
  })
}

// Formats User drop down menu
function getLoginButton(){
  /*
  Drop Down
  */
  // User login button
  $('.nav-wrapper').append(
    $('<ul/>',{class: "right"}).append(
      $('<li/>').append($('<a/>',{ href: "login.html", class: "dropdown-button "+ colors.text + colors.textAccentHeader}).html("تسجيل الدخول"))
    )
  )
}

// Formats floating Button
function getFloatingButton() {
  $('body').append(
    $('<div>',{class: "fixed-action-btn toolbar"}).append([
      $('<a>', {class: "btn-floating btn-large blue-grey hoverable"}).append(
        $('<i>', {class: "material-icons waves-effect waves-light"}).html('publish')
        // $('<i>').html("اعلن")
      ),
      $('<ul>').append([
        $('<li>', {class: "waves-light waves-effect"}).append(
          // $('<a>').append($('<i>', {class:"material-icons"}).html("ابحث عن احد"))
          $('<a>').html("اعلن عن عمل")
        ),
        $('<li>', {class: "waves-light waves-effect"}).append(
          $('<a>').html("اعلن عن خبرة")
          // $('<a>').append($('<i>', {class:"material-icons"}).html("احد يبحث عنك"))
        )
      ])
    ])
  )
}

// Formats footer
function getFooter(){
  $('mFooter').append(
    $('<footer>',{ class : "page-footer " + "grey darken-2"} ).append([
      $('<div>', { class: "container" }).append(
        $('<div>', {class : "row"}).append([
          $('<div>', {class: "col l6 s12"}).append([
            $('<h5>', {class:  colors.text + colors.textAccentHeader}).html("Footer Content"),
            $('<p>', {class:  colors.text + colors.textAccent }).html("You can use rows and columns here to organize your footer content")
          ]),
          $('<div>', {class: "col l4 offset-l2 s12"}).append([
            $('<h5>', {class:  colors.text +colors.textAccentHeader}).html("Links"),
            $('<ul>').append([
              $('<li>').append($('<a>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 1")),
              $('<li>').append($('<a>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 2")),
              $('<li>').append($('<a>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 3")),
              $('<li>').append($('<a>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 4"))
            ])
          ])
        ])
      ),
      $('<div>', {class: "footer-copyright"}).append(
        $('<div>', {class: "container " + colors.text + colors.textAccentHeader}).html("© 2014 Copyright Text").append(
          $('<a>', {class: "right " + colors.text + colors.textAccentHeader}).html("More Links")
        )
      )
    ])
  )
}

// Start the all animation on page
function animationActivate() {
  $(".dropdown-button").dropdown({
    belowOrigin: true, // Displays dropdown below the button
  });
  $("#slide-out-button").sideNav({
    menuWidth: 330,
    draggable: true,
    closeOnClick: true,
  });
  $('ul.tabs').tabs();

}

// Changes the arabic font to Noto Kufi
function arabify(){
  $('body').addClass("arabic")
}

function initApp(){
 // Start the app
  arabify()
  getNav()
  getFooter()
  getTabs()
  // getDropDown()
  getSideNav()
  // animationActivate()


  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      console.log(firebase.auth().currentUser);
    }
  })

  // Activate LogOut
  $("#logout_button").click(function(){
    firebase.auth().signOut();
    window.location.reload();
  });
}

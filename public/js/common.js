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
  primary : "orange darken-4",
  textAccent : "text-lighten-1 ",
  textAccentHeader : "text-lighten-4 "
}


// Formats Header
function getHeader(){
  $('mheader').append(
    $('<nav/>').append(
      $('<div/>',{"class": "nav-wrapper " + colors.primary}).append([
        // Logo Picture
        $('<a/>',{href: "#", class: "center brand-logo"}).html("Logo"),

        /*
        Menu
        */
        // Menu button
        $('<a/>',{href: "#", "data-activates": "slide-out-menu",id:"slide-out-button", class: "button-collapse show-on-large"}).append(
          $('<i/>', {class: "material-icons"}).html("menu")
        ),
        // TODO: Hide user menu for not logged in users
        // User mobile menu
        $('<ul/>',{ id: "slide-out-menu", class: " side-nav"}).append([
          $('<li/>').append(
            $('<div/>', {class:"userView"}).append([
            $('<div/>', {class:"background"}).append($('<img/>' ,{src: "http://oxygennacdn3.oxygenna.com/wp-content/uploads/2015/11/18.jpg"})),
            $('<a/>').append($('<img/>', {class: "circle", id:"user_photo" ,src:"https://cdn.dribbble.com/users/869811/screenshots/3105584/dribbble_shot_12_1x.png"})),
            $('<a/>').append($('<span/>',{class: "white-text name", id:"user_name"}).html("not mhnd")),
            $('<a/>').append($('<span/>',{class: "white-text email", id:"user_email" }).html("Muhannad Alnemer")),
          ])),
          $('<li/>').append($('<a/>',{ href: "https://www.google.com", class: "waves-effect "}).html("google")),
          $('<li/>').append($('<a/>',{ href: "https://www.yahoo.com", class: "waves-effect "}).html("yahoo")),
          $('<li/>').append($('<a/>',{ href: "https://www.facebook.com", class: "waves-effect "}).html("facebook"))
        ]),

        /*
        Drop Down
        */
        // User dropdown button
        $('<ul/>',{class: "right hide-on-med-and-down "}).append([
          $('<li/>').append($('<a/>',{ href: "#!", "data-activates": "dropdown1", class: "dropdown-button "+ colors.text + colors.textAccentHeader}).html($('<i/>', {class: "material-icons"}).html("account_circle")).append([
            // $('<a/>').append($('<img/>', {class: "circle" ,src:"https://cdn.dribbble.com/users/869811/screenshots/3105584/dribbble_shot_12_1x.png"})),
            // $('<i/>', {class: "material-icons right"}).html("arrow_drop_down")
          ]))
        ]),
        // User dropdown menu
        $('<ul/>',{ id: "dropdown1", class: "dropdown-content"}).append([
          // $('<li/>').append($('<a/>',{class: "red-text text-lighten-1" , id:"user_name"}).html("something")),
          $('<li/>',{class: "divider"}),
          $('<li/>').append($('<a/>',{class: "red-text text-lighten-1" , id:"logout_button"}).html("تسجيل خروج"))
        ])
      ])
    )
  );
}

// Formats footer
function getFooter(){
  $('mFooter').append(
    $('<footer/>',{ class : "page-footer " + "grey darken-2"} ).append([
      $('<div/>', { class: "container" }).append(
        $('<div/>', {class : "row"}).append([
          $('<div/>', {class: "col l6 s12"}).append([
            $('<h5/>', {class:  colors.text + colors.textAccentHeader}).html("Footer Content"),
            $('<p/>', {class:  colors.text + colors.textAccent }).html("You can use rows and columns here to organize your footer content")
          ]),
          $('<div/>', {class: "col l4 offset-l2 s12"}).append([
            $('<h5/>', {class:  colors.text +colors.textAccentHeader}).html("Links"),
            $('<ul>').append([
              $('<li/>').append($('<a/>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 1")),
              $('<li/>').append($('<a/>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 2")),
              $('<li/>').append($('<a/>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 3")),
              $('<li/>').append($('<a/>',{class: colors.text + colors.textAccent, href: "#!" }).html("link 4"))
            ])
          ])
        ])
      ),
      $('<div/>', {class: "footer-copyright"}).append(
        $('<div/>', {class: "container " + colors.text + colors.textAccentHeader}).html("© 2014 Copyright Text").append(
          $('<a>', {class: "right " + colors.text + colors.textAccentHeader}).html("More Links")
        )
      )
    ])
  )
}

function animationActivate() {
  $(".dropdown-button").dropdown({
    belowOrigin: true, // Displays dropdown below the button
  });
  $("#slide-out-button").sideNav({
    menuWidth: 330,
    draggable: true,
    closeOnClick: true,
  });
}

 // Start the app
function initApp() {
  getHeader()
  getFooter()
  animationActivate()

  // Pull user Data
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      console.log(firebase.auth().currentUser);
      $("#user_name").html(user.displayName);
      $("#user_photo").attr("src",user.photoURL)
      $("#user_email").html(user.email);
    }
  })

  // Activate LogOut
  $("#logout_button").click(function(){
    firebase.auth().signOut();
    window.location = window.location;
  });


}

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
  primary : "cyan darken-3 ",
  textAccent : "text-lighten-1 ",
  textAccentHeader : "text-lighten-4 "
}


// Formats Header
function getHeader(){
  $('header').append(
    $('<nav/>').append(
      $('<div/>',{"class": function(){return "nav-wrapper " + colors.primary}}).append([
        $('<a/>',{href: "www.google.com", class: "center brand-logo"}).html("Logo"),
        $('<a/>',{href: "#", "data-activates": "mobile-demo", class: "button-collapse"}).append(
          $('<i/>', {class: "material-icons", click:function(){$(".button-collapse").sideNav();}}).html("menu")
        ),
        $('<ul/>',{ id: "nav-mobile", class: "right hide-on-med-and-down "}).append([
          $('<li/>').append($('<a/>',{ href: "https://www.google.com", class: function(){return colors.text + colors.textAccentHeader}}).html("google")),
          $('<li/>').append($('<a/>',{ href: "https://www.yahoo.com", class: function(){return colors.text + colors.textAccentHeader} }).html("yahoo")),
          $('<li/>').append($('<a/>',{ href: "#!", "data-activates": "dropdown1", class: function(){return "dropdown-button " + colors.text + colors.textAccentHeader}}).html("facebook"))
        ]),
        $('<ul/>',{ id: "mobile-demo", class: function(){return "side-nav "+ colors.primary}}).append([
          $('<li/>').append($('<a/>',{ href: "https://www.google.com", class: function(){return colors.text + colors.textAccentHeader}}).html("google")),
          $('<li/>').append($('<a/>',{ href: "https://www.yahoo.com", class: function(){return colors.text + colors.textAccentHeader} }).html("yahoo")),
          $('<li/>').append($('<a/>',{ href: "https://www.facebook.com", class: function(){return colors.text + colors.textAccentHeader}}).html("facebook"))
        ]),
        $('<ul/>',{ id: "dropdown1", class: "dropdown-content "}).append([
          $('<li/>').append($('<a/>',{ href: "https://www.facebook.com", class: "red-text text-lighten-1"}).html("تسجيل خروج"))
        ])
      ])
    )
  );
}

// Formats footer
function getFooter(){
  $('blah').append(
    $('<footer/>',{ class : function(){return "page-footer " + colors.primary }} ).append([
      $('<div/>', { class: "container" }).append(
        $('<div/>', {class : "row"}).append([
          $('<div/>', {class: "col l6 s12"}).append([
            $('<h5/>', {class:  function(){return colors.text + colors.textAccentHeader}}).html("Footer Content"),
            $('<p/>', {class:  function(){return colors.text + colors.textAccent }}).html("You can use rows and columns here to organize your footer content")
          ]),
          $('<div/>', {class: "col l4 offset-l2 s12"}).append([
            $('<h5/>', {class:  function(){return colors.text +colors.textAccentHeader}}).html("Links"),
            $('<ul>').append([
              $('<li/>').append($('<a/>',{class: function(){return colors.text + colors.textAccent}, href: "#!" }).html("link 1")),
              $('<li/>').append($('<a/>',{class: function(){return colors.text + colors.textAccent}, href: "#!" }).html("link 2")),
              $('<li/>').append($('<a/>',{class: function(){return colors.text + colors.textAccent}, href: "#!" }).html("link 3")),
              $('<li/>').append($('<a/>',{class: function(){return colors.text + colors.textAccent}, href: "#!" }).html("link 4"))
            ])
          ])
        ])
      ),
      $('<div/>', {class: "footer-copyright"}).append(
        $('<div/>', {class: function(){return "container " + colors.text + colors.textAccentHeader}}).html("© 2014 Copyright Text").append(
          $('<a>', {class: function(){return "right " + colors.text + colors.textAccentHeader}}).html("More Links")
        )
      )
    ])
  )
}

function animActivate() {
  $(".dropdown-button").dropdown({
      inDuration: 300,
       outDuration: 225,
       constrainWidth: false, // Does not change width of dropdown to that of the activator
       hover: false, // Activate on hover
       gutter: 0, // Spacing from edge
       belowOrigin: true, // Displays dropdown below the button
       stopPropagation: true // Stops event propagation
     });

}

/*
This page includes anything that is shared between all
pages. Both jQuery and javascript are be used here
*/


// Logout for

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
var textColor = "grey-text ";
var primaryColor = "cyan darken-3 "
var textColorAccent = "text-lighten-1"
var textColorAccentHeaders= "text-lighten-4"


// Formats Header
function getHeader(){
  $('header').append(
    $('<nav/>').append(
      $('<div/>',{"class": function(){return "nav-wrapper " + primaryColor}}).append([
        $('<a/>',{href: "www.google.com", class: "brand-logo"}).html("Logo"),
        $('<a/>',{href: "#", "data-activates": "mobile-demo", class: "button-collapse"}).append(
          $('<i/>', {class: "material-icons", click:function(){$(".button-collapse").sideNav();}}).html("menu")
        ),
        $('<ul/>',{ id: "nav-mobile", class: "right hide-on-med-and-down "}).append([
          $('<li/>').append($('<a/>',{ href: "https://www.google.com", class: function(){return textColor + textColorAccentHeaders}}).html("google")),
          $('<li/>').append($('<a/>',{ href: "https://www.yahoo.com", class: function(){return textColor + textColorAccentHeaders} }).html("yahoo")),
          $('<li/>').append($('<a/>',{ href: "https://www.facebook.com", class: function(){return textColor + textColorAccentHeaders}}).html("facebook"))
        ]),
        $('<ul/>',{ id: "mobile-demo", class: function(){return "side-nav "+ primaryColor}}).append([
          $('<li/>').append($('<a/>',{ href: "https://www.google.com", class: function(){return textColor + textColorAccentHeaders}}).html("google")),
          $('<li/>').append($('<a/>',{ href: "https://www.yahoo.com", class: function(){return textColor + textColorAccentHeaders} }).html("yahoo")),
          $('<li/>').append($('<a/>',{ href: "https://www.facebook.com", class: function(){return textColor + textColorAccentHeaders}}).html("facebook"))
        ])
      ])
    )
  );
}

// Formats footer
function getFooter(){
  $('blah').append(
    $('<footer/>',{ class : function(){return "page-footer " + primaryColor }} ).append([
      $('<div/>', { class: "container" }).append(
        $('<div/>', {class : "row"}).append([
          $('<div/>', {class: "col l6 s12"}).append([
            $('<h5/>', {class:  function(){return textColor + textColorAccentHeaders}}).html("Footer Content"),
            $('<p/>', {class:  function(){return textColor + textColorAccent }}).html("You can use rows and columns here to organize your footer content")
          ]),
          $('<div/>', {class: "col l4 offset-l2 s12"}).append([
            $('<h5/>', {class:  function(){return textColor +textColorAccentHeaders}}).html("Links"),
            $('<ul>').append([
              $('<li/>').append($('<a/>',{class: function(){return textColor + textColorAccent}, href: "#!" }).html("link 1")),
              $('<li/>').append($('<a/>',{class: function(){return textColor + textColorAccent}, href: "#!" }).html("link 2")),
              $('<li/>').append($('<a/>',{class: function(){return textColor + textColorAccent}, href: "#!" }).html("link 3")),
              $('<li/>').append($('<a/>',{class: function(){return textColor + textColorAccent}, href: "#!" }).html("link 4"))
            ])
          ])
        ])
      ),
      $('<div/>', {class: "footer-copyright"}).append(
        $('<div/>', {class: function(){return "container " + textColor + textColorAccentHeaders}}).html("© 2014 Copyright Text").append(
          $('<a>', {class: function(){return "right " + textColor + textColorAccentHeaders}}).html("More Links")
        )
      )
    ])
  )
}

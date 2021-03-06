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

// Global
var row = 0;
var col = 0;
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
      $('<ul>',{class: "tabs tabs-transparent"})
    )
  )

  var tabs = firebase.database().ref("tabs");
  tabs.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      // console.log(key);
      // console.log(childData);
      // console.log(key,childData);


      $('.tabs').append([
        $('<li>',{class: "tab"}).append($('<a>',{href: childData.type}).html(childData.name)),
      ])
    });
  });



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
          $('<a>').append($('<img>', {class: "circle", id:"user_photo" ,src:"https://upload.wikimedia.org/wikipedia/en/3/38/Avatarjakeneytiri.jpg"})),
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
    $('.collapsible').collapsible();

    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      //   ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //     alert("Ready");
      //     console.log(modal, trigger);
      //   },
      //   complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

}

// Changes the arabic font to Noto Kufi
function arabify(){
  $('body').addClass("arabic")
}

// Adds a <div class="row"> after 3 ads in ads page
function addRow() {
  col = 0
  row++
  $('#ads').append(
    $('<div>', {class: "row", id: "row"+row})
  )
}

function getModal(){
  $('body').append(
    $('<div>',{class: "modal", id: "modal1"}).append([
      $('<div>', {class: "modal-content"}).append([
        $('<div>',{id: "map", style:"width: 100%; height: 300px"})
      ])
    ])
  )
  animationActivate()
}

// Gets the ads from the database and orders them by time.
function getAds(){
  var counter = 1;


  var posts = firebase.database().ref("posts").orderByKey();
  posts.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      // console.log(key);
      // console.log(childData);
      // console.log(key,childData);

      if (col< 3) col++
      else addRow()

      animationActivate()
      createCard(row)


      function createCard(row) {
        $('#row'+row).append(
          $('<div>', {class: "col l4 m12 s12"}).append(
            $('<div>', {class: "card blue-grey darken-1"}).append(
              $('<div>',{class: "card-content"}).append(
                $('<span>', {"dir": "rtl" ,class:"card-title grey-text text-lighten-4"}).html(childData.title),
                $('<p>', {style:"font-size: 12px","dir": "rtl" , class:"grey-text text-lighten-2"}).html(childData.description)
              ),
              $('<div>', {class: "card-action"}).append(
                $('<a>', {href: "#"}).html("Accept")
              ),
              $('<ul>',{class:"collapsible", "data-collapsible":"accordion"}).append(
                $('<li>').append(
                  $('<div>',{class:"collapsible-header waves-effect"}).html("العمل").append(
                    $('<span>', {class: "badge"}).html(childData.type),
                    $('<i>', {class: "material-icons"}).html("work"),
                  ),
                  $('<div>',{class:"collapsible-body grey lighten-4"}).append(
                    $('<p>').html(childData.description)
                  )
                ),
                $('<li>').append(
                  $('<div>',{class:"collapsible-header waves-effect"}).html("الاجار").append(
                    $('<span>', {class: "truncate badge"}).html(childData.job.money + " ريال" ),
                    $('<i>', {class: "material-icons"}).html("attach_money"),
                  ),
                  $('<div>',{class:"collapsible-body grey lighten-4"}).append(
                    $('<p>').html("العملة بالريال السعودي")
                  )
                ),
                $('<li>').append(
                  $('<a>',{class:"collapsible-header waves-effect text-darken-3 " + colors.text , id: "card"+counter ,href: "#modal1", onclick: "getMap('card" + counter + "');" })
                  .html("الموقع").val({long: childData.location.long, lat: childData.location.lat})
                  .append(
                    $('<span>', {class: "truncate badge"}).html(childData.location.city),
                    $('<i>', {class: "material-icons"}).html("place")
                  )
                )
              )
            )
          )
        )
        counter++;
      }

    });
  });

  Materialize.toast('All ads downloaded!', 4000) // 4000 is the duration of the toast

}

// Retrives the map and adds markers from the value of each card and updates the map accordingly
function getMap(card) {

  var coordinates = document.getElementById(card).value


  var uluru ={lng: coordinates.long, lat: coordinates.lat};
  // var uluru ={lng: coordinates.long, lat: coordinates.long};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10  ,
    center: uluru,
    disableDefaultUI: true,
    draggable: true,
    zoomControl: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });


  google.maps.event.trigger(map, 'resize');

}

// TODO: Make idicators to show the user around the website
function startTutorial() {
  $('.tap-target').tapTarget('open',function(){
    $('.tap-target').tapTarget('close');

  });
}

function userGreeting() {
  firebase.auth().onAuthStateChanged(function(user){


    if (user){
      firebase.database().ref(`users/${user.uid}`).once("value").then(function(snap){ // Fine user in Database and greet them
        snap = snap.val()
        if (!snap.firstTime) {
          Materialize.toast(`اهلا وسهلا بك مجدداً ` + snap.displayName , 4000) // 4000 is the duration of the toast
        }else{
          snap.firstTime = false
          startTutorial()
        }
      })
    }
  })
}

function initApp(){
  // Start the app
  // arabify()
  getNav()
  getFooter()
  getTabs()
  // getDropDown()
  getSideNav()
  userGreeting()
  // getAds()
  getModal()
  animationActivate()


  $(window).resize(function() {
    google.maps.event.trigger(map, 'resize');
  });

  firebase.auth().onAuthStateChanged(function(user){
    // console.log(user);
  });



  // Activate LogOut
  $("#logout_button").click(function(){
    firebase.auth().signOut();
    window.location.reload();
  });

}

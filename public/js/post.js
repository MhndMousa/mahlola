
// TODO: Make a form for posting ads
function getPostForm(){
  $('mpost').append(
    $('<div>', {class: "row"}).append(
      $('<form>', {class: "col s12"}).append([
        $('<div>', {class: "row"}).append(
          $('<div>', {class:"input-field col s6"}).append([
            $('<input>', {class: "validate", type:"text", id:"name"}),
            $('<label>', {"for": "title"}).html("Title")
          ]),
          $('<div>', {class:"input-field col s6"}).append([
            $('<select>').append([
              $('<option>', {value:"", 'selected':"", 'disabled': ""}).html("Choose your catagories"),
              $('<option>', {value:"1"}).html("Graffiti"),
              $('<option>', {value:"2"}).html("Home Work"),
              $('<option>', {value:"3"}).html("Painting")

            ])
          ])

          // $('<div>', {class:"input-field col s6"}).append([
          //   $('<input>', {class: "validate", type:"text", id:"name"}),
          //   $('<label>', {"for": "email"}).html("Email")
          // ])
        ),
        $('<div>', {class: "row"}).append(
          $('<div>', {class:"input-field col s12"}).append([
            $('<input>', {class: "validate", type:"text", id:"name"}),
            $('<label>', {"for": "description"}).html("Description")
          ])
        ),
        $('<div>', {class: "row"}).append(
        )
      ])
    )
  )
}

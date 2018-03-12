
// TODO: Make a form for posting ads
function getPostForm(){
  $('mpost').append(
    $('<div>', {class: "row"}).append(
      $('<form>', {class: "col s12"}).append(
        $('<div>', {class: "row"}).append(
          $('<div>', {class:"input-field col s6"}).append([
            $('<input>', {class: "validate", type:"text", id:"name"})
            $('<label>', {for: "first_name"}).html("Name")
          ])
        )
      )
    )
  )
}

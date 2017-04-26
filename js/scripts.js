$(document).ready(function() {
  $("#madlib").submit(function(event) {

    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var nounInput = $("input#noun").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".noun").text(nounInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);

    $("#story").show();
    event.preventDefault();
  });
});

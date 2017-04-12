// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  $.ajax({
    type: 'GET',
    url: "http://www.mattbowytz.com/simple_api.json?data=all",
    dataType: 'json',
    success: function(thedata){
      $(".flexsearch-input").keyup(function(e){
        $(".suggestions").remove();
        var word = $(".flexsearch-input").val().toLowerCase();
        var length = word.length;
        var myarray = new Array();

        $.each(thedata.data, function(index1,value1){
          $.each(value1, function(index2,value2){
            var suggestion = value2.substring(0,length).toLowerCase();
            if(suggestion===word&&$(".flexsearch-input").val().length!==0){
              myarray.push(value2);
            }
          });
        });
        $.each(myarray, function(index, value){
          $("#mainForm").append('<div class="suggestions"><p>'+ value +'</p></div>');
        });
        console.log(word);
      });
    }
  });
})();

$(document).ready(function(){
  $('#cta-alert').on('click', function(){
    var laddaInstance = Ladda.create(document.querySelector('#cta-alert'));
    laddaInstance.start();
    sendAlert($('#cta-input').val(), laddaInstance);
  });
  $('#cta-feedback').on('click', function(){
    var laddaInstance = Ladda.create(document.querySelector('#cta-feedback'));
    laddaInstance.start();
    askFeedback(laddaInstance);
  });
});


// This is for assessmenet follow up: https://ford-followup-feedback-bot.azurewebsites.net/followup 

function sendAlert(query, laddaInstance){
  // var generatedURL = "https://ford-followup-feedback-bot.azurewebsites.net/followup" + query

  var generatedURL = "https://ford-landd.herokuapp.com/followup";
  $.ajax({
    url: generatedURL,
    success: function(result){
      $('#cta-input').val('');
    },
    complete: function(){
      laddaInstance.stop();
    }
  })

};

// This is for the feedback: https://ford-followup-feedback-bot.azurewebsites.net/feedback
function askFeedback(laddaInstance){
  $.ajax({
    url: "https://ford-landd.herokuapp.com/feedback",
    success: function(result){
      laddaInstance.stop();
    },
    complete: function(){
      laddaInstance.stop();
    }
  })
  
};

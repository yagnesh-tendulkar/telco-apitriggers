$(document).ready(function(){
 //alert("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  $('#cta-alert').on('click', function(){
    var laddaInstance = Ladda.create(document.querySelector('#cta-alert'));
    laddaInstance.start();
    //alert("$('#cta-input').val()",$('#cta-input').val());
    sendAlert($('#cta-input').val(), laddaInstance);
  });
  $('#cta-feedback').on('click', function(){
    var laddaInstance = Ladda.create(document.querySelector('#cta-feedback'));
    laddaInstance.start();
    askFeedback(laddaInstance);
  });
});



function sendAlert(query, laddaInstance){
 //alert("inside sendalert");
  // var generatedURL = 
  $.ajax({
    url: "https://telco-bot.eu-gb.mybluemix.net/proactiveMessages?message=" + query,
    success: function(result){
      //alert("success",result);
      $('#cta-input').val('');
    },
    complete: function(){
      laddaInstance.stop();
    }
  })
};


function askFeedback(laddaInstance){
  $.ajax({
    url: "https://telco-bot.eu-gb.mybluemix.net/feedback",
    success: function(result){
      laddaInstance.stop();
    },
    complete: function(){
      laddaInstance.stop();
    }
  })
};

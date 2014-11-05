
// Gmaps initialization

function initialize() {
  var latlng = new google.maps.LatLng(52.090142,5.109665);
  var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);
}

$(document).ready(function() {

  // Hide task panel 
  $('.tp').hide();

  $('input:radio').change(function() {
     $("div.tp dl").removeClass("selected");
     $(this).next().addClass("selected");
  });

  $('button[title]').qtip({
    position: {
      my: 'bottom center', 
      at: 'top center'
    },
    style: {
      tip: true,
      classes: 'ui-tooltip-dark'
    }
  });

  // $("dl.editable").hover(
  //   function () {
  //     $(this).find("button.edit").qtip.show();
  //   }, 
  //   function () {
  //     $(this).find("button.edit").qtip.hide();
  //   }
  // );

});

// Show task panel Assess permit
function showPanelAssessPermit() {
  $('.tp').show('slow', function() { });
}

// Hide task panel Assess permit
function hidePanelAssessPermit() {
  $('.tp').hide('slow', function() { });
}

// Hide task list
function assessPermitSubmit() {      
  hidePanelAssessPermit();
  $('#tl').hide('slow', function() { });
}


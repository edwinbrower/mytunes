// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', '');
});


// http://parse.sfm6.hackreactor.com/mytunes/classes/songs
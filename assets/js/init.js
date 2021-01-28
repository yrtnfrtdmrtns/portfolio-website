$(document).ready(function() {
  $('.btn').click(function() {
    var channel_id = $(this).attr('data-channel');
    activateChannel(channel_id);
  })

  function activateChannel(channelId) {
    $('.screen').removeClass('active');
    $("#"+channelId).addClass('active');
  }

  $(window).on('hashchange', function(e){
    var url = window.location.href;
    var channelId = url.substr(url.length - 2);
    if(isNaN(channelId)) {
      $('.screen').removeClass('active');
      $('.home').addClass('active');
    } else {
      activateChannel(channelId);
    }
  });
})

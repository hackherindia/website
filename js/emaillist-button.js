$("#close-modal-button").click(function() {
		$(".sign-up-modal").fadeOut(200);
   // $(".email-btn").fadeIn(200);
});

$(document).ready(function(){

  /* define variables for popup */
  /*----------------------------*/
  var fadeInTime = 600; //time in ms
  var fadeOutTime = 600; //time in ms
  var popupWindow = $('.sign-up-modal');
  var button = $('.email-btn');
  //jquery selector of window

  /* define simple fade functions */
  /*------------------------------*/

  function fadein(el) {
    $(el).fadeIn(fadeInTime);
  }
  function fadeout(el) {
    $(el).fadeOut(fadeOutTime);
  }

  /* open #popup-window on click of .popup-trigger */
  /*-----------------------------------------------*/

  $('.email-btn').on('click touchend', function(){
    fadein(popupWindow);
    //fadeout(button);
  })

  /* close #popup-window on click of .popup-close */
  /*----------------------------------------------*/

  $('.popup-close').on('click touchend', function() {
    fadeout(popupWindow);
    //fadein(button);
  });

  /* close #popup-window on click a anywhere outside the window	*/
  /*------------------------------------------------------------*/
  $(document).on('mouseup', function(e) {
      if (!popupWindow.is(e.target) // target not container...
          && popupWindow.has(e.target).length === 0) // ... nor descendant of container
      {
      fadeout(popupWindow);
      //fadein(button);
      }
  });

  /* close #popup-window on pressing ESC	*/
  /*------------------------------------------------------------*/
  $(document).on('keyup', function(e) {
      if (e.keyCode == 27) { // (escape key)
      fadeout(popupWindow);
      //fadein(button);
      }
  });

})

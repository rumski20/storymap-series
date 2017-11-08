define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */

     console.log('tpl-ready');

     /////////////////////////////////////////////////////////////
     // show/hide side panel

     $('#accordionPanelToggle')
        // don't show toggle until app is loaded
        .show()
        // listen for click
        .click( function() {
            // then toggle side panel visibility
            $("#accordionPanel").fadeToggle({ complete: function(){ $(window).resize(); } });
            // swap chevron direction after toggling
            $('#accordionPanelToggle > span').toggleClass('right left')
         });
    ///////////////////////////////////////////////////////////////



    // After a map is loaded (when the map starts to render)
    topic.subscribe("story-loaded-map", function(result){
      if ( result.index !== null )
        console.log("The map", result.id, "has been loaded from the entry", result.index);

        ////////////////////////////////////////////////////////////////
        // add second logo

        // // clone existing logo
        var clone = $('#headerDesktop > div.rightArea > div.logoContainer a')
            .clone();
        // set link target
        clone.attr('href', 'http://www.stlouiscountymn.gov')
            // add to logo's parent container
            .insertAfter($('#headerDesktop > div.rightArea > div.logoContainer a'));

        // set link image source
        clone.find('img').attr('src', 'app/storymaps/common/_resources/images/Official County Logo Black_6_2009 For WebFull_white.png')

    });

  });
});

function EventCardController($mdDialog){
  var ctrl = this;

  ctrl.openRSVPMenu = function($mdMenu, ev) {
    $mdMenu.open(ev);
  };

  ctrl.RSVP_CHOICES = ['Yes', 'No', 'Interested'];

  ctrl.setRSVP = function(option) {
    ctrl.RSVP = option;
  };

}

function EventCardDirective() {
  return {
    scope:{},
    controller: 'EventCardController as ct',
    bindToController: {
      dtx: "=dtx"
    },
    restrict: 'E', // make a custom element.
    templateUrl: '../public/components/event/component.html'
  };
}
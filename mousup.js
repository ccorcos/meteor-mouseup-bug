if (Meteor.isClient) {
  Template.hello.events({
    'mouseup .tap': function () {
      console.log("mouseup")
    },
    'touchend .tap': function () {
      console.log("touchend")
    }
  });
}

var app = require('./index.js');
var Dispatcher = app.EventBus;
var Subscriber = app.Subscriber;

describe('Subscriber', function(){

  it('can be extended', function(){
    // Event
    function ObjectWasSaved(obj){
      this.obj = obj;
    }

    // Listener
    function MySubscriber(){
      this.whenObjectWasSaved = function(event){
        // do something
      }
    }

    MySubscriber.prototype = Subscriber;

    var mySubscriber = new MySubscriber();

    spyOn(mySubscriber, 'whenObjectWasSaved').and.callThrough();

    Dispatcher.subscribe('ObjectWasSaved', mySubscriber);

    Dispatcher.fire(new ObjectWasSaved({}));

    expect(mySubscriber.whenObjectWasSaved).toHaveBeenCalled();
  });
});

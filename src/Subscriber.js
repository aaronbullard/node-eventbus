var Subscriber = {

   handle: function(event){
     // Get event name
     var eventName = event.constructor.name;

     var method = 'when' + eventName;

     if(typeof this[method] === 'function'){
         this[method](event);
     }
   }
}

module.exports = Subscriber;

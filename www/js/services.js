angular.module('starter.services', [])

.service('Todos', function Todos() {

  // Might use a resource here that returns a JSON array

  
    this.data = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }];
 

    this.all = function all (){
      return this.data
    }
    this.remove = function remove (todo){
      this.data.splice (this.data.indexOf(chat), 1)
    }
    this.get = function get (id) {
      var todo = {}
      this.data.map (function(el){
        if (el.id == id){
          todo = el
        }
      })
    }
    return todo
});

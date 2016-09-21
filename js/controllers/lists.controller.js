'use strict';
// Lists Controller

class ListsController {
  constructor(){
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }

  init() {
    this.$addTaskForm.hide()
    var self = this
    this.$addListForm.on("submit", function(event){
      event.preventDefault()
      var listTitle = self.$listTitleInput.val()
      self.$listTitleInput.val("")
      new List(listTitle).build()
      self.$addTaskForm.show(500)
    })

  }

}

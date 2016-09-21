'use strict';
// Tasks Controller

class TasksController {
  constructor() {
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }

  init() {

    var self = this
    this.$addTaskForm.on("submit",function(event){
      event.preventDefault();
      var description = $('#task_description', this).val()
      var priority = $('#task_priority', this).val()
      var listID = $('#select_list', this).val()
      var list = List.all[listID]
      new Task(description, priority, list).build()
    })
  }
}

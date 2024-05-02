$(document).ready(function () {
    $('#task-form').on('submit', function (event) {
        event.preventDefault()
        
        var taskText = $('#task-input').val();
        
        var newTask = $('<li>').text(taskText);
        
        newTask.on('click', function () {
            $(this).toggleClass('completed');
        });
        
        $('#task-list').append(newTask);
        
        $('#task-input').val('');
    });
});
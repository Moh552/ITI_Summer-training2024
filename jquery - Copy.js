$(document).ready(function(){
    $('#addTaskBtn').click(function(){
        var taskText = $('#taskInput').val();
        if(taskText !== "") {
            var newTask = '<div class="task-item">' + taskText + '</div>';
            $('#taskList').append(newTask);
            $('#taskInput').val(''); 
        }
    });

    $('#taskList').on('click', '.task-item', function(){
        $(this).remove();
    });
});

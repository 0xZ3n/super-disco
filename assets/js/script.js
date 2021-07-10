//formatting the displayed current day
var now = dayjs().format('MMM-DD-YYYY ddd');
var currentTime = moment().hour();
console.log(currentTime);
$('#currentDay').text(now);

var workHours = [
    {
        time: 9,
        timeDisplay: '9:00 am',
    },
    {
        time: 10,
        timeDisplay: '10:00 am',
    },
    {
        time: 11,
        timeDisplay: '11:00 am',
    },
    {
        time: 12,
        timeDisplay: '12:00 pm',
    },
    {
        time: 10,
        timeDisplay: '10:00 pm',
    },
    {
        time: 11,
        timeDisplay: '11:00 am',
    },
    {
        time: 9,
        timeDisplay: '9:00 am',
    },
    {
        time: 10,
        timeDisplay: '10:00 am',
    },
    {
        time: 11,
        timeDisplay: '11:00 am',
    }
];

var textAreaBlock = $(".description");
console.log(textAreaBlock);

textAreaBlock.each(function(){
    console.log($(this).attr("id"));
    var timeBlockHour = parseInt($(this).attr("id"));
    if(timeBlockHour === currentTime) {
        console.log("is equal")
        $(this).addClass("present");
    } else if (timeBlockHour < currentTime) {
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }

})



for(var i = 0; i < workHours.length; i++){
    var row = $('<div>');
    row.addClass('row');
    console.log(row);
    $('.container').append(row);



    var timeColumn = $('<div>');
    var apptColumn = $('<div>');
    var saveButton = $('<div>');

    timeColumn.text(workHours[i].timeDisplay);
    timeColumn.addClass('hour time-block col-12');

    apptColumn
}
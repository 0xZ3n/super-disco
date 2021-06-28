//formatting the displayed current day
var now = dayjs().format('MMM-DD-YYYY ddd');

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
];



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
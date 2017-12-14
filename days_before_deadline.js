var _MS_PER_DAY = 1000 * 60 * 60 * 24;
var a    = new Date();
var b    = new Date("2018-01-10"); // Or any other JS date
var dday = 0;

var remainingDays    = dateDiffInDays(a, b);

if (remainingDays > 0 ) { // Apply you login on remaining days
}

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return dday = Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

output = {date1: dday};

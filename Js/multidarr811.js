var array1=[[1, 2, 3], [4, 5, 6]];
var array2=[[1, 2], [3], [4, 5, 6]];
outputArray("Values in array1 by row", array1);
outputArray("Values in array2 by row", array2);
function outputArray(heading, theArray) {
    document.writeln("<h2>" + heading + "</h2><pre>");
    for (var i in theArray) {
        for (var j in theArray[i])
        document.write(theArray[i][j] + "");
        document.writeln("<br/>");
    } document.writeln("</pre>");
}
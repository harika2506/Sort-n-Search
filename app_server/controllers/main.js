var lineReader = require('line-reader');
/**
 * Send the contents of an HTML page to the client.
 * @param fileName the name of the file containing the HTML page.
 * @param result the HTTP result.
 */

function sendPage(fileName, result)
{
    var html = '';
    // Read the file one line at a time.
    lineReader.eachLine(fileName,
        /**
         * Append each line to string html.
         * Send the contents of html to the client
         * after the last line has been read.
         * @param line the line read from the file.
         * @param last set to true after the last line.
         */
        function(line, last)
        {
            html += line + '\n';

            if (last)
            {
                result.send(html);
                return false;
            }
            else
            {
                return true;
            }
        });
}


module.exports.homePage = function(request, result)
{
    sendPage('./app_server/views/home.html', result);
};

module.exports.sort = function (request,result) {
    console.log("Inside sort");
    var sortType = request.body.sortType;
    var inputArray = request.body.input;
    console.log(sortType);
    if(sortType === "insertion"){
        insertionSort(inputArray);
    }
    else if(sortType === "selection"){
        selectionSort(inputArray);
    }
    else if(sortType === "merge"){
        mergeSort(inputArray);
    }
    else{
        quickSort(inputArray);
    }

}

function insertionSort(inputArray) {
    console.log(typeof(inputArray));
}

function selectionSort(inputArray) {
    console.log(inputArray);
}
function mergeSort(inputArray) {
    console.log(inputArray);
}
function quickSort(inputArray) {
    console.log(inputArray);
}
module.exports.search = function (request,response) {
    console.log("Inside Search");
    var searchType = request.body.searchType;
    var inputArrayStr = request.body.input;
    var searchValue = request.body.searchValue;
    var inputArray = inputArrayStr.split(",");
    if(searchType === "linear"){
        var startTime = new Date().getTime();
        var result = linearSearch(inputArray, searchValue);
        var endTime = new Date().getTime();
        var consumedtime = endTime - startTime;
        console.log("Time: "+consumedtime + "start:" + startTime + "end:" + endTime);
        console.log(result);

    }
    else{
        var result = binarySearch(inputArray, searchValue);
        console.log(result);
    }

}
function linearSearch(inputArray, searchValue) {
    console.log(typeof(inputArray));
    console.log(searchValue);
    for(i=0;i<inputArray.length;i++){
        if(inputArray[i]===searchValue){
            return i+1;
        }
    }
    return "Not Found";

}
function binarySearch(inputArray, searchValue) {
    console.log(inputArray);
    console.log(searchValue);


}
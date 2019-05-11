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
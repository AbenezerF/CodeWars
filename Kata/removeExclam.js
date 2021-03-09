/* Remove Exclamation Marks (8kyu)

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/


function removeExclamationMarks(s) {
    return s.replace(/!/g, "");
}
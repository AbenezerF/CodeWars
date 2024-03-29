/* Simple validation of a username with regex (8kyu)
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

*/
function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username);
  }

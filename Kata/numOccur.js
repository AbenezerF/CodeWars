


Array.prototype.numberOfOccurrences = function (element) {
    
    var counter = 0;
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == element) { counter++; }
    }
    
    return counter;
}
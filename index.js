
module.exports = function(obj, path) {

    if (typeof path.split === 'undefined') throw Error("No valid path specified");

    var parts   = path.split('.'); // .

    for (var i = 0; i < parts.length; i++ ) {
        var name = parts[i];

        if (obj == null) obj = global[name];
        else obj = obj[name];

        if (typeof obj === 'undefined') return false;
    };
    return true;
}

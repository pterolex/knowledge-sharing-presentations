function loadData(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();

        request.open('GET', url, true);

        request.onload = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText);
                } else {
                    reject(this.status);
                }
            }
        };

        request.send();
    })
}

loadData('http://www.omdbapi.com/?s=batman&y=&plot=short&r=json').then(function(data) {
    var firstMovie = JSON.parse(data).Search[0];

    return firstMovie;
}).then(function(firstMovie) {

    return loadData('http://www.omdbapi.com/?i=' + firstMovie.imdbID + '&plot=short&r=json');
}).then(function(movies) {
    var plot = JSON.parse(movies).Plot;

    console.log("Plot", plot);

    return plot;
}).then(null, function(error) {
    console.error("Ahaha, here you are!", e);
});
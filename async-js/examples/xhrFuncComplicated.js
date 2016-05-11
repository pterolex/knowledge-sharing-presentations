function loadData(url, successCallback, errorCallback) {
    var request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onload = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                successCallback(this.responseText);
            } else {
                errorCallback(this.status);
            }
        }
    };

    request.send();
}

loadData('http://www.omdbapi.com/?s=batman&y=&plot=short&r=json', function(data) {
    var firstMovie = JSON.parse(data).Search[0];

    loadData('http://www.omdbapi.com/?i=' + firstMovie.imdbID + '&plot=short&r=json', function(movies) {
        var plot = JSON.parse(movies).Plot;
        console.log("Plot", plot)

    }, function(error) {
        console.error("Second error", error)
    });
}, function(error) {
    console.error("First error", error)
})
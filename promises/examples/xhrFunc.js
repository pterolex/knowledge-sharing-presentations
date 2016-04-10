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
    var movies = JSON.parse(data);
    console.log('parsed data', movies);
}, function(error) {
    console.error("Ohhh...", error)
})
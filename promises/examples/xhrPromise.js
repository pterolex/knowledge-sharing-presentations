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
    var json = JSON.parse(data);
    console.log('parsed data', json);
}, function(error) {
    console.error("Ohhh...", error)
}).then(null, function(e) {
    console.error("Caught you", e);
});
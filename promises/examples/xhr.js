var request = new XMLHttpRequest();
var url = 'http://www.omdbapi.com/?s=batman&y=&plot=short&r=json';

request.open('GET', url, true);

request.onload = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error("Shit happened", this.status);
        }
    }
};

request.send();


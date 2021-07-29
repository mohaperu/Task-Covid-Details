var request = new XMLHttpRequest();
request.open('GET','https://api.covid19api.com/summary',true);
request.send();
request.onload=function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for(i=0;i<192;i++) {
        console.log(data.Countries[i].Country+", NewConfirmed:"+data.Countries[i].NewConfirmed+
        ", TotalConfirmed:"+data.Countries[i].TotalConfirmed+", NewDeaths:"+data.Countries[i].NewDeaths+
        ", TotalDeaths:"+data.Countries[i].TotalDeaths+", NewRecovered:"+data.Countries[i].NewRecovered+
        ", TotalRecovered:"+data.Countries[i].TotalRecovered);
    }
}

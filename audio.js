var sng = document.getElementById('sng');
var timeBar = document.getElementById('timeBar');

var songlist = {
    src: 'audio/30sec.mp3',
    title: "Happy Birthday",
    artist: "Justin B",
}

var songlist2 = {
    src: "audio/littlebit.mp3",
    title: "Little Bit",
    artist: "Baba Blek Sheep",
}


function playSong(){
    sng.play()
}

function pauseSong(){
    sng.pause()
}


setInterval (checkTime, 1000); //to keep tracking the time use setInterval
function checkTime() {
    // console.log(sng.currentTime);
    // console.log(sng.duration);

    var songDuration = Math.round(sng.duration);
    var songCurrentTime = Math.round(sng.currentTime); //Math.floor is to round down a number

    // console.log("Song Duration: ", songDuration);
    // console.log('Song Current: ', songCurrentTime);

    var clrR = Math.floor(Math.random() *255); //to even out the numbers
    var clrG = (Math.random() *255).toFixed(2); //to make the number 2 decimals places
    var clrB = Math.round((Math.random() *155) + 100); // to make the number between 100-255
    // console.log("R: " + clrR + ", G: " + clrG + ", B: " + clrB)

    //template string; `string ${var}`

    // console.log(`R: ${clrR}, G: ${clrG}, B: ${clrB}`);

    var timeBarWidth = (songCurrentTime/ songDuration) * 100;
    timeBar.style.width = timeBarWidth + '%';
    timeBar.style.backgroundColor = `rgb(${clrR}, ${clrG}, ${clrB})`;
}

function getSong(songData) {
    // if (songData == 'songlist') {
    //     console.log (songlist.src);
    // } else if (songData == 'songlist2') {
    //     console.log(songlist2.src)
    // }


    switch(songData) {
        case 'songlist':
            console.log(songlist.src);
            sng.src = songlist.src;
            document.getElementById("titleTag").innerHTML = songlist.title;
            document.getElementById("artistTag").innerHTML = songlist.artist;
            break;
        case 'songlist2':
            console.log(songlist2.src);
            sng.src = songlist2.src;
            document.getElementById("titleTag").innerHTML = songlist2.title;
            document.getElementById("artistTag").innerHTML = songlist2.artist;
            break;
        default:
            console.log("show default");
            break;
    }
}
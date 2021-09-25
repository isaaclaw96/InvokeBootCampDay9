var sng = document.getElementById('sng');
var titleText = document.getElementById('titleTag');
var artistText = document.getElementById('artistTag');
var bgCover = document.getElementById('section-first');

var songlist = [
    {
        title: "a lot",
        artist: "21 Savage",
        source: 'audio/song1.mp3',
        cover: 'url("images/song1.jpg")',
    },
    {
        id: 2,
        title: "Middle Child",
        artist: "J Cole",
        source: "audio/song2.mp3",
        cover: 'url("images/song2.jpg")',
    },
    {
        id: 3,
        title: "Redbone",
        artist: "Childish Gambino",
        source: "audio/song3.mp3",
        cover: 'url("images/song3.jpg")',
    },
    {
        id: 4,
        title: 'Feels Like Summer',
        artist: "Childish Gambino",
        source: 'audio/song4.mp3',
        cover: 'url("images/song4.jfif")',
    },
    {
        id:5,
        title: 'SICKO MODE',
        artist: 'Travis Scott',
        source: 'audio/song5.mp3',
        cover: 'url("images/song5.jpg")',
    }
]
var i = 0;

var vol = 1;

var isPlaying = false;

sng.muted = false

i = 0


function switchClick() {
    if (isPlaying == false) {
        sng.play();
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
        if (i == 0) {
            sng.src = songlist[i].source;
            titleText.innerHTML = songlist[i].title;
            artistTag.innerHTML = songlist[i].artist;
            bgCover.style.backgroundImage = songlist[i].cover;
        }
        return;
    } else if (isPlaying == true) {
        sng.pause();
        isPlaying = false;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-play fadeAnimate'></i>";
        return;  
    }
    console.log(sng.src);
}

function updateVol(volNum) {
    vol += volNum;
    if (vol <= 0) {
        vol=0;
    } else if (vol >= 1) {
        vol=1;
    }
    console.log(vol);   
    sng.volume = vol;
}

function muteVol() {
    if (sng.muted == false) {
        sng.muted = true;
        document.getElementById("mute-btn").innerHTML = '<i class="fas fa-volume-mute fadeAnimate"></i>';
    } else if (sng.muted == true) {
        sng.muted = false;
        document.getElementById("mute-btn").innerHTML = '<i class="fas fa-volume-up fadeAnimate"></i>'
    }
}

function switchNext(num) {
    i = i + num;
    console.log(i);
    if ( i >= 5) {
        i = 0;
    }else if (i < 0){
        i = 4;
    }
    sng.src = songlist[i].source;
    titleText.innerHTML = songlist[i].title;
    artistTag.innerHTML = songlist[i].artist;
    bgCover.style.backgroundImage = songlist[i].cover;
    isPlaying = true;
    document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
}
function getSong(songData) {

  switch(songData) {
    case 'songlist1':
        i = 0;
        sng.src = songlist[i].source;
        titleText.innerHTML = songlist[i].title;
        artistTag.innerHTML = songlist[i].artist;
        bgCover.style.backgroundImage = songlist[i].cover;
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
        break;
    case 'songlist2':
        i = 1;
        sng.src = songlist[i].source;
        titleText.innerHTML = songlist[i].title;
        artistTag.innerHTML = songlist[i].artist;
        bgCover.style.backgroundImage = songlist[i].cover;
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
        break;
    case 'songlist3':
        i = 2;
        sng.src = songlist[i].source;
        titleText.innerHTML = songlist[i].title;
        artistTag.innerHTML = songlist[i].artist;
        bgCover.style.backgroundImage = songlist[i].cover;
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
        break;
    case 'songlist4':
            i = 3;
        sng.src = songlist[i].source;
        titleText.innerHTML = songlist[i].title;
        artistTag.innerHTML = songlist[i].artist;
        bgCover.style.backgroundImage = songlist[i].cover;
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
        break;

    case 'songlist5':
            i = 4;
            sng.src = songlist[i].source;
            titleText.innerHTML = songlist[i].title;
            artistTag.innerHTML = songlist[i].artist;
            bgCover.style.backgroundImage = songlist[i].cover;
            isPlaying = true;
            document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
            break;
}  

}

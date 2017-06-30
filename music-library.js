const Library = (name, creator, playlists) => {
  this.name = name;
  this.creator = creator;
  this.playlists = playlists;
}

const Playlist = (name, tracks) => {
  this.name = name;
  this.tracks = tracks;
}

Playlist.prototype.overallRating = () => {
  let total = this.tracks.reduce((a, b) => {
    return a.rating + b.rating
  });

  return total/this.tracks.length;
}

Playlist.prototype.totalDuration = () => {
  let duration = this.tracks.reduce((a, b) => {
    return a.length + b.length;
  });

  return duration;
}

const Track = (title, rating, length) => {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const track1 = new Track("t01", 5, 3);
const track2 = new Track("t02", 3, 4);

const playlist1 = new Playlist("p01", [track1, track2]);
const libray = new Library("Code Monkey", "Jonathan Coulton", [playlist1]);

for (let idx  in libray.playlists) {
  console.log("##########################################");
  console.log("playlist:", libray.playlists[idx].name);
  console.log("overalRating:", libray.playlists[idx].overallRating());
  console.log("totalDuration:", libray.playlists[idx].totalDuration());
  console.log("##########################################");
}

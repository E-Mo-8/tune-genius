let fs = require("fs");
let axios = require("axios");

let songs = ["Antonio rossini: Overture to william tell","Frederic chopin: waltz in c sharp minor","Vivaldi: Winter ending"];
let durations = ["00:57","00:33","00:26"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmVPP9fFjThJFuk1BuMAJti1V9tUWVYTe9bcLo3sRWHS4G/media/3`, //cover hash
      name: songs[i],
      animation_url: `ipfs://QmVPP9fFjThJFuk1BuMAJti1V9tUWVYTe9bcLo3sRWHS4G/media/${i}`, //mp3 = hash
      duration: durations[i],
      artist: "balora-clssical-music",
      year: "1995"
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
      "A9OvH9aYHhEpx8mmYyeXMx3ii7QMKpGkkvLyDPK02QSDXNgqSIB6I8u1YbfRCez3",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });

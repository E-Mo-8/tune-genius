let fs = require("fs");
let axios = require("axios");

let media = ["antonio_rossini-overture_to_william_tell.mp3","frederic_chopin-waltz_in_c_sharp_minor.mp3","vivaldi-winter_ending.mp3","classical_music.png"];
let ipfsArray = [];
let promises = [];

for (let i = 0; i < media.length; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${__dirname}/export/${media[i]}`, (err, data) => {
        if (err) rej();
        ipfsArray.push({
          path: `media/${i}`,
          content: data.toString("base64"),
        });
        res();
      });
    })
  );
}
Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
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
});

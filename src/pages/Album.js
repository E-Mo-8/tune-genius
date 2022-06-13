import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router";
import "./Album.css";
import Opensea from "../images/opensea-blue.png";
import { ClockCircleOutlined } from "@ant-design/icons";

/* const tgSongs = [
  {
    src: "../../Album/export/tg/Gamblers Money-Official-Audio.wav",
    cover:
      "../../Album/export/tg/Gamblers-money-coverart.jpg",
    album: "xccx",
    title: "Gamblers money coverart",
    duration: "02:22",
  }, 
  {
    src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
    album: "My Everything",
    title: "Side To Side",
    duration: "0:16",
  },
  {
    src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
    album: "My Everything",
    title: "Pizza and A Coke",
    duration: "5:01",
  },
  {
    src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
    album: "My Everything",
    title: "Iceberg Lettuce",
    duration: "0:24",
  },
  {
    src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
    album: "My Everything",
    sotitleg: "Spitting Chicklets",
    duration: "1:03",
  },
  {
    src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
    album: "My Everything",
    title: "Boomerang",
    duration: "2:16",
    
  }, */
//];

const Album = ({ setNftAlbum }) => {

  const tgSongs = [
    {
      src: "./Gamblers Money-Official-Audio.wav",
      cover: "./Gamblers-money-coverart.png",
      album: "The Genius Collection",
      title: "Gamblers money coverart",
      duration: "02:22",
      key: "0",
    },
    {
      src: "./Lick My Balls (Official Audio).wav",
      cover: "./Lick My Balls Cover.jpg",
      album: "The Genius Collection",
      title: "Lick My Balls",
      duration: "03:46",
      key: "1",
    },
    {
      src: "./Man Titties (Official Audio).wav",
      cover: "./man titties cover.jpg",
      album: "The Genius Collection",
      title: "Man Titties",
      duration: "02:20",
      key: "2",
    },
    {
      src: "./Phat Thangs (Final).wav",
      cover: "./phat thangs cover.jpg",
      album: "The Genius Collection",
      title: "Phat Thangs",
      duration: "02:50",
      key: "3",
    },
    {
      src: "./Quagmire (Official Audio).wav",
      cover: "./quagmire art.png",
      album: "The Genius Collection",
      title: "Quagmire",
      duration: "01:37",
      key: "4",
    },
    {
      src: "./Whip Clean (Official Audio).wav",
      cover: "./whowho art.jpg",
      album: "The Genius Collection",
      title: "Whip Clean",
      duration: "02:13",
      key: "5",
    },
  ];


    
  const { state: albumDetails } = useLocation();
  const { album } = useAlbum(albumDetails.contract);
 console.log(tgSongs);
  return (
    <>
    <div>
      <p>&nbsp;</p>
     {/* <div><img className="cover" src={xy} alt="xy" /></div> */}
    </div>
      <div className="albumContent">
        <div className="topBan">
          <img
            src={albumDetails.image}
            alt="albumcover"
            className="albumCover"
          ></img>
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{albumDetails.title}</div>
            <div className="artist">
              {album && tgSongs.artist}
            </div>
            <div>
              {album && albumDetails.year} •{" "}
              {album && tgSongs.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div className="playButton" onClick={() => setNftAlbum(tgSongs)}>
            PLAY
          </div>
          <div
            className="openButton"
            onClick={() =>
              window.open(
                //`https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/1`
                `https://opensea.io/collection/the-genius-collection-justin-rogers`
              )
            }
          >
            OpenSea
            <img src={Opensea} className="openLogo" />
          </div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>
        {

          tgSongs.map((nftSong,i) =>(
                <div className="tableContent">
                  <div className="numberHeader">{i + 1}</div>
                  <div className="titleHeader"  style={{color: "rgb(101, 101, 101)", fontsize: "8px"}}>
                    {nftSong.title}
                  </div>
                  <div className="numberHeader">{nftSong.duration}</div>
                </div>
       )) }
      </div>
    </>
  );
};

export default Album;

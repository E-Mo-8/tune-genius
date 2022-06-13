import useAudio from "../hooks/useAudio";
import {Slider} from "antd";
import { useIPFS } from "../hooks/useIPFS";
import "./AudioPlayer.css";
import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";
//import xy from  "../tracks/Gamblers-money-coverart.png"

const Player = ({ nftAlbum }) => {

  const {resolveLink} = useIPFS();
  const [
    playing,
    duration,
    toggle,
    toNextTrack,
    toPrevTrack,
    trackProgress,
    onSearch,
    onSearchEnd,
    onVolume,
    trackIndex
  ] = useAudio(nftAlbum);

  console.log("AudioPlayer: " +   nftAlbum[trackIndex].src);
  console.log("AudioPlayer image: " +   nftAlbum[trackIndex].cover);
  
  const minSec = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnMin}:${returnSec}`;
  };

  return (
    <>
    <div className="buttons" style={{width:"300px", justifyContent:"start"}}>
        {/* <img className="cover" src={xy} alt="currentCover" /> */}
        <img className="cover" src={nftAlbum[trackIndex].cover} alt={nftAlbum[trackIndex].cover} />
        <div>
        <div className="songTitle">{nftAlbum[trackIndex].title}</div>
        <div className="songAlbum">{nftAlbum[trackIndex].album}</div>
        </div>
    </div>
    <div>
      <div className="buttons">
        <StepBackwardOutlined className="forback" onClick={toPrevTrack} />
        {playing ? 
            <PauseCircleFilled className="pauseplay" onClick={toggle} /> :
            <PlayCircleFilled className="pauseplay" onClick={toggle} />
        }
        <StepForwardOutlined className="forback" onClick={toNextTrack} />
      </div>
      <div className="buttons">
      {minSec(trackProgress)}
      <Slider
        value={trackProgress}
        step={1}
        min={0}
        max={duration ? duration : 0}
        className="progress" 
        tooltipVisible={false}
        onChange={(value) => onSearch(value)}
        onAfterChange={onSearchEnd}
      />
      {duration ? minSec(Math.round(duration)) : "00:00"}
      </div>
    </div>
    <div className="soundDiv">
          <SoundOutlined />
          <Slider 
            className="volume" 
            defaultValue={100} 
            tooltipVisible={false}
            onChange={(value) => onVolume(value/100)}
          />
    </div>
    </>
  );
};

export default Player;

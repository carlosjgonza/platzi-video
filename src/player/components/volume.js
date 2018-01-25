import React from 'react';
import VolumeIcon from '../../icons/components/volume.js';
import './volume.css';

function Volume(props) {
  return (
    <div 
      className="Volume"
    >
      <div
        onClick={props.handleVolumeClick}
      >
        <VolumeIcon
          color="white"
          size={25}
        />
      </div>
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.volume}
        />
      </div>
    </div>
  )
}

export default Volume;
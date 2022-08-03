import React, { Component } from "react";
import './soundpad.css';
import useSound from "use-sound"; 
import play from "use-sound";
import sample0 from "./sounds/sample0.wav";
import sample1 from "./sounds/sample1.wav";
import sample2 from "./sounds/sample2.wav";
import sample3 from "./sounds/sample3.wav";
import sample4 from "./sounds/sample4.wav";
import sample5 from "./sounds/sample5.wav";
import sample6 from "./sounds/sample6.wav";
import sample7 from "./sounds/sample7.wav";
import sample8 from "./sounds/sample8.wav";
import sample9 from "./sounds/sample9.wav";
import sample10 from "./sounds/sample10.wav";
import sample11 from "./sounds/sample11.wav";
import sample12 from "./sounds/sample12.wav";
import sample13 from "./sounds/sample13.wav";
import sample14 from "./sounds/sample14.wav";
import sample15 from "./sounds/sample15.wav";
import sample16 from "./sounds/sample16.wav";
import sample17 from "./sounds/sample17.wav";
import sample18 from "./sounds/sample18.wav";
import sample19 from "./sounds/sample19.wav";
import sample20 from "./sounds/sample20.wav";
import sample21 from "./sounds/sample21.wav";
import sample22 from "./sounds/sample22.wav";
import sample23 from "./sounds/sample23.wav";
import sample24 from "./sounds/sample24.wav";

const AsignSounds = () => {
const AllButtons = document.getElementsByClassName("sound-pad");
const AllSamples = [sample0, sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sample10, sample11, sample12, sample13, sample14, sample15, sample16, sample17, sample18, sample19, sample20, sample21, sample22, sample23, sample24];
for (let i = 0; i < AllButtons.length; i++) {
  AllButtons[i].addEventListener("click", function() {
    const sound = new Audio(AllSamples[i]);
    sound.play();
  }
  ) 
}
}

const SoundPad = () => {
  AsignSounds();

  return <button className="sound-pad">
  </button>;
}


export default SoundPad;
// Images
import circuit1 from "../images/Backup-Sensor/Arduino-Circuit-1.jpg";
import circuit2 from "../images/Backup-Sensor/Arduino-Circuit-2.jpg";
import proximity from "../images/Backup-Sensor/Close-Proximity-Example.jpg";

// Videos
import backupSensorDemoVideo from "../videos/Backup-Sensor/Backup-Sensor-Demo.mp4";
import backupSensorTestVideo from "../videos/Backup-Sensor/Backup-Sensor-Test.mp4";

// Image and video gallery
export const backupSensorImages = [
  {
    type: "image",
    src: circuit1,
    alt: "image of circuit design",
    caption: "Closeup image of the circuit design for the backup sensor project"
  },
  {
    type: "image",
    src: circuit2,
    alt: "circuit is connected to Arduino",
    caption: "Green LED lights up when there is no object in close proximity"
  },
  {
    type: "image",
    src: proximity,
    alt: "Proximity sensor example",
    caption: "Red LED lights up when an object is in close proximity, picked up by the proximity sensor"
  },
  {
    type: "video",
    src: backupSensorDemoVideo,
    alt: "Backup sensor demonstration video",
    caption: "Video showing the demonstration of the backup sensor in action, given a real scenario of someone reversing in their car",
  },
  {
    type: "video",
    src: backupSensorTestVideo,
    alt: "Backup sensor test video",
    caption: "Video showing the testing of the backup sensor, with the LEDs lighting up based on proximity",
  }

];
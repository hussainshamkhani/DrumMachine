import {AudioClip} from "./types"

interface DrumProps {
    audioClip: AudioClip;
}


const Drum = ({audioClip}: DrumProps) => {
    const playAudio = (clip: AudioClip) => {
        try{
            (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play()
        }
          catch (error) {
            console.error(error);
          };
          
          document.getElementById("display")!.innerHTML = clip.description;

    };

    return (
        <button
            className="drum-pad"
            id={`drum-${audioClip.keyTrigger}`}
            onClick={() => playAudio(audioClip)}
            autoFocus
        >
            <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
            {audioClip.keyTrigger}
        </button>
    )
};

export default Drum
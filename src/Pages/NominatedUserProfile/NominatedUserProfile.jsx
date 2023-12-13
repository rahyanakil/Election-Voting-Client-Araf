
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import DevelopmentWork from "./DevelopmentWork/DevelopmentWork";
import SinglePersonDetails from "./SinglePersonDetails/SinglePersonDetails";
import VideoPlayer from "./VideoPlayer/VideoPlayer";



const NominatedUserProfile = () => {
    return (
        <div>
        <SinglePersonDetails></SinglePersonDetails>
        <VideoPlayer></VideoPlayer>
        <AudioPlayer></AudioPlayer>
        <DevelopmentWork></DevelopmentWork>
            
        </div>
    );
};

export default NominatedUserProfile;
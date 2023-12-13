

const AudioPlayer = () => {
    return (
        <div className="mt-11 p-5 bg-green-100 border-green-100 border-opacity-10 border-2">
        <h1 className="text-green-700 text-2xl font-bold font-['Li Ador Noirrit'] p-5">অডিও বার্তাঃ</h1>
        <audio src="./static/music/foo.mp3" controls autoPlay/>
      </div>
    );
};

export default AudioPlayer;
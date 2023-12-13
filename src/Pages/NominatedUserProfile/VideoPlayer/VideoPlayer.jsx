
const VideoPlayer = () => {
    return (
        <div>
    <h1 className="mt-14 p-7 text-green-700 text-2xl font-bold font-['Li Ador Noirrit'] leading-10">বার্তাঃ</h1>
    <div className=" flex flex-row gap-4  p-7  sm:flex-2">
    
      <div className="basis-1/4">
      <video className="w-50 h-40 rounded-md shadow" controls>
        <source src={""} type="video/mp4" />
      </video>
      </div>

      <div className="basis-1/4 ">
      <video className="w-50 h-40 rounded-md shadow" controls>
        <source src={""} type="video/mp4" />
      </video>
      </div>

      <div className="basis-1/4">
      <video className="w-50 h-40 rounded-md shadow" controls>
        <source src={""} type="video/mp4" />
      </video>
      </div>

      <div className="basis-1/4 ">
      <video className="w-50 h-40 rounded-md shadow" controls>
        <source src={""} type="video/mp4" />
      </video>
      </div>
    </div>
    </div>
    );
};

export default VideoPlayer;
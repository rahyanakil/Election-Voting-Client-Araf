

const SinglePersonDetails = () => {
    return (
        <div className="card p-7  lg:card-side bg-base-100 shadow-xl">
      <div className="flex  gap-8 w-1/2 ">
       
        <div className=" indicator">
                  <img className="indicator-item badge " src="../../../src/assets/icons/check.svg"/>
                   
                  <div className="w-48 h-40 pl-4 rounded-lg">
                    <div className="gap-4 mb-4 ">
                    <img
                    className="border-emerald-700 border-2 rounded gap-4"
                      alt="Tailwind CSS examples"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                    
                    </div>
                    <div className="justify-center items-center">
                    <p className=" bg-emerald-700 text-white p-1 rounded
                     ">পেজ ভিজিটঃ ১০৩৩ </p>
                    </div>
                  </div>
                </div>
          

        
        <div className=" ">
          <h2 className="text-emerald-700 font-semibold">আবুল কালাম আজাদ</h2>
          <h3>
            <span className="text-orange-600">রাজনৈতিক দলঃ</span> বাংলাদেশ
            আওয়ামীলীগ
          </h3>
          <h3>পদবিঃ সভাপতি</h3>
          <h3>পেশাঃ ব্যাবসায়ী</h3>
          <h3>ঠিকানাঃ তেজগাঁও, ঢাকা</h3>
          <h3 className="text-orange-600">মোবাইলঃ +৮৮০ ১৭১১ ১২৩৩২১</h3>
          <h3 className="text-orange-600">
            ই-মেইলঃ abulkalam.azad3311@gmail.com
          </h3>
        </div>
      </div>
      <div className="card-body w-1/2  bg-emerald-700 rounded ">
        <p className="text-white  font-semi-bold font-['Li Ador Noirrit'] break-all">
          সম্পর্কে ঃ জনাব আবুল কালাম আজাদ একজন অতীব পরিচিত এবং বহুল আলোচিত একজন
          স্বনামধন্য রাজনৈতিক ব্যাক্তিত্ব। তিনি একাধারে ৩ বার মনোনীত সভাপতি। তার
          জন্ম ঢাকা মিরপুরে এবং তার কৈশোরের পুরো সময়টাই কাটে সেখানেই। তিনি একটি
          স্বনামধন্য শিক্ষাপ্রতিষ্ঠান থেকে তার স্নাতকত্বর শেষ করার পর তিনি
          পুরোপুরি ভাবে রাজনীতির মাঠে পদচারনা। এরপর থেকে তার একের পর এক
          উন্নয়নমূলক কাজ, তার সুদূরপ্রসারী আর দূরদর্শী চিন্তাভাবনা প্রশংসনীয়
          ভাবে তার ব্যাপ্তি জনমুখে প্রচার হতে থাকে।{" "}
        </p>
      </div>
    </div>
    );
};

export default SinglePersonDetails;
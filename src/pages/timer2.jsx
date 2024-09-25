import { useState, useEffect } from 'react';

const Timer2 = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59'); // Set your target date here

    const updateTime = () => {
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTime({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <div className="overflow-hidden px-14 py-16 bg-black max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-semibold leading-none text-green-500">
                Categories
              </div>
              <div className="self-stretch mt-8 text-5xl font-semibold tracking-widest leading-[60px] text-neutral-50 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                Enhance Your Music Experience
              </div>
              <div className="flex gap-6 items-start mt-8 text-black whitespace-nowrap">
                <div className="flex flex-col w-[62px]">
                  <div className="flex flex-col justify-center items-center px-1.5 bg-white rounded-full fill-white h-[62px] w-[62px]">
                    <div className="flex flex-col items-center">
                      <div className="text-base font-semibold leading-none">
                        {time.hours}
                      </div>
                      <div className="text-xs leading-loose">Hours</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[62px]">
                  <div className="flex flex-col justify-center items-center px-1.5 bg-white rounded-full fill-white h-[62px] w-[62px]">
                    <div className="flex flex-col items-center">
                      <div className="text-base font-semibold leading-none">
                        {time.days}
                      </div>
                      <div className="text-xs leading-loose">Days</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[62px]">
                  <div className="flex flex-col justify-center items-center px-1.5 bg-white rounded-full fill-white h-[62px] w-[62px]">
                    <div className="flex flex-col items-center">
                      <div className="text-base font-semibold leading-none">
                        {time.minutes}
                      </div>
                      <div className="text-xs leading-loose">Minutes</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[62px]">
                  <div className="flex flex-col justify-center items-center px-1.5 bg-white rounded-full fill-white h-[62px] w-[62px]">
                    <div className="flex flex-col items-center">
                      <div className="text-base font-semibold leading-none">
                        {time.seconds}
                      </div>
                      <div className="text-xs leading-loose">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-2.5  px-12 py-4 mt-10 text-base font-medium bg-green-500 rounded text-neutral-800 max-md:px-5">
                Buy Now!
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7169f529b6871ad5fc58f22d103f027a02e40d225ed34ee4b02867e0183e5aa7?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain self-stretch my-auto w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer2;

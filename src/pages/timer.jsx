import { useState, useEffect } from "react";

const Timer = () => {
  // Set the initial countdown time
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 50,
    minutes: 54,
    seconds: 56,
  });

  // Countdown logic using useEffect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer); // Stop the timer when it reaches zero
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-10 items-end">
        <div className="flex flex-wrap gap-10 items-end min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col h-[103px]">
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                Today’s
              </div>
            </div>
            <div className="mt-6 text-4xl font-semibold tracking-widest leading-none text-black">
              Flash Sales
            </div>
          </div>
          <div className="flex gap-4 text-black whitespace-nowrap min-w-[240px] w-[302px]">
            <div className="flex flex-col min-h-[50px]">
              <div className="text-xs font-medium">Days</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </div>
            </div>
            <div className="flex self-end mt-7 min-h-[16px]" />
            <div className="flex flex-col h-[50px]">
              <div className="text-xs font-medium">Hours</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </div>
            </div>
            <div className="flex self-end mt-7 min-h-[16px]" />
            <div className="flex flex-col min-h-[50px]">
              <div className="text-xs font-medium">Minutes</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
              </div>
            </div>
            <div className="flex self-end mt-7 min-h-[16px]" />
            <div className="flex flex-col h-[50px]">
              <div className="text-xs font-medium">Seconds</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 aspect-square w-[46px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 aspect-square w-[46px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;

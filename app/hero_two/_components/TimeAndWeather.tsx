"use client";

import { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const TimeAndWeather = () => {
  const [accraTime, setAccraTime] = useState("");
  const [nyTime, setNyTime] = useState("");
  const [accraTemp, setAccraTemp] = useState("");
  const [nyTemp, setNyTemp] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setAccraTime(getTimeInZone("Africa/Accra"));
      setNyTime(getTimeInZone("America/New_York"));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  function getTimeInZone(timeZone: string) {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(new Date());
  }

  useEffect(() => {
    const fetchWeather = async (
      city: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        );
        const data = await res.json();
        setter(`${Math.round(data.main.temp)}°C`);
      } catch {
        setter("N/A");
      }
    };

    fetchWeather("Accra", setAccraTemp);
    fetchWeather("New York", setNyTemp);
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 text-[14px] sm:text-lg">
      <p>Accra</p>
      <p>{accraTime}</p>
      <p>{accraTemp}</p>
      <HiArrowSmallRight />
      <p>NY</p>
      <p>{nyTime}</p>
      <p>{nyTemp}</p>
    </div>
  );
};

export default TimeAndWeather;

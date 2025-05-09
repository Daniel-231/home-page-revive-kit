
import React from "react";
import Clock from "../components/Clock";
import SearchBar from "../components/SearchBar";
import IconGrid from "../components/IconGrid";
import WeatherDisplay from "../components/WeatherDisplay";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-8 px-4 bg-gradient-backdrop bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3880')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="w-full max-w-7xl mx-auto glass-card p-10 rounded-3xl animate-fade-in">
        <Clock />
        <WeatherDisplay />
        <SearchBar />
        <IconGrid />
      </div>
    </div>
  );
};

export default Index;

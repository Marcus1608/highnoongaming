import React, { useState } from "react";
import Image from "next/Image";
import { GamesContainer } from "./gamesStyle";

const Games = () => {
  const [value, setValue] = useState(0);

  return (
    <GamesContainer>
      <div className="carousel-container">
        <ul>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-1.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-2.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>

          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-3.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>

          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-4.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>

          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-5.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>

          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-6.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>

          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-7.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>

          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image">
              <Image
                className="image-custom"
                src="/imgs/game-8.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="systems">
              <p className="game-title">Street Fighter V</p>
              <span>PS4</span> <span>XboxOne</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="carousel-slider--container">
        <input
          type="range"
          min="0"
          max="5"
          step=".1"
          value={value}
          id="cSlider"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </GamesContainer>
  );
};

export default Games;

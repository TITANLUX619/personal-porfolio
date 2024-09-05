'use client'

import React from 'react'

const SocialMediaButton = ({ info }: { info: { id: number, img: string, link: string } }) => {
  return (
    <div
      key={info.id}
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      onClick={() => window.open(info.link, "_blank")}
    >
      <img src={info.img} alt="icons" width={20} height={20} />
    </div>)
}

export default SocialMediaButton
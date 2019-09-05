import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import ReactPlayer from 'react-player'

export default function HomePage() {
    return (

        <main className="content">
            <Navbar />
            <div className='player-wrapper'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=Vm-dIElJrdY'
                    playing
                    width='100%'
                />
            </div>

        </main>


    )
}
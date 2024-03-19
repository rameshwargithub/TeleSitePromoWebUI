import { Inter } from 'next/font/google'
import { useState } from 'react'

export default function Header() {
    const [showToggle,setShowToggle]=useState(false)

    return <>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-shrink navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">TeleSubs</a>
                <button className="navbar-toggler" onClick={()=>setShowToggle(!showToggle)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className={"collapse navbar-collapse "+(showToggle?"show":"")} id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#whyus">WhyUs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        {/* <li className="nav-item"><a className="nav-link" href="#team">Team</a></li> */}
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Masthead */}
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">TELEGRAM SMM PANEL!</div>
                {/* <div className="masthead-heading text-uppercase">It's Nice To Meet You</div> */}
                <div className="masthead-heading text-uppercase">Grow with us!</div>
                <div className='m-4'>Best Telegram SMM Panel to Buy TeleGram Subscribers, Buy TeleGram Views, Buy TeleGram Vote, Buy TeleGram Members, Buy TeleGram Fake Members, Buy TeleGram Dead Members and many more!

                    Being Telegram Members Main Provider in the world is you want to Buy Telegram Channel Subscribers then you are in right track! Best Telegram SMM Panel and Cheapest Telegram SMM Reseller Panel. TeleSubs, Main provider of Telegram members, telegram channel member, cheapest telegram members provider.</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
    </>
}
'use client'

import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav>
            <a className="nav-logo" href="/"><span>Wi</span>T Melbourne</a>

            <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
                <li><a href="/about">About Us</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/sponsors">Sponsors</a></li>
                <li><a href="/committee">Committee</a></li>
                <li><a href="/join" className="cta">Join Us</a></li>
            </ul>

            <div
                className="nav-hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
            >
                <span /><span /><span />
            </div>
        </nav>
    )
}
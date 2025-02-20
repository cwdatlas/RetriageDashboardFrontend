"use client"; // Only needed if you're using the Next.js 13 App Router + a client component

import React from "react";

export default function Header() {
    const username = "Aidan Scott";
    return (
        <header>
            <div>
                {/* Icon */}
                <img
                    src="/some-icon.png"
                    alt="App Icon"
                />
                {/* Button */}
                <button>Current Event</button>
            </div>

            {/* Username on the right */}
            <div>{username}</div>
        </header>
    );
}

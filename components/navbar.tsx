"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function DesktopNavLinks() {
    return (
        <ul className="absolute right-3 flex flex-row space-x-6">
        <li className="text-xl text-gray-700 hover:text-gray-900">
            <Link href="/">Home</Link>
        </li>
        <li className="text-xl text-gray-700 hover:text-gray-900">
            <Link href="/about">About</Link>
        </li>
        <li className="text-xl text-gray-700 hover:text-gray-900">
            <Link href="/benefit">Benefit</Link>
        </li>
        <li className="text-xl text-gray-700 hover:text-gray-900">
            <Link href="/golf">Golf Outing</Link>
        </li>
        <li className="text-xl  text-gray-700 hover:text-gray-900">
            <Link href="/contact">Contact</Link>
        </li>
        <li className="text-xl text-gray-700 hover:text-gray-900">
            <Link href="/donate">Donate</Link>
        </li>
        </ul>
    );
  }



  function MobileMenuButton({ onClick }: { onClick: () => void }) {
    return (
      <button className="absolute right-2 top-2 p-2" onClick={onClick}>
        <FontAwesomeIcon className="text-4xl" icon={faBars} />
      </button>
    );
  }

  function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-5xl" icon={faXmark} />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/about">About</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/benefit">Benefit</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/golf">Golf Outing</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/donate">Donate</Link>
          </li>
        </ul>
      </div>
    );
  }

  export default function TheNavbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
          <div className="hidden relative sticky top-0 bg-gray-200 py-6 sm:flex flex-col justify-center">
            <DesktopNavLinks />
          </div>
          <div className="sm:hidden relative flex flex-row my-4">
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </>
      );
  }
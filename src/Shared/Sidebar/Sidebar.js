import React from 'react';
import logo from '../../assets/Images/logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { SlLayers } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from 'react-router-dom';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const Sidebar = () => {
    return (
        <div>   
            <aside class="" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 min-h-screen bg-gray-50 rounded dark:bg-gray-800">
                <Link to="/" class="flex items-center pl-2.5 mb-5">
                    <img src={logo} class="w-full" alt="Abdullah Al Masud Logo" />
                </Link>
                <ul class="space-y-2 ml-4">
                    <li>
                        <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <AiOutlineHome className='text-2xl'/>
                        <span class="ml-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <AiOutlineUserAdd className='text-2xl'/>
                        <span class="flex-1 ml-3 whitespace-nowrap">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <AiOutlineAppstore className='text-2xl'/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Works</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <MdOutlineMessage className='text-2xl'/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Contact</span>
                        </Link>
                    </li>
                    <li>
                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>
                    </li>
                </ul>
            </div>
            </aside>
        </div>
    );
};

export default Sidebar;
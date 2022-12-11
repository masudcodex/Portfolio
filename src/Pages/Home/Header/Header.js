import React from 'react';
import { Avatar, Button, Tooltip } from 'flowbite-react';
import {  ImFacebook2, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import image from '../../../assets/Images/user.png';
import bgShape from '../../../assets/Images/shapes.svg';

const Header = () => {
    return (
        <section class="bg-gray-50 dark:bg-gray-900 bg-cover bg-repeat-x bg-blend-darken" style={{ backgroundImage: `url(${bgShape})` }}>
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-36 lg:px-12">
                <Avatar
                    img={image}
                    rounded={true}
                    size= 'xl'
                />
                <h2 class="my-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Abdullah Al Masud</h2>
                <p class="mb-8 text-md font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Web Developer & Designer</p>
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/ktarua" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <ImFacebook2 className='text-2xl'/>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="https://www.linkedin.com/in/masud007/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <ImLinkedin className='text-2xl'/>
                        <span class="sr-only">Linkedin page</span>
                    </a>
                    <a href="https://github.com/masudcodex" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <ImGithub className='text-2xl'/>
                        <span class="sr-only">Github page</span>
                    </a>
                    <a href="https://twitter.com/forester_masud" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <ImTwitter className='text-2xl'/>
                        <span class="sr-only">Twitter page</span>
                    </a>
                </div> 
                <div className='flex mt-8 justify-center'>
                    <Tooltip
                        content="Download resume"
                        style= "dark"
                    >
                        <Button
                            color="failure"
                            pill={true}
                            >
                        Resume
                        </Button> 
                    </Tooltip>
                </div>
                
            </div>
        </section>
    );
};

export default Header;
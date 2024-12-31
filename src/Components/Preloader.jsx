import React, { useEffect } from 'react';
import gsap from 'gsap';
import Home from './Home';
import logoSVG from '/Green Luxury Elegant Fashion transparent Logo.svg'


const Preloader = () => {
    useEffect(() => {
        const handlePageLoad = () => {
            const counter3 = document.querySelector('.counter-3');
            const preloader = document.querySelector('.loading-screen');
    
            // Ensure counter3 is available
            if (counter3) {
                // Populate numbers dynamically
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < 10; j++) {
                        const div = document.createElement('div');
                        div.className = 'num';
                        div.textContent = j;
                        counter3.appendChild(div);
                    }
                }
    
                const finalDiv = document.createElement('div');
                finalDiv.className = 'num';
                finalDiv.textContent = '0';
                counter3.appendChild(finalDiv);
            }
    
            // Animation functions and animations
            function animate(counter, duration, delay = 0) {
                const numHeight = counter.querySelector('.num')?.clientHeight || 0;
                const totalNumbers = counter.querySelectorAll('.num').length;
    
                if (numHeight > 0) {
                    const totalDistance = (totalNumbers - 1) * numHeight;
    
                    gsap.to(counter, {
                        y: -totalDistance, // Move upwards by totalDistance
                        delay: delay,
                        duration: duration,
                        ease: 'power2.inOut',
                    });
                }
            }
    
            const counter1 = document.querySelector('.counter-1');
            const counter2 = document.querySelector('.counter-2');
    
            if (counter1) animate(counter1, 2, 4); // Starts after a 4-second delay
            if (counter2) animate(counter2, 6);
            if (counter3) animate(counter3, 5);
    
            gsap.to(".digit", {
                top: "-150px",
                stagger: {
                    amount: 0.25,
                },
                delay: 6,
                duration: 1,
                ease: "power4.inOut",
            });
    
            gsap.from(".loader-1", {
                width: 0,
                duration: 6,
                ease: "power2.inOut",
            });
    
            gsap.from(".loader-2", {
                width: 0,
                duration: 2,
                ease: "power2.inOut",
                delay: 1.9,
            });
    
            gsap.to(".loader", {
                background: "none",
                delay: 6,
                duration: 0.1,
            });
    
            gsap.to(".loader-1", {
                rotate: 90,
                y: -50,
                duration: 0.5,
                delay: 6,
            });
    
            gsap.to(".loader-2", {
                x: -75,
                y: 75,
                duration: 0.5,
                delay: 6,
            });
    
            gsap.to(".loader", {
                scale: 40,
                duration: 1,
                delay: 7,
                ease: "power2.inOut",
            });
    
            gsap.to(".loader", {
                rotate: 45,
                y: 500,
                x: 2000,
                duration: 1,
                delay: 7,
                ease: "power2.inOut",
            });
    
            gsap.to(".loading-screen", {
                opacity: 0,
                duration: 0.5,
                delay: 7.5,
                ease: "power1.inOut",
                onComplete: () => {
                    setTimeout(() => {
                        if (preloader) {
                            preloader.style.display = 'none';
                        }
                    }, 100); // Delay to ensure GSAP finishes
                },
            });
            
    
            gsap.to(".h1", {
                delay: 7.5,
                y: -80,
                ease: "power4.inOut",
                stagger: {
                    amount: 0.1,
                },
            });
        };
    
        window.addEventListener('load', handlePageLoad);
    
        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);
    

    return (
        <div className='m-0 p-0  box-border w-[100vw] h-[100vh] font-Aeonik-Bold fixed z-50 '>
            <div className="website-content absolute w-full h-full bg-white top-0 left-0 flex justify-center items-center">
                <div className="header relative w-max h-max  ">
                    <div className="h1 flex">
                     <img src={logoSVG} alt="" />
                    </div>
                    <div className="header-revealer absolute top-0 w-full h-full after:content-[''] after:absolute after:left-0 after:w-[105%] after:h-[110%] after:top-[80px]"></div>
                </div>
            </div>

            <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black text-white pointer-events-none z-50 "> 
                <div className="loader absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] flex bg-[rgb(80,80,80)]">
                    <div className="loader-1 bar relative bg-white w-[200px] h-[50px]"></div>
                    <div className="loader-2 bar relative w-[100px] bg-white h-[50px]"></div>
                </div>

                <div className="counter fixed left-[50px] bottom-[50px] flex h-[100px] text-[100px] leading-[102px] clip-your-needful-style font-normal">
                    <div className="counter-1 digit relative top-[-15px]">
                        <div className="num">0</div>
                        <div className="num num1offset1 relative right-[-20px]">1</div>
                    </div>
                    <div className="counter-2 digit relative top-[-15px]">
                        <div className="num">0</div>
                        <div className="num num1offset2 relative right-[10px]">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                        <div className="num">0</div>


                    </div>
                    <div className="counter-3 digit relative top-[-15px]">
                        <div className="num">0</div>
                        <div className="num">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;

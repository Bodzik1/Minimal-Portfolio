import React from 'react';

function Intro() {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
				Bogdan Mieldzicz
			</h1>
			<p className="text-base md:text-xl mb-3 font-medium">Game Developer</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				My journey into the world of coding began with the transformative Summer
				Youth Employment Program, where I was first introduced to the powerful
				combination of Unity and C#. This experience ignited a passion for
				technology that led me to pursue further education in college. Over two
				years, I delved into the complexities of C++ and honed my skills in
				object-oriented programming. Although my formal education came to a halt
				<br />
				the knowledge and experience I gained became the cornerstone of my career. 
				Today, I leverage my diverse coding backgroundto create innovative 
				solutions and continuously seek out new challenges in the ever-evolving 
				tech landscape.
			</p>
		</div>
	);
}

export default Intro;

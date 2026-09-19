import React from 'react';

export function Wave1() {
  return (
    <div className='wave-container wave-bottom absolute bottom-0 left-0 w-full z-2 leading-0 overflow-hidden' style={{ marginBottom: "-px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[200%] h-full wave1">
    
        <path 
          className="animate-wave-bottom"
          fill="#00141f" 
          fillOpacity="1" 
          d="M0,192L60,213.3C120,235,240,277,360,261.3C480,245,600,171,720,165.3C840,160,960,224,1080,229.3C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z 
             M1440,192L1500,213.3C1560,235,1680,277,1800,261.3C1920,245,2040,171,2160,165.3C2280,160,2400,224,2520,229.3C2640,235,2760,181,2820,154.7L2880,128L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1500,320L1440,320Z"
        />
      </svg>
    </div>
  );
}

export function Wave2() {
  return (
    <div className='wave-container wave-top absolute top-0 left-0 w-full z-2 leading-0 overflow-hidden' style={{ marginTop: "0px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[200%] h-full wave2" >
        <path 
          className="animate-wave-top"
          fill="#00141f" 
          fillOpacity="1" 
          d="M0,160L60,154.7C120,149,240,139,360,122.7C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z
             M1440,160L1500,154.7C1560,149,1680,139,1800,122.7C1920,107,2040,85,2160,90.7C2280,96,2400,128,2520,122.7C2640,117,2760,75,2820,53.3L2880,32L2880,0L2820,0C2760,0,2640,0,2520,0C2400,0,2280,0,2160,0C2040,0,1920,0,1800,0C1680,0,1560,0,1500,0L1440,0Z"
        />
      </svg>
    </div>
  );
}

export function Wave3() {
  return (
    <div className='wave-container absolute rig left-0 w-full z-2 leading-0] overflow-hidden' style={{ marginTop: "0px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[200%] h-full wave2" >
        <path 
          className="animate-wave-top"
          fill="#00141f" 
          fillOpacity="1" 
          d="M0,160L60,154.7C120,149,240,139,360,122.7C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z
             M1440,160L1500,154.7C1560,149,1680,139,1800,122.7C1920,107,2040,85,2160,90.7C2280,96,2400,128,2520,122.7C2640,117,2760,75,2820,53.3L2880,32L2880,0L2820,0C2760,0,2640,0,2520,0C2400,0,2280,0,2160,0C2040,0,1920,0,1800,0C1680,0,1560,0,1500,0L1440,0Z"
        />
      </svg>
    </div>
  );
}

import React from 'react';

function Stripes() {
    const data = [
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", no: 52 },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", no: 2 },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", no: 12 },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", no: 52 },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", no: 2 },
    ];

    return (
        <div className='w-full flex flex-wrap mt-20 justify-center'>
            {data.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-20 flex items-center justify-between border border-zinc-700 px-4 py-2 m-2">
                    <img src={item.url} alt={`Logo ${index + 1}`} className="h-8 w-auto" />
                    <h3 className='text-xl'>{item.no}</h3>
                </div>
            ))}
        </div>
    );
}

export default Stripes;

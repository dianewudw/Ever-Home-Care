import Image from 'next/image'

export default function ComingSoon() {
    return (
        <main className="flex h-full w-full p-10 flex-col items-center">
            <div className='table p-2 md:p-10 border-2 border-gold rounded-3xl w-full h-full'>
                <div class='flex flex-row justify-center sm:justify-start w-full '>
                <span class='flex flex-row md:align-middle m-5 md:m-'>
                    <img src='/brand_logo.svg' alt='logo' className=' hidden lg:flex flex-start w-24 h-24 mr-2 md:mr-5'/>
                    <h1 className='  flex font-title text-5xl md:text-6xl sm:self-center'>Ever Home</h1>
                </span>
                    {/* navigation links */}
                    {/*<div class='hidden md:flex flex-row items-center text-xl '>*/}
                    {/*    <p className='font-sans px-2 md:px-4'>Care Services</p>*/}
                    {/*    <p className='font-sans px-2 md:px-4'>Care Guide</p>*/}
                    {/*    <p className='font-sans px-2 md:px-4'>About Us</p>*/}
                    {/*    <p className='font-sans px-2 md:px-4'>Join Our Team</p>*/}
                    {/*    <p className='font-sans px-2 md:px-4'>Contact Us</p>*/}
                    {/*</div>*/}
                </div>
                <div className='flex px-5 w-full place-content-evenly py-10 md:px-20 flex-col md:py-0 h-full '>
                    <div className='h-fit max-w-screen self-center'>
                        <img className='h-full pr-10' src='/Hero_Image.svg' alt='Hero Image' />
                    </div>
                    <div className='flex flex-col max-w-screen md:mx-20 items-center'>
                        {/*<p className='flex font-hero text-3xl md:text-5xl md:text-start'>{'We\'re here for you.'}</p>*/}
                        {/*<p className='flex font-hero italic text-3xl md:text-5xl md:text-start'>{'Bringing joy to ever step of the journey'}</p>*/}
                        <p className='flex font-hero font-bold text-3xl md:text-8xl text-center shrink'>{'Coming Soon'}</p>
                        <p className='flex font-hero text-xs italic md:text-2xl text-gold text-center '>{'Our team is currently working hard building this page!'}</p>
                        {/*<p className='flex font-hero  text-3xl md:text-5xl text-gold text-center md:text-start'>{'Experience Assisted Living from Ever Home'}</p>*/}
                        {/*<p className='flex font-hero italic text-3xl md:text-5xl md:text-start'>{'Bringing joy to ever step of the journey'}</p>*/}

                        {/*<button className='p-5 rounded-3xl bg-baby_blue w-full my-5 md:w-1/3 md:my-20 md:text-2xl'>Coming Soon</button>*/}
                    </div>
                </div>
            </div>
        </main>
    )
}
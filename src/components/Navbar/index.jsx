import logo from '../../assests/logo/image.jpg'
export const Navbar =()=>{
    return(
        <>
            <header className='flex p-2 border-solid border-3 border-neutral-300 border-b-neutral-500'>
                <div className='w-16 h-16'>
                    <img className='w-full h-full ' src={logo} alt="logo" />
                </div>
                <h2 className='text-indigo-300'>Notes App</h2>
            </header>
        </>
    )   
}
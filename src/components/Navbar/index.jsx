import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
export const Navbar = () => {
    defineElement(lottie.loadAnimation);
    return (
        <>
            <header className='flex p-2 bg-purple-200 text-gray-800'>
                <div className='w-16 h-16'>
                    <lord-icon className='w-16 h-16'
                        src="https://cdn.lordicon.com/cbtlerlm.json"
                        trigger="in"
                        delay="300"
                        state="in-dynamic">
                    </lord-icon>
                </div>
                <h2 >NoteSphere</h2>
            </header>
        </>
    )
}
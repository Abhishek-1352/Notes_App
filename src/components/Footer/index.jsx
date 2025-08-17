import { Mail } from "lucide-react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";


export const Footer = () => {
    defineElement(lottie.loadAnimation);

    return (
        <>
            <footer className="fixed bottom-0 w-full bg-purple-300 text-gray-700">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                    <h2 className="text-xl font-semibold text-white">Abhishek Sutar</h2>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/*GitHub */}
                        <a href="https://github.com/Abhishek-1352" target="_blank" rel="noreferrer"
                            className="hover:text-white transition-colors">
                            <lord-icon
                                src="https://cdn.lordicon.com/lllcnxva.json"
                                trigger="hover">
                            </lord-icon>
                        </a>
                        {/*Linkedin */}
                        <a href="https://www.linkedin.com/in/abhishek-sutar-273a372a9/" target="_blank" rel="noreferrer"
                            className="hover:text-white transition-colors">
                            <lord-icon
                                src="https://cdn.lordicon.com/xerxcacw.json"
                                trigger="hover">
                            </lord-icon>
                        </a>
                        {/*Twitter */}
                        <a href="https://x.com/AbhishekSu87179" target="_blank" rel="noreferrer"
                            className="hover:text-white transition-colors">
                            <lord-icon
                                src="https://cdn.lordicon.com/buvzccpf.json"
                                trigger="hover"
                                state="hover-fly">
                            </lord-icon>
                        </a>
                        {/*Mail */}
                        <a href="mailto:sutarabhishek83@gmail.com"
                            className="hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
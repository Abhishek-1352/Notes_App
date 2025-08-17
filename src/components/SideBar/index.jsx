import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

import { IconNavLink } from "./IconNavLink";

export const Sidebar = ()=>{
    defineElement(lottie.loadAnimation);

    const getStyle = ({isActive})=>{
        return isActive?'nav-link bg-purple-300 rounded rounded-r-[16px]':'nav-link bg-purple-200 rounded hover:bg-purple-300 hover:rounded-r-[16px]'
    }
    return(
        <aside className='flex gap-3 flex-col bg-white border-r border-purple-100 w-32 h-screen'>
            
            <IconNavLink to={'/'}           className={getStyle} src={"https://cdn.lordicon.com/pgirtdfe.json"} children={'Home'}/>
            <IconNavLink to={'/archive'}    className={getStyle} src={"https://cdn.lordicon.com/lzsupfwm.json"} children={'Archive'}/>
            <IconNavLink to={'/important'}  className={getStyle} src={"https://cdn.lordicon.com/etzspqzb.json"} children={'Important'}/>
            <IconNavLink to={'/bin'}        className={getStyle} src={"https://cdn.lordicon.com/sxhqklqh.json"} children={'Bin'}/>
        </aside>
    )
}
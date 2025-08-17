import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

import { IconNavLink } from "./IconNavLink";

export const Sidebar = ()=>{
    defineElement(lottie.loadAnimation);

    const getStyle = ({isActive})=>{
        return isActive?'nav-link bg-slate-400 rounded hover:rounded-r-[16px]':'nav-link bg-slate-200 rounded hover:bg-slate-400 hover:rounded-r-[16px]'
    }
    return(
        <aside className='flex gap-3 flex-col border-solid border-blue-300 border-r-2 w-32 h-screen'>
            
            <IconNavLink to={'/'}           className={getStyle} src={"https://cdn.lordicon.com/pgirtdfe.json"} children={'Home'}/>
            <IconNavLink to={'/archive'}    className={getStyle} src={"https://cdn.lordicon.com/lzsupfwm.json"} children={'Archive'}/>
            <IconNavLink to={'/important'}  className={getStyle} src={"https://cdn.lordicon.com/etzspqzb.json"} children={'Important'}/>
            <IconNavLink to={'/bin'}        className={getStyle} src={"https://cdn.lordicon.com/sxhqklqh.json"} children={'Bin'}/>
            <IconNavLink to={'/about'}      className={getStyle} src={"https://cdn.lordicon.com/etzspqzb.json"} children={'About'}/>
        </aside>
    )
}
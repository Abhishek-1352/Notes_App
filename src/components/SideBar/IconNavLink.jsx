import { NavLink } from "react-router-dom";

export const IconNavLink=({to,children,src,className})=>{
    return(
        <>
            <NavLink className={className} to={to}
            onMouseEnter={(e)=> e.currentTarget.querySelector("lord-icon")?.setAttribute("trigger","loop")}
            onMouseLeave={(e) => e.currentTarget.querySelector("lord-icon").setAttribute("trigger", "hover")}
            >
                <span>
                    <lord-icon trigger='hover' src={src}></lord-icon>
                </span>
                <span>{children}</span>
            </NavLink>
        </>
    )
}
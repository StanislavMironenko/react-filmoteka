import React from "react";
import '../sass/components/_header.scss'


interface HeaderProps{
    children: React.ReactNode
}

export function Header({children}:HeaderProps) {
    return <header className="header header--home ">
        <div className="container">
        {children} 
            
        </div>
      
</header>

}
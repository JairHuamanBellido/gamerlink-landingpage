import React from 'react'
export const Header:React.FC = () => {

    return (
        <div className="header-container">
            <h1>GAMERLINK</h1>
            <div>
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">¿Que ofrecemos?</a>
                    </li>
                    <li>
                        <a href="">Videos Tutoriales</a>
                    </li>
                    <li>
                        <a href="">Logros</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
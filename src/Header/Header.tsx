import React from 'react'
export const Header:React.FC = () => {

    return (
        <div className="header-container">
            <h1>GAMERLINK</h1>
            <div>
                <ul>
                    <li>
                        <a href="#panel">Inicio</a>
                    </li>
                    <li>
                        <a href="#ofrecemos">¿Que ofrecemos?</a>
                    </li>
                    <li>
                        <a href="#tutoriales">Videos Tutoriales</a>
                    </li>
                    <li>
                        <a href="#logros">Logros</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
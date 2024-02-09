import { useState } from "react";
import "./TwitterFollowCard.css";

export function TwitterFollowCard({userName, name, isFollow, formatUserName}) {
    /*const state = useState(false); // Devuelve [valor(true,false), function]
    const isFollowing = state[0];
    const setIsFollowing = state[1];*/
    // UseState devuelve un array con dos elementos, el primero es el valor y el segundo es la función para cambiar el valor
    //Lo uso para el funcionamiento del boton de seguir
    //Si el valor es true, el boton se muestra como "Siguiendo", si es false, se muestra como "Seguir"
    const [isFollowing, setIsFollowing] = useState(isFollow || false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    
    const buttonClassName = isFollowing ? 'tw-followCard-followButton is-following' : 'tw-followCard-followButton'; 
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    console.log(formatUserName);
    console.log(userName);
    const avatar = `https://unavatar.io/${userName}`;
    return (
        <article className='tw-followCard'>
            <header>
                <img src={avatar} alt="Avatar"/>
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}
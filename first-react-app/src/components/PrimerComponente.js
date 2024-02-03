import React, {useState} from 'react'

export const PrimerComponente = () => {
  let nombre = 'Daniel';
  let cadenas = ['Hola', 'Mundo', 'desde', 'React'];
  //let estado = "Feliz"
  
  const [estado, setEstado] = useState("Feliz");
  
  const cambiarEstado = () => {
      setEstado("Enojado");
  }
  return (
    <div>
        <h1>Hola Mundo</h1>
        <p>Desarrollado por {nombre}</p>
        <p>Estado: {estado}</p>

        <button onClick={ e => cambiarEstado()}>Cambiar estado</button>
        <p>{cadenas.join(' ')}</p>
        <h2>Tambien las cadenas se pueden mostrar asi</h2>
        <p>{cadenas}</p>
        <ul>
            {
            cadenas.map((cadena, indice)=>{
                return <li key={indice}>{cadena}</li>
            } )
            }
        </ul>
    </div>
  )
}

export default PrimerComponente; // Asegúrate de exportar como predeterminado para que App.js pueda importar el componente.
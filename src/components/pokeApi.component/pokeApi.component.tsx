import { useEffect, useState } from "react";
import axios from "axios";

export default function PokeApi() {
    // 1. Inicializamos como array vacío para guardar la lista de imágenes
    const [pokeImg, setPokeImg] = useState([]);

    useEffect(() => {
        const pokeApi = async () => {
            const promesas = [];

            // Creamos un array de promesas (peticiones)
            for (let id = 1; id <= 10; id++) {
                promesas.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
            }

            try {
                // 2. Esperamos a que TODAS las peticiones terminen de forma eficiente
                const respuestas = await Promise.all(promesas);

                // Mapeamos las respuestas para quedarnos solo con la URL de la imagen
                const urls = respuestas.map(
                    (respuesta) => respuesta.data.sprites.other['official-artwork'].front_default
                );

                // 3. Guardamos el resultado en el estado
                setPokeImg(urls);
            } catch (error) {
                console.error("Error al traer los Pokémon:", error);
            }
        };

        pokeApi();
    }, []);

    return (
        <>
            {/* 4. Usamos pokeImg (el estado) y agregamos un 'return' implícito con () */}
            {pokeImg.map((valor, indice) => (
                <img key={indice} src={valor} alt={`Pokemon ${indice + 1}`} style={{ width: '150px' }} />
            ))}
        </>
    );
}
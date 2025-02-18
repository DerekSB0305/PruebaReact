import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import Card from "@/Components/Card";

export default function Index({games}) {
    return (
        <>
            <Navbar></Navbar>
            <Link href={route('games.create')} className="p-4 bg-black text-white rounded-lg mt-4">Crear Nuevo</Link>
            {games?.map((game) =>(
                <Card 
                key = {game.id} 
                name = {game.name}
                classification = {game.classification}
                genre = {game.genre}
                price = {game.price}
                />  
            ))}

            <div>Hay {Object.keys(games).length} juegos en la base de datos </div>
        </>
    );
}
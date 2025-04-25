import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import Card from "@/Components/Card";

export default function Index({games}) {
    return (
        <>
            <Navbar></Navbar>
            <section className="grid grid-cols-3 gap-10 p-20">
            {games?.map((game) =>(
                <Card 
                key = {game.id} 
                name = {game.name}
                classification = {game.classification}
                genre = {game.genre}
                price = {game.price}
                image = {game.image}
                />  
            ))}
            </section>

            <div>Hay {Object.keys(games).length} juegos en la base de datos </div>
        </>
    );
}
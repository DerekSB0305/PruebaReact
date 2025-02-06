import Card from "@/Components/Card";

export default function Index({games}) {
    return (
        <>
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
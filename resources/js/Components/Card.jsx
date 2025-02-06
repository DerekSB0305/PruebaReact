export default function Card({name, classification, genre, price}) {
    return (
        <div>
             <h1>{name}</h1>
             <h1>{classification}</h1>
             <h1>{genre}</h1>
             <h1>{price}</h1>
        </div>
    )
}
export default function Card({name, classification, genre, price, image}) {
    return (
        <div className="n-full rounded-lg bg-neutral-900">
            <img className="h-40 object-cover" src={"storage/" + image} alt="imagen" />
            <div className="p-8">
             <h1 className="text-xl font-bold text-white">{name}</h1>
             <h1 className="text-lg text-neutral-300">{classification}</h1>
             <h1 className="text-lg text-neutral-200">{genre}</h1>
             <h1>{price}</h1>
             </div>

        </div>
    )
}
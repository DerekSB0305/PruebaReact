import Navbar from "@/Components/Navbar"
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react"
import axios from "axios";
export default function Create() {
    
    const [name, setName] = useState();
    const [classification, setClassification] = useState();
    const [genre, setGenre] = useState();
    const [price, setPrice] = useState();

    const [error, setError] = useState(true);

    const submit = (e) => {
      e.preventDefault();
      console.log(name);
      console.log(classification);
      console.log(genre);
      console.log(price);

      if(name === '')
      {
        console.log('El campo no puede estar vacio');
        return;
        
      }

      axios.post(route('games.store'), {
        name: name,
        classification: classification,
        genre: genre,
        price: price
    }
  )
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error)
    
  });
    }
  return (
    <>
    <Navbar></Navbar>
    <div> Crear nuevo juego </div>
    <form onSubmit="{submit}">
        <h1>{name}</h1>
            <InputLabel htmlFor="name" value="Nombre" />
            <TextInput name="name" value={name} onChange=
            {(e) => setName(e.target.value)}>
            </TextInput>

            <InputLabel htmlFor="classification" value="classification" />
            <TextInput name="classification" value={classification} onChange=
            {(e) => setClassification(e.target.value)}>
            </TextInput>

            <InputLabel htmlFor="genre" value="genre" />
            <TextInput name="genre" value={genre} onChange=
            {(e) => setGenre(e.target.value)}>
            </TextInput>

            <InputLabel htmlFor="price" value="price" />
            <TextInput name="price" value={price} onChange=
            {(e) => setPrice(e.target.value)}>
            </TextInput>
            {error && (

            <button className="bg-black text-white p-4 rounded-lg" onClick={submit}>Guardar</button>
          )}
    </form>
    </>
  )
}

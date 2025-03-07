import Navbar from "@/Components/Navbar"
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react"
import axios from "axios";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
export default function Create() {
    

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    classification: '',
    genre: '',
    price: '',
});

    const [error, setError] = useState(true);

    const submit = (e) => {
      e.preventDefault();
      

      if(data.name === '')
      {
        console.log('El campo no puede estar vacio');
        return;
        
      }
      console.log(data);
      post(route('games.store'), {
        onFinish: () => reset('name', 'classification', 'genre', 'price'),
        
      })
      
      
    }
  return (
    <>
    <Navbar></Navbar>
    <div> Crear nuevo juego </div>

    <form onSubmit="{submit}">
        <h1>{data.name}</h1>
            <InputLabel htmlFor="name" value="Nombre" />
            <TextInput name="name" value={data.name} onChange=
            {(e) => setData('name', e.target.value)}>
            </TextInput>
            <InputError message={errors.name} className="mt-2"></InputError>

            <InputLabel htmlFor="classification" value="classification" />
            <TextInput name="classification" value={data.classification} onChange=
            {(e) => setData('classification', e.target.value)}>
            </TextInput>

            <InputLabel htmlFor="genre" value="genre" />
            <TextInput name="genre" value={data.genre} onChange=
            {(e) => setData('genre', e.target.value)}>
            </TextInput>

            <InputLabel htmlFor="price" value="price" />
            <TextInput name="price" value={data.price} onChange=
            {(e) => setData('price', e.target.value)}>
            </TextInput>
            <InputError message={errors.price} className="mt-2"></InputError>
            {error && (

            <button className="bg-black text-white p-4 rounded-lg" onClick={submit}>Guardar</button>
          )}
    </form>
    </>
  )
}

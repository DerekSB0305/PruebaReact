import Navbar from "@/Components/Navbar"
import TextInput from "@/Components/TextInput";
import { useState } from "react"
export default function Create() {
    
    const [name, setName] = useState();
  return (
    <>
    <Navbar></Navbar>
    <div> Crear nuevo juego </div>
    <form onSubmit="{submit}">
        <h1>{name}</h1>
            <TextInput name="name" value={name} onChange=
            {(e) => setName(e.target.value)}>

            </TextInput>
        {/* Poner los campos que faltan */}
    </form>
    </>
  )
}

import { useState, useEffect } from "react";
import Header from "./components/Header"
import Form from "./components/Form"
import PatientsList from "./components/PatientsList"

function App() {

  const [petients, setPetients] = useState(JSON.parse(localStorage.getItem('petients')) ?? []);
  const [petient, setPetient] = useState({});

  useEffect(() => {
    localStorage.setItem('petients', JSON.stringify(petients));
  }, [petients])

  const deletePetient = (id) => {
    const petientsUpdated = petients.filter(petient => petient.id !== id);
    setPetients(petientsUpdated);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          petients={petients}
          setPetients={setPetients}
          petient={petient}
          setPetient={setPetient}
        />
        <PatientsList
          petients={petients}
          setPetient={setPetient}
          deletePetient={deletePetient}
        />
      </div>
    </div>
  )
}

export default App

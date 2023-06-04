import { useState, useEffect } from "react"
import ErrorMessage from "./ErrorMessage";

function Form({ petients, setPetients, petient, setPetient }) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(petient).length > 0) {
      setName(petient.name);
      setOwner(petient.owner);
      setEmail(petient.email);
      setAlta(petient.alta);
      setSymptoms(petient.symptoms);
    }
  }, [petient])


  const generateId = () => {

    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36)
    let id = random + date;

    return id;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //? Validar Formulario
    if ([name, owner, email, alta, symptoms].includes("")) {
      console.log("No puede haber campos vacios.");
      setError(true);
      return;
    }

    setError(false);

    //? Objeto Paciente
    const petientObject = {
      name,
      owner,
      email,
      alta,
      symptoms
    }

    if (petient.id) {
      //? Editando registro
      petientObject.id = petient.id;

      const petientsUpdated = petients.map(petientState =>
        petientState.id === petient.id ? petientObject : petientState
      );

      setPetients(petientsUpdated);
      setPetient({})
    } else {
      //? Nuevo registro
      petientObject.id = generateId();
      setPetients([...petients, petientObject]);
    }

    //? Reiniciar formulario
    setName("");
    setOwner("");
    setEmail("");
    setAlta("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2  lg:w-2/5 mx-5">
      <h2 className=" font-black text-3xl text-center ">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className=" text-indigo-600 font-bold  ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >

        {
          error &&
          <ErrorMessage>
            <p>Todos los campos son obligatorios</p>
          </ErrorMessage>
        }

        <div className="mb-5">
          <label
            htmlFor="petName"
            className=" block text-gray-700 uppercase font-bold "
          >
            Nombre Mascota
          </label>
          <input
            id="petName"
            type="text"
            placeholder="Ej: Firulais"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-500 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="ownerName"
            className=" block text-gray-700 uppercase font-bold "
          >
            Nombre Propietario
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Ej: John Wick"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-500 "
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className=" block text-gray-700 uppercase font-bold "
          >
            Email
          </label>
          <input
            id="emil"
            type="emil"
            placeholder="Ej: johnwick@gmail.com"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-500 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className=" block text-gray-700 uppercase font-bold "
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-500 "
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className=" block text-gray-700 uppercase font-bold "

          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            cols="30"
            rows="8"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-500 "
            placeholder="Describe los síntomasEj: Tiene 3 días sin comer."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          value={petient.id ? "Editar Paciente" : "Agregar Paciente"}
          className=" 
          bg-indigo-600 w-full p-3 rounded-md
          text-white uppercase font-bold 
          hover:bg-indigo-800 cursor-pointer transition-all
          "
        />
      </form>

    </div>
  )
}

export default Form

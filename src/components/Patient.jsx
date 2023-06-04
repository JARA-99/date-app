function Patient({ petient, setPetient, deletePetient }) {

  const { name, owner, email, alta, symptoms, id } = petient

  const handleDelete = () => {
    const ansswer = confirm('Deseas eliminar este paciente?');

    if (ansswer) { deletePetient(id) }
  };

  return (
    <div className=" bg-white mx-5 my-10 shadow-md px-5 py-10 rounded-xl ">
      <p className=" font-bold mb-3 text-grey-700 uppercase ">
        Nombre: {" "}
        <samp className=" font-normal normal-case ">{name}</samp>
      </p>

      <p className=" font-bold mb-3 text-grey-700 uppercase ">
        Propietario: {" "}
        <samp className=" font-normal normal-case ">{owner}</samp>
      </p>

      <p className=" font-bold mb-3 text-grey-700 uppercase ">
        Email: {" "}
        <samp className=" font-normal normal-case ">{email}</samp>
      </p>

      <p className=" font-bold mb-3 text-grey-700 uppercase ">
        Fecha Alta: {" "}
        <samp className=" font-normal normal-case ">{alta}</samp>
      </p>

      <p className=" font-bold mb-3 text-grey-700 uppercase ">
        Síntomas: {" "}
        <samp className=" font-normal normal-case ">
          {symptoms}
        </samp>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="
          py-2 px-10 bg-indigo-500 
          hover:bg-indigo-700 
          text-white font-bold
          uppercase
          rounded-md
          "
          onClick={() => setPetient(petient)}
        >
          Editar
        </button>

        <button
          type="button"
          className="
          py-2 px-10 bg-red-500 
          hover:bg-red-700 
          text-white font-bold
          uppercase
          rounded-md
          "
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Patient

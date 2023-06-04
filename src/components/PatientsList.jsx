import Patient from "./Patient"

function PatientsList({ petients, setPetient, deletePetient }) {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {petients && petients.length ? (
        <>

          <h2
            className=" font-black text-3xl text-center "
          >
            Listado Pacientes
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className=" text-indigo-600 font-bold  ">Pacientes y Citas</span>
          </p>

          {
            petients.map((petient) => (
              <Patient
                key={petient.id}
                petient={petient}
                setPetient={setPetient}
                deletePetient={deletePetient}
              />
            ))
          }

        </>
      ) : (
        <>
          <h2
            className=" font-black text-3xl text-center "
          >
            No hay pacientes
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes {""}
            <span className=" text-indigo-600 font-bold  ">y apareceran en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default PatientsList

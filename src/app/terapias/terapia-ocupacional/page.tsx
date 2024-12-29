export default function TerapiaOcupacional() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Terapia Ocupacional</h2>
        <p className="text-gray-700 mb-6">
          A Terapia Ocupacional é focada no desenvolvimento de habilidades motoras, cognitivas e sociais para
          ajudar as crianças a se tornarem mais independentes em suas atividades diárias.
        </p>
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Principais objetivos:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Desenvolver habilidades motoras finas e grossas.</li>
          <li>Estimular a capacidade de se concentrar em tarefas diárias.</li>
          <li>Ajudar no desenvolvimento de habilidades sociais e comunicativas.</li>
          <li>Fomentar a autonomia e independência nas atividades diárias.</li>
        </ul>
        <a
          href="https://www.example.com/terapia-ocupacional"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Saiba mais sobre Terapia Ocupacional
        </a>
      </div>
    );
  }
  
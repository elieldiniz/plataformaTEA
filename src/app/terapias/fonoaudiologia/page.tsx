export default function Fonoaudiologia() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Fonoaudiologia</h2>
        <p className="text-gray-700 mb-6">
          A Fonoaudiologia visa ajudar crianças com TEA a desenvolverem suas habilidades de fala e comunicação
          através de terapias direcionadas.
        </p>
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Áreas de atuação:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Melhoria na articulação da fala.</li>
          <li>Desenvolvimento da comunicação verbal e não verbal.</li>
          <li>Estimulação da linguagem receptiva e expressiva.</li>
          <li>Apoio em questões relacionadas à deglutição e mastigação.</li>
        </ul>
        <a
          href="https://www.example.com/fonoaudiologia"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Saiba mais sobre Fonoaudiologia
        </a>
      </div>
    );
  }
  
export default function ABA() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
            ABA (Análise do Comportamento Aplicada)
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            ABA é uma abordagem baseada em evidências que utiliza princípios de análise do
            comportamento para promover habilidades e reduzir comportamentos desafiadores.
          </p>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>Foco em comportamentos específicos</li>
            <li>Abordagem individualizada</li>
            <li>Desenvolvimento de habilidades sociais, comunicação e acadêmicas</li>
          </ul>
          <div className="mt-8 text-center">
            <a
              href="https://www.example.com/aba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Saiba mais sobre ABA
            </a>
          </div>
        </div>
      </div>
    );
  }
  
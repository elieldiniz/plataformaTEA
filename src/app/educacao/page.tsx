import Link from 'next/link';

export default function educacao(){
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
          Educação e Inclusão Escolar
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore as diferentes dimensões da educação inclusiva para pessoas com TEA.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/educacao/pedagogia">
            <p className="block bg-green-300 text-green-900 text-center px-6 py-4 rounded-lg shadow hover:bg-green-400">
              Estratégias Pedagógicas para Inclusão
            </p>
          </Link>

          <Link href="/educacao/adaptacoesAmbientais">
            <p className="block bg-blue-300 text-blue-900 text-center px-6 py-4 rounded-lg shadow hover:bg-blue-400">
              Adaptações no Ambiente Escolar
            </p>
          </Link>

          <Link href="/educacao/formacaoProfessores">
            <p className="block bg-purple-300 text-purple-900 text-center px-6 py-4 rounded-lg shadow hover:bg-purple-400">
              Formação de Professores para Trabalhar com TEA
            </p>
          </Link>

          <Link href="/educacao/programasInclusao">
            <p className="block bg-orange-300 text-orange-900 text-center px-6 py-4 rounded-lg shadow hover:bg-orange-400">
              Programas de Inclusão Educacional
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
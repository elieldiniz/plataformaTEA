import Link from 'next/link';

export default function Direito() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
          Direitos e Legislações
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore informações importantes sobre os direitos das pessoas com TEA e suas famílias.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/direito/lbi">
            <p className="block bg-green-300 text-green-900 text-center px-6 py-4 rounded-lg shadow hover:bg-green-400">
              Lei Brasileira de Inclusão (LBI)
            </p>
          </Link>

          <Link href="/direito/bpc">
            <p className="block bg-blue-300 text-blue-900 text-center px-6 py-4 rounded-lg shadow hover:bg-blue-400">
              Benefício de Prestação Continuada (BPC)
            </p>
          </Link>

          <Link href="/direito/inclusao-escolar">
            <p className="block bg-purple-300 text-purple-900 text-center px-6 py-4 rounded-lg shadow hover:bg-purple-400">
              Direitos Educacionais e Inclusão Escolar
            </p>
          </Link>

          <Link href="/direito/politica-tea">
            <p className="block bg-orange-300 text-orange-900 text-center px-6 py-4 rounded-lg shadow hover:bg-orange-400">
              Política Nacional de Proteção dos Direitos da Pessoa com TEA
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

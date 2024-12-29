

import Link from 'next/link';

export default function Terapias(){
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
          Terapias e Tratamentos
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore informações importantes sobre terapias e Tratamentos das pessoas com TEA e suas famílias
        </p>

        <div className="grid gap-6 md:grid-cols-2">

        <Link href="/terapias/aba">
            <p className="block bg-green-300 text-green-900 text-center px-6 py-4 rounded-lg shadow hover:bg-green-400">
            ABA (Análise do Comportamento Aplicada)
            </p>
          </Link>


          <Link href="/terapias/teacch">
            <p className="block bg-green-300 text-green-900 text-center px-6 py-4 rounded-lg shadow hover:bg-green-400">
             TEACCH
            </p>
          </Link>

          <Link href="/terapias/terapia-ocupacional">
            <p className="block bg-blue-300 text-blue-900 text-center px-6 py-4 rounded-lg shadow hover:bg-blue-400">
             Terapia ocupacional
            </p>
          </Link>

          <Link href="/terapias/fonoaudiologia">
            <p className="block bg-purple-300 text-purple-900 text-center px-6 py-4 rounded-lg shadow hover:bg-purple-400">
              fonoaudiologia
            </p>
          </Link>

          <Link href="/terapias/IntegracaoSensorial">
            <p className="block bg-orange-300 text-orange-900 text-center px-6 py-4 rounded-lg shadow hover:bg-orange-400">
              Integração Sensorial
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

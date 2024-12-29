import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          Bem-vindo à Plataforma de Apoio
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Descubra recursos, informações e suporte para crianças com TEA e suas famílias.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/terapias">
            <p className="block bg-blue-300 text-blue-900 text-center px-6 py-4 rounded-lg shadow hover:bg-blue-400">
              Conheça Terapias e Tratamentos
            </p>
          </Link>

          <Link href="/direitos">
            <p className="block bg-green-300 text-green-900 text-center px-6 py-4 rounded-lg shadow hover:bg-green-400">
              Saiba Mais Sobre Seus Direitos
            </p>
          </Link>

          <Link href="/educacao">
            <p className="block bg-purple-300 text-purple-900 text-center px-6 py-4 rounded-lg shadow hover:bg-purple-400">
              Explore Estratégias de Inclusão Escolar
            </p>
          </Link>

          <Link href="/recursos">
            <p className="block bg-orange-300 text-orange-900 text-center px-6 py-4 rounded-lg shadow hover:bg-orange-400">
              Descubra Recursos Especializados
            </p>
          </Link>

          <Link href="/familias">
            <p className="block bg-teal-300 text-teal-900 text-center px-6 py-4 rounded-lg shadow hover:bg-teal-400">
              Apoio e Dicas para Famílias
            </p>
          </Link>

          <Link href="/tecnologias">
            <p className="block bg-yellow-300 text-yellow-900 text-center px-6 py-4 rounded-lg shadow hover:bg-yellow-400">
              Conheça Tecnologias Assistivas
            </p>
          </Link>

          <Link href="/saude">
            <p className="block bg-red-300 text-red-900 text-center px-6 py-4 rounded-lg shadow hover:bg-red-400">
              Cuidados com Saúde e Bem-Estar
            </p>
          </Link>

          <Link href="/eventos">
            <p className="block bg-indigo-300 text-indigo-900 text-center px-6 py-4 rounded-lg shadow hover:bg-indigo-400">
              Participe de Eventos e Grupos de Apoio
            </p>
          </Link>

          <Link href="/pesquisas">
            <p className="block bg-gray-300 text-gray-900 text-center px-6 py-4 rounded-lg shadow hover:bg-gray-400">
              Explore Pesquisas e Estudos Recentes
            </p>
          </Link>

          <Link href="/dicas">
            <p className="block bg-pink-300 text-pink-900 text-center px-6 py-4 rounded-lg shadow hover:bg-pink-400">
              Confira Dicas Práticas do Dia a Dia
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function RecursosServicos() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-blue-800 mb-8 text-center">
          Recursos e Serviços Especializados
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            O que são Recursos e Serviços Especializados?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Recursos e serviços especializados são fundamentais para oferecer suporte personalizado às crianças e jovens com Transtorno do Espectro Autista (TEA). Eles incluem clínicas especializadas, centros de desenvolvimento infantil, terapeutas e profissionais qualificados, além de grupos de apoio locais e regionais. Esses serviços desempenham um papel vital na promoção do desenvolvimento cognitivo, emocional e social dos indivíduos com TEA e de suas famílias.
          </p>
          <Link href="https://www.gov.br/mec" target="_blank">
            <p className="text-blue-500 hover:text-blue-700 underline cursor-pointer mt-2">
              Saiba mais sobre recursos especializados no site do MEC.
            </p>
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Principais Categorias de Serviços
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Os serviços especializados para TEA abrangem diversas áreas que atendem tanto às necessidades da criança quanto ao suporte às famílias. Entre os principais recursos estão:
          </p>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <Link href="/recursos/clinicas">
              <p className="block bg-blue-300 text-blue-900 text-center px-6 py-4 rounded-lg shadow hover:bg-blue-400 cursor-pointer">
                Clínicas Especializadas no Tratamento de TEA
              </p>
            </Link>

            <Link href="/recursos/centros">
              <p className="block bg-green-300 text-green-900 text-center px-6 py-4 rounded-lg shadow hover:bg-green-400 cursor-pointer">
                Centros de Apoio ao Desenvolvimento Infantil
              </p>
            </Link>

            <Link href="/recursos/terapeutas">
              <p className="block bg-purple-300 text-purple-900 text-center px-6 py-4 rounded-lg shadow hover:bg-purple-400 cursor-pointer">
                Contato de Terapeutas e Profissionais Especializados
              </p>
            </Link>

            <Link href="/recursos/grupos-apoio">
              <p className="block bg-orange-300 text-orange-900 text-center px-6 py-4 rounded-lg shadow hover:bg-orange-400 cursor-pointer">
                Grupos de Apoio Locais e Regionais
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Benefícios dos Recursos e Serviços Especializados
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Acesso a recursos especializados pode transformar a vida das pessoas com TEA e de suas famílias. Entre os principais benefícios estão:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>
              <strong>Desenvolvimento Personalizado:</strong> Abordagens individualizadas que atendem às necessidades específicas de cada criança.
            </li>
            <li>
              <strong>Melhora no Bem-Estar:</strong> Tratamentos e terapias que promovem avanços no comportamento, comunicação e integração social.
            </li>
            <li>
              <strong>Redução de Barreiras:</strong> Inclusão em atividades sociais e escolares por meio de suporte adequado.
            </li>
            <li>
              <strong>Apoio às Famílias:</strong> Orientação e suporte emocional para pais e cuidadores.
            </li>
          </ul>
          <Link href="https://www.gov.br/cidadania/pt-br/acoes-e-programas/servicos-de-assistencia-social" target="_blank">
            <p className="text-blue-500 hover:text-blue-700 underline cursor-pointer mt-2">
              Explore serviços de assistência social no site do Governo.
            </p>
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Importância de Grupos de Apoio
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Os grupos de apoio locais e regionais conectam famílias, oferecem suporte emocional e possibilitam a troca de experiências. Esses grupos são essenciais para reduzir o isolamento e aumentar a sensação de pertencimento.
          </p>
        </section>

        <Link href="https://www.gov.br/mec/" target="_blank">
          <p className="text-blue-500 hover:text-blue-700 text-center underline cursor-pointer">
            Acesse mais informações no site oficial do Ministério da Educação.
          </p>
        </Link>
      </div>
    </main>
  );
}

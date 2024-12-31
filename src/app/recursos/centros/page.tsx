import Link from 'next/link';

export default function CentrosApoioDesenvolvimentoInfantil() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-blue-800 mb-8 text-center">
          Centros de Apoio ao Desenvolvimento Infantil
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            O que são os Centros de Apoio ao Desenvolvimento Infantil?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Os Centros de Apoio ao Desenvolvimento Infantil (CADIs) são espaços especializados voltados para o cuidado, acompanhamento e estímulo ao desenvolvimento das crianças, especialmente aquelas com necessidades específicas, como o TEA. Esses centros são organizados por equipes multidisciplinares, compostas por psicólogos, pedagogos, terapeutas ocupacionais e outros profissionais especializados.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            O objetivo principal desses centros é fornecer um ambiente terapêutico, educacional e de apoio emocional para as crianças e suas famílias. A partir de avaliações individuais, é possível traçar um plano de intervenção que considera as necessidades de cada criança, promovendo a inclusão e o desenvolvimento das suas habilidades cognitivas, motoras e sociais.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Tipos de Serviços Oferecidos
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Os Centros de Apoio ao Desenvolvimento Infantil oferecem diversos serviços que são essenciais para o desenvolvimento de crianças com TEA. Alguns dos serviços oferecidos incluem:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>
              <strong>Avaliação e Diagnóstico:</strong> Avaliações detalhadas do desenvolvimento da criança, identificando necessidades específicas e traçando o melhor caminho de intervenção.
            </li>
            <li>
              <strong>Atendimento Terapêutico:</strong> Acompanhamento com terapeutas especializados em diferentes abordagens (como terapia ocupacional, fonoaudiologia, psicologia, entre outras).
            </li>
            <li>
              <strong>Programas Educacionais:</strong> Implementação de programas educacionais adaptados, que promovem o desenvolvimento da criança no ambiente escolar e social.
            </li>
            <li>
              <strong>Apoio à Família:</strong> Orientação e apoio às famílias para lidar com as dificuldades do dia a dia e garantir a melhor qualidade de vida para a criança.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Como Acessar os Centros de Apoio
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Para acessar os serviços dos Centros de Apoio ao Desenvolvimento Infantil, é importante conhecer as opções disponíveis na sua região. Muitas vezes, o primeiro passo é buscar informações em postos de saúde, hospitais e centros de atendimento psicológico ou social. Além disso, os Centros de Atenção Psicossocial (CAPS) também podem fornecer informações sobre como acessar esses serviços.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Muitas cidades oferecem esses serviços gratuitamente pelo Sistema Único de Saúde (SUS), mas também existem opções privadas. A busca por informações em associações locais de autismo e grupos de apoio pode ser útil para localizar os centros mais adequados.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Exemplos de Centros de Apoio no Brasil
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Em diversas regiões do Brasil, existem centros de apoio ao desenvolvimento infantil com foco no TEA, com destaque para instituições como o <strong>Centro de Reabilitação do Autista</strong> em São Paulo, e o <strong>Instituto Vencer Autismo</strong>, que oferecem atendimento especializado tanto para crianças quanto para suas famílias.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Além disso, organizações como a <strong>Associação Brasileira de Autismo (ABRA)</strong> têm parcerias com centros especializados, promovendo um atendimento integrado e eficiente. 
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Conclusão
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Os Centros de Apoio ao Desenvolvimento Infantil são fundamentais para o apoio das crianças com TEA e suas famílias, oferecendo recursos valiosos que favorecem a inclusão social e o bem-estar. O acesso a esses centros possibilita um acompanhamento de perto e especializado, contribuindo para que as crianças desenvolvam seu potencial máximo, independentemente de suas dificuldades.
          </p>
        </section>

        <footer className="mt-10 text-center">
          <Link href="https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/saude-mental" target="_blank">
            <p className="text-blue-500 hover:text-blue-700 underline cursor-pointer">
              Saiba mais sobre os Centros de Apoio ao Desenvolvimento Infantil no portal do Ministério da Saúde.
            </p>
          </Link>
        </footer>
      </div>
    </main>
  );
}

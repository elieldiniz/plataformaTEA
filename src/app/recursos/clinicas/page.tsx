import Link from 'next/link';

export default function ClinicasEspecializadas() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-purple-800 mb-8 text-center">
          Clínicas Especializadas no Tratamento de TEA
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            A importância das Clínicas Especializadas
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            As clínicas especializadas são essenciais no atendimento a pessoas com TEA, pois proporcionam diagnóstico precoce e intervenções terapêuticas personalizadas. Esses serviços são oferecidos por equipes multidisciplinares compostas por profissionais como psicólogos, terapeutas ocupacionais, fonoaudiólogos e neuropediatras. 
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Esses ambientes especializados oferecem um plano de cuidado individualizado, com base em métodos reconhecidos cientificamente, que ajudam no desenvolvimento de habilidades cognitivas, sociais e motoras. Além disso, as clínicas muitas vezes orientam famílias sobre como lidar com os desafios do dia a dia, promovendo maior inclusão e qualidade de vida.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Como Encontrar Clínicas Especializadas
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Localizar uma clínica especializada no tratamento de TEA pode ser desafiador, mas existem recursos importantes que podem ajudar:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>
              Verifique junto ao <strong>SUS</strong>, que oferece atendimentos especializados por meio de Centros de Atenção Psicossocial (CAPS).
            </li>
            <li>
              Consulte associações como a <strong>Associação Brasileira de Autismo (ABRA)</strong>, que frequentemente possuem listas de instituições confiáveis.
            </li>
            <li>
              Busque indicações em grupos de apoio e fóruns de discussão locais ou regionais, que podem fornecer recomendações de qualidade baseadas em experiências reais.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Exemplos de Intervenções Realizadas
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            As clínicas especializadas oferecem uma gama de intervenções adaptadas às necessidades de cada indivíduo. Algumas delas incluem:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>
              <strong>ABA (Análise do Comportamento Aplicada):</strong> Utilizado para trabalhar comportamentos específicos e desenvolver habilidades sociais.
            </li>
            <li>
              <strong>Fonoaudiologia:</strong> Voltada à melhora da comunicação, seja ela verbal ou alternativa.
            </li>
            <li>
              <strong>Musicoterapia:</strong> Usada para estimular habilidades sensoriais e emocionais.
            </li>
            <li>
              <strong>Terapia Ocupacional:</strong> Ajuda na adaptação às atividades diárias, promovendo maior autonomia.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Conclusão
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            O acesso a clínicas especializadas no tratamento de TEA é uma parte fundamental para garantir que as pessoas no espectro autista recebam o suporte necessário para se desenvolverem de forma saudável. Essas clínicas também desempenham um papel importante ao fornecer apoio emocional e prático às famílias, promovendo uma abordagem inclusiva e centrada na pessoa.
          </p>
        </section>

        <footer className="mt-10 text-center">
          <Link href="https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/saude-mental" target="_blank">
            <p className="text-purple-500 hover:text-purple-700 underline cursor-pointer">
              Saiba mais no portal do Ministério da Saúde.
            </p>
          </Link>
        </footer>
      </div>
    </main>
  );
}

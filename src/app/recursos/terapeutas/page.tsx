import Link from 'next/link';

export default function ContatoTerapeutas() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-purple-800 mb-8 text-center">
          Contato de Terapeutas e Profissionais Especializados no Tratamento de TEA
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            A Importância do Acompanhamento Profissional
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            A atuação de terapeutas e profissionais especializados é fundamental no desenvolvimento de crianças com Transtorno do Espectro Autista (TEA). Os profissionais adequados desempenham um papel crucial em diversas áreas, como comunicação, comportamento, habilidades sociais, e atividades do cotidiano.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Esses especialistas, como terapeutas ocupacionais, fonoaudiólogos, psicólogos, e pedagogos, trabalham em conjunto para promover a melhor qualidade de vida para as crianças e ajudar no seu desenvolvimento social e educacional. O acompanhamento de um profissional qualificado pode ajudar a identificar as necessidades específicas da criança e oferecer as terapias mais eficazes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Como Encontrar Terapeutas Especializados
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Encontrar terapeutas especializados para crianças com TEA pode ser uma tarefa desafiadora, mas é possível com a ajuda de fontes confiáveis. As opções incluem clínicas especializadas, organizações de apoio, grupos de pais e profissionais recomendados por médicos e psicólogos. Muitas cidades possuem serviços públicos ou ONGs que oferecem recursos para o tratamento e apoio a crianças com TEA.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>Clínicas especializadas em autismo</li>
            <li>Associações e organizações de apoio ao autismo</li>
            <li>Consultórios particulares de psicólogos e terapeutas ocupacionais</li>
            <li>Hospitais públicos ou privados que possuem departamentos de atendimento a pacientes com TEA</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Como Entrar em Contato com Terapeutas
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Após identificar os profissionais e centros de tratamento, o próximo passo é entrar em contato com eles. Muitos terapeutas e clínicas oferecem consultas iniciais gratuitas ou com valores reduzidos para avaliação, o que facilita o processo para a família. É importante verificar a experiência do profissional com o tratamento de TEA e pedir recomendações de outros pais ou especialistas.
          </p>
        </section>

        <footer className="mt-10 text-center">
          <Link href="/recursos/terapeutas">
            <p className="text-blue-500 hover:text-blue-700 underline cursor-pointer">
              Encontre terapeutas especializados perto de você.
            </p>
          </Link>
        </footer>
      </div>
    </main>
  );
}

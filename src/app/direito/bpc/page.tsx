export default function BPC() {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
            Benefício de Prestação Continuada (BPC)
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            O Benefício de Prestação Continuada (BPC) é um direito garantido pela Constituição Federal e regulamentado pela Lei Orgânica da Assistência Social (LOAS). Ele assegura um salário-mínimo mensal às pessoas com deficiência e aos idosos com 65 anos ou mais que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.
          </p>
  
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Requisitos para Solicitação</h3>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            <li>Ser pessoa com deficiência ou idoso com 65 anos ou mais.</li>
            <li>Comprovar renda familiar per capita inferior a 1/4 do salário-mínimo.</li>
            <li>Estar inscrito no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico).</li>
            <li>Passar por avaliação médica e social no INSS, no caso de pessoa com deficiência.</li>
          </ul>
  
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Importância do BPC</h3>
          <p className="text-lg text-gray-700 mb-8">
            O BPC é um instrumento fundamental para promover a dignidade e a qualidade de vida de pessoas em situação de vulnerabilidade social. Ele garante um mínimo de segurança financeira, contribuindo para a inclusão e o bem-estar dessas pessoas.
          </p>
  
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Como Solicitar</h3>
          <p className="text-lg text-gray-700 mb-8">
           {` A solicitação do BPC deve ser feita no INSS, por meio do site ou aplicativo "meu inss" ário reunir os documentos pessoais, além de comprovar os requisitos exigidos. Para mais informações e orientações detalhadas, clique no botão abaixo.`}
          </p>
          <div className="text-center">
            <a
              href="https://www.gov.br/mds/pt-br/acoes-e-programas/suas/beneficios-assistenciais/beneficio-assistencial-ao-idoso-e-a-pessoa-com-deficiencia-bpc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-300 text-blue-900 px-6 py-3 rounded-lg shadow hover:bg-blue-400"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </main>
    );
  }
  
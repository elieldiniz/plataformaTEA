export default function LBI() {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-50 to-green-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
            Lei Brasileira de Inclusão (LBI)
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            A Lei Brasileira de Inclusão (LBI), também conhecida como Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015), é um marco legal que garante os direitos das pessoas com deficiência no Brasil. Seu objetivo é assegurar a igualdade de oportunidades e a participação plena na sociedade, eliminando barreiras e promovendo a acessibilidade.
          </p>
  
          <h3 className="text-2xl font-bold text-green-600 mb-4">Principais Direitos Assegurados</h3>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            <li>Direito à educação inclusiva, com acesso às escolas regulares e adaptações necessárias.</li>
            <li>Direito ao trabalho, incluindo medidas que promovam a inserção no mercado de trabalho.</li>
            <li>Direito à saúde, com acesso a serviços de saúde acessíveis e adequados.</li>
            <li>Direito à acessibilidade, abrangendo transporte, comunicação, e espaços públicos e privados.</li>
            <li>Direito à cultura, esporte e lazer, com adaptação de equipamentos e eventos.</li>
          </ul>
  
          <h3 className="text-2xl font-bold text-green-600 mb-4">Impactos na Sociedade</h3>
          <p className="text-lg text-gray-700 mb-8">
            A LBI promove uma mudança de paradigma ao tratar as pessoas com deficiência como titulares de direitos e não como objetos de caridade. Ela reforça a responsabilidade de toda a sociedade em criar um ambiente inclusivo e igualitário, com base nos princípios da dignidade, autonomia e respeito às diferenças.
          </p>
  
          <h3 className="text-2xl font-bold text-green-600 mb-4">Mais Informações</h3>
          <p className="text-lg text-gray-700 mb-8">
            Para conhecer mais detalhes sobre a Lei Brasileira de Inclusão e acessar o texto completo da legislação, clique no botão abaixo.
          </p>
          <div className="text-center">
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-300 text-green-900 px-6 py-3 rounded-lg shadow hover:bg-green-400"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </main>
    );
  }
  
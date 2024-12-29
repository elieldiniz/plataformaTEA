export default function PoliticaTEA() {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
            Política Nacional de Proteção dos Direitos da Pessoa com TEA
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            A Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista (TEA) garante os direitos e a inclusão social das pessoas com TEA no Brasil. Essa lei busca promover a qualidade de vida, o acesso a serviços e a plena participação dessas pessoas na sociedade.
          </p>
  
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Principais Direitos Assegurados</h3>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            <li>Diagnóstico precoce e tratamento adequado.</li>
            <li>Educação inclusiva em todos os níveis.</li>
            <li>Acesso a serviços de saúde especializados.</li>
            <li>Comunicação alternativa e aumentativa (CAA).</li>
            <li>Atendimento prioritário em serviços públicos e privados.</li>
          </ul>
  
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Impactos na Sociedade</h3>
          <p className="text-lg text-gray-700 mb-8">
            A política promove a conscientização sobre o TEA, combate o preconceito e estimula a criação de um ambiente mais inclusivo para as pessoas com autismo. Ela também impulsiona a pesquisa e o desenvolvimento de recursos e serviços especializados.
          </p>
  
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Mais Informações</h3>
          <p className="text-lg text-gray-700 mb-8">
            Para conhecer mais detalhes sobre a Política Nacional de Proteção dos Direitos da Pessoa com TEA, consulte a Lei nº 12.764/2012.
          </p>
          <div className="text-center">
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm"
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
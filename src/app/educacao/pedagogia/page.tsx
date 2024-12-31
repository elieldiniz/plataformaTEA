import Link from 'next/link';

export default function Pedagogica() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Estratégias Pedagógicas para Inclusão de Estudantes com TEA
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          A inclusão educacional de estudantes com Transtorno do Espectro Autista (TEA) é um dos maiores desafios e avanços na educação atual. Esse processo exige planejamento, capacitação de educadores e estratégias pedagógicas adequadas. Aqui, exploramos métodos eficazes que promovem a integração e o aprendizado em ambientes inclusivos.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          A Importância das Estratégias Inclusivas
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A escola é um ambiente de convivência e desenvolvimento social. Para crianças com TEA, que apresentam desafios relacionados à comunicação, interação social e comportamento, as estratégias inclusivas são essenciais para criar um espaço acolhedor e efetivo. Isso inclui respeitar o ritmo de cada aluno e fornecer ferramentas que permitam sua plena participação.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Métodos e Práticas Pedagógicas
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <strong>Uso de Recursos Visuais:</strong> Cronogramas, tabelas e figuras ajudam a organizar a rotina e facilitar a compreensão das atividades.
          </li>
          <li>
            <strong>Ensino por Repetição:</strong> Estratégias baseadas na repetição favorecem o aprendizado de conceitos e habilidades.
          </li>
          <li>
            <strong>Adaptação Curricular:</strong> Ajustes nos conteúdos e métodos de ensino para atender às necessidades individuais.
          </li>
          <li>
            <strong>Reforço Positivo:</strong> Incentivar comportamentos desejados por meio de elogios e recompensas motivadoras.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Desafios e Soluções
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Apesar dos avanços na inclusão escolar, os professores frequentemente enfrentam desafios, como falta de formação adequada e recursos limitados. Investir na capacitação docente e em políticas públicas que apoiem a inclusão é essencial para superar essas barreiras.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          Além disso, o envolvimento da família no processo educacional fortalece os laços e ajuda a garantir que as estratégias utilizadas na escola sejam também aplicadas em casa.
        </p>

        <Link href="https://www.gov.br/educacao/estrategias-pedagogicas" target="_blank">
          <p className="text-green-500 hover:text-green-700 text-center underline cursor-pointer">
            Clique aqui para mais informações sobre estratégias pedagógicas inclusivas
          </p>
        </Link>
      </div>
    </main>
  );
}

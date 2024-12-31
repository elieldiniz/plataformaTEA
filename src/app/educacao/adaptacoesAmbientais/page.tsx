import Link from 'next/link';

export default function AdaptacoesAmbientais() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Adaptações no Ambiente Escolar para Estudantes com TEA
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Um ambiente escolar adaptado é crucial para o bem-estar e aprendizado de estudantes com Transtorno do Espectro Autista (TEA). Aqui abordamos as principais adaptações físicas e sensoriais que tornam as escolas mais inclusivas.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          O Papel do Ambiente Escolar na Inclusão
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Para os alunos com TEA, o ambiente físico pode ser tanto um aliado quanto um obstáculo no processo de aprendizagem. Por isso, é fundamental criar um espaço que minimize distrações, reduza estímulos excessivos e seja organizado para promover a autonomia e a concentração.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Principais Adaptações
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <strong>Espaços Sensorialmente Seguros:</strong> Áreas tranquilas para momentos de descanso e regulação emocional.
          </li>
          <li>
            <strong>Sinalização Visual:</strong> Mapas, etiquetas e instruções claras ajudam os alunos a se orientarem melhor no ambiente.
          </li>
          <li>
            <strong>Organização das Salas de Aula:</strong> Layout que favoreça a mobilidade e reduza estímulos sonoros e visuais.
          </li>
          <li>
            <strong>Acessibilidade:</strong> Rampas, banheiros adaptados e mobiliário adequado para todos os estudantes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Benefícios das Adaptações
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Quando o ambiente escolar é devidamente adaptado, ele não apenas promove o aprendizado, mas também contribui para o desenvolvimento emocional e social do aluno. Isso reforça o senso de pertencimento e inclusão.
        </p>

        <Link href="https://www.psicologiasdobrasil.com.br/autismo-e-escola" target="_blank">
          <p className="text-blue-500 hover:text-blue-700 text-center underline cursor-pointer">
            Clique aqui para mais informações sugestões adaptativas para crianças autistas na escola
          </p>
        </Link>
      </div>
    </main>
  );
}

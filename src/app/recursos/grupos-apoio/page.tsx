import Link from 'next/link';

export default function GruposApoio() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-orange-800 mb-8 text-center">
          Grupos de Apoio Locais e Regionais para Pais de Crianças com TEA
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-orange-700 mb-4">
            A Importância dos Grupos de Apoio para Pais e Cuidadores
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Os grupos de apoio são espaços fundamentais para pais e familiares de crianças com TEA. Eles oferecem um ambiente seguro e acolhedor para compartilhar experiências, tirar dúvidas e obter apoio emocional. Esses grupos podem ser presenciais ou virtuais, e são uma excelente oportunidade para os pais se conectarem com outras famílias que passam por situações semelhantes.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Além do apoio emocional, esses grupos também são fontes valiosas de informações sobre novos tratamentos, terapias, e recursos disponíveis para o tratamento do TEA. Os participantes podem trocar conselhos sobre práticas eficazes, bem como discutir questões legais e educacionais.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-orange-700 mb-4">
            Onde Encontrar Grupos de Apoio
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Existem várias maneiras de encontrar grupos de apoio locais e regionais. Muitos grupos de apoio estão disponíveis por meio de associações e ONGs dedicadas ao TEA. Além disso, existem plataformas online e redes sociais onde pais podem se conectar com outros cuidadores. Aqui estão algumas opções:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>Associações de Pais de Autistas e Organizações Não Governamentais (ONGs)</li>
            <li>Redes sociais como Facebook, Instagram e grupos de WhatsApp de pais de crianças com TEA</li>
            <li>Instituições de ensino que promovem eventos e workshops para pais e educadores</li>
            <li>Clínicas e centros de reabilitação que oferecem apoio psicológico e social para famílias</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-orange-700 mb-4">
            Benefícios de Participar de Grupos de Apoio
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Participar de grupos de apoio oferece uma série de benefícios para os pais e cuidadores. Entre os principais, destacam-se:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mt-4">
            <li>Redução do estresse e da sensação de isolamento</li>
            <li>Compartilhamento de informações sobre novas abordagens terapêuticas</li>
            <li>Desenvolvimento de novas amizades e redes de apoio</li>
            <li>Melhor compreensão das dificuldades e desafios enfrentados pelas crianças com TEA</li>
          </ul>
        </section>

        <footer className="mt-10 text-center">
          <Link href="/recursos/grupos-apoio">
            <p className="text-blue-500 hover:text-blue-700 underline cursor-pointer">
              Encontre um grupo de apoio perto de você
            </p>
          </Link>
        </footer>
      </div>
    </main>
  );
}

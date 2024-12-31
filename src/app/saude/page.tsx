import Head from 'next/head'

export default function SaudeBemEstar() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Head>
        <title>Saúde e Bem-Estar para Pessoas com TEA</title>
        <meta name="description" content="Cuidados médicos, nutricionais e estratégias de bem-estar para pessoas com TEA." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-8 text-center rounded-b-lg shadow-lg">
        <h1 className="text-4xl font-extrabold">Saúde e Bem-Estar para Pessoas com TEA</h1>
        <p className="text-lg mt-4">Cuidados médicos, nutricionais e estratégias para promover uma vida saudável e equilibrada</p>
      </header>

      <main className="py-12 px-6 bg-gray-50">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">1. Cuidados Médicos e Nutricionais</h2>
          <p className="text-lg mb-6 leading-relaxed">
            O acompanhamento médico é essencial para garantir a saúde física e mental das pessoas com TEA. Médicos especializados, como pediatras, neurologistas e psiquiatras, desempenham um papel importante no tratamento de comorbidades comuns, como distúrbios do sono, problemas digestivos e condições de saúde mental, como ansiedade e depressão.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            A nutrição adequada é um pilar fundamental para a saúde de indivíduos com TEA. Nutricionistas especializados podem criar planos alimentares que atendam às necessidades nutricionais específicas, promovendo uma dieta equilibrada que inclui alimentos ricos em ômega-3, antioxidantes, vitaminas e minerais.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Cuidados Nutricionais</h3>
          <p className="text-lg mb-6 leading-relaxed">
            A alimentação equilibrada é crucial para promover o bem-estar físico e mental. A dieta de uma pessoa com TEA pode precisar ser ajustada para superar dificuldades alimentares, como preferências restritas ou intolerâncias alimentares. O apoio de um nutricionista é importante para garantir que as necessidades nutricionais sejam atendidas.
          </p>

          <h2 className="text-3xl font-semibold text-blue-800 mb-6 mt-12">2. Atividades Físicas e Recreativas Adaptadas</h2>
          <p className="text-lg mb-6 leading-relaxed">
            A prática regular de atividades físicas é essencial para o bem-estar geral de pessoas com TEA. A atividade física não apenas melhora a saúde cardiovascular e muscular, mas também tem um impacto positivo no comportamento e na socialização.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Atividades como natação, yoga, caminhadas e jogos cooperativos são altamente recomendadas, pois ajudam a melhorar a flexibilidade, a coordenação e a resistência, além de promoverem o relaxamento e a interação social.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Exemplos de Atividades</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li className="text-lg">Natação: Benefícios para a coordenação e relaxamento muscular.</li>
            <li className="text-lg">Yoga: Melhora a flexibilidade e o controle da respiração.</li>
            <li className="text-lg">Caminhadas e corridas: Promovem resistência e bem-estar cardiovascular.</li>
            <li className="text-lg">Jogos cooperativos: Estimulam a socialização e o trabalho em equipe.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-blue-800 mb-6 mt-12">3. Estratégias para Manejo do Estresse e Ansiedade</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Muitas pessoas com TEA enfrentam níveis elevados de estresse e ansiedade, o que pode impactar negativamente sua qualidade de vida. Estratégias eficazes de manejo do estresse, como técnicas de relaxamento, meditação, terapias comportamentais e autorregulação sensorial, são fundamentais para reduzir esses sintomas.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Técnicas como mindfulness, respiração profunda e yoga são ótimas opções para ajudar a pessoa a se acalmar e manter o controle sobre suas emoções. Além disso, estabelecer rotinas estruturadas pode proporcionar um ambiente mais previsível e seguro.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Estratégias Comprovadas</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li className="text-lg">Técnicas de relaxamento e respiração profunda para reduzir a ansiedade.</li>
            <li className="text-lg">Mindfulness e meditação para promover o foco e o bem-estar emocional.</li>
            <li className="text-lg">Terapias comportamentais, como TCC, para ajudar a lidar com pensamentos negativos.</li>
            <li className="text-lg">Uso de dispositivos sensoriais para reduzir a sobrecarga sensorial.</li>
            <li className="text-lg">Estabelecimento de rotinas diárias para aumentar a sensação de controle e segurança.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center mt-12 rounded-t-lg shadow-lg">
        <p className="text-sm">© 2024 - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

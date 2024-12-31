import Head from 'next/head'

export default function Tecnologia() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Tecnologias Assistivas</title>
        <meta name="description" content="Tecnologias assistivas para pessoas com TEA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
            Tecnologias Assistivas
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Conheça as principais ferramentas e recursos que ajudam no desenvolvimento, comunicação e socialização de pessoas com TEA.
          </p>

          <section className="space-y-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4"> Aplicativos para Desenvolvimento de Habilidades</h2>
              <p className="text-gray-700 text-lg">
                Os aplicativos focados no desenvolvimento de habilidades para pessoas com Transtorno do Espectro Autista (TEA) são ferramentas essenciais para promover a autonomia, aprendizado e socialização. Alguns dos principais tipos incluem:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Comunicação social e linguagem:</strong> Aplicativos que auxiliam na aprendizagem de palavras e frases, estimulando a comunicação verbal e não-verbal.
                </li>
                <li>
                  <strong>Desenvolvimento cognitivo:</strong> Apps que trabalham o raciocínio lógico, matemática, leitura e habilidades cognitivas fundamentais.
                </li>
                <li>
                  <strong>Habilidades motoras:</strong> Aplicativos que ajudam no desenvolvimento motor, incluindo coordenação e controle de movimentos.
                </li>
                <li>
                  <strong>Autonomia e organização:</strong> Apps para ajudar a estruturar rotinas diárias, como agendamento de tarefas e lembretes.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Exemplos de aplicativos populares incluem *Proloquo2Go*, *Endless Reader* e *Autism iHelp*, que têm se mostrado eficazes no auxílio a indivíduos com TEA.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ferramentas de Comunicação Alternativa</h2>
              <p className="text-gray-700 text-lg">
                A Comunicação Alternativa e Aumentativa (CAA) é um conjunto de estratégias utilizadas para apoiar indivíduos com dificuldades de comunicação, como aqueles com TEA. Essas ferramentas incluem o uso de imagens, gestos ou dispositivos eletrônicos para substituir ou complementar a fala.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>PECS (Picture Exchange Communication System):</strong> Um sistema de troca de imagens que permite que a pessoa com TEA se comunique ao entregar cartões com imagens que representam objetos ou necessidades.
                </li>
                <li>
                  <strong>Dispositivos de voz:</strong> Ferramentas como o *Tobii Dynavox*, que permitem a comunicação por meio de símbolos visuais gerados por software.
                </li>
                <li>
                  <strong>Aplicativos de CAA:</strong> Aplicativos como o *TouchChat* e o *LAMP Words for Life* que ajudam a converter símbolos em fala, facilitando a comunicação.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Essas ferramentas reduzem a frustração ao proporcionar uma maneira eficiente e eficaz de se comunicar, aumentando a autonomia de indivíduos com TEA.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recursos Online para Aprendizado e Socialização</h2>
              <p className="text-gray-700 text-lg">
                A internet tem sido uma aliada poderosa no apoio ao aprendizado e à socialização de pessoas com TEA. Diversas plataformas e recursos digitais são disponibilizados para apoiar o desenvolvimento intelectual e a integração social. Entre esses recursos estão:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Plataformas educacionais:</strong> Websites como *Khan Academy*, *Coursera* e *Duolingo* oferecem cursos adaptáveis que ajudam no desenvolvimento de habilidades acadêmicas.
                </li>
                <li>
                  <strong>Fóruns e grupos de apoio:</strong> Plataformas online como grupos de Facebook ou fóruns especializados promovem a troca de experiências entre pais, cuidadores e profissionais da área.
                </li>
                <li>
                  <strong>Jogos terapêuticos:</strong> Jogos digitais como *The Social Express* ou *Model Me Kids* ajudam a ensinar habilidades sociais, como reconhecer emoções e interagir com outras pessoas.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Esses recursos digitais são fundamentais para a aprendizagem de novas habilidades, promovendo a inclusão social e a troca de experiências entre indivíduos com TEA e suas famílias.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tecnologias Assistivas no Ambiente Educacional</h2>
              <p className="text-gray-700 text-lg">
                As tecnologias assistivas têm sido amplamente adotadas no ambiente educacional, permitindo que estudantes com TEA acessem o currículo de forma mais eficiente. Elas incluem:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Software educacional:</strong> Ferramentas como *Kahoot* e *Quizlet* ajudam no ensino interativo e na revisão de conteúdos.
                </li>
                <li>
                  <strong>Ambientes virtuais:</strong> Plataformas como *Google Classroom* e *Microsoft Teams* oferecem soluções de aprendizagem a distância, com recursos como legendas e gravações.
                </li>
                <li>
                  <strong>Acessibilidade digital:</strong> Tecnologias de leitura de tela, como *NVDA* ou *JAWS*, são usadas por alunos com dificuldades visuais ou cognitivas para acessar conteúdos digitais.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Essas tecnologias ajudam a criar um ambiente de aprendizado inclusivo, onde os alunos com TEA podem ter uma experiência educacional adaptada às suas necessidades.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Tecnologias Assistivas - Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

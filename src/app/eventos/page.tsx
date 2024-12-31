/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Eventos() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">Eventos e Comunidade</h1>
          <p className="text-xl text-gray-600 mt-2">
            Conectando pessoas e promovendo a conscientização sobre o TEA
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">1. Encontros e Grupos de Apoio Locais</h2>
          <p className="text-lg text-gray-700 mb-4">
            Os encontros e grupos de apoio são fundamentais para criar uma rede de suporte entre as pessoas com TEA, suas
            famílias e profissionais da área. Esses eventos proporcionam um espaço seguro onde os participantes podem compartilhar
            experiências, desafios e soluções, além de buscar apoio emocional. Algumas das iniciativas mais comuns incluem:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><strong>Grupos de apoio para pais e familiares:</strong> Uma oportunidade para as famílias trocarem informações sobre estratégias de apoio.</li>
            <li><strong>Encontros para pessoas com TEA:</strong> Oferecendo atividades de socialização e desenvolvimento de habilidades.</li>
            <li><strong>Workshops e palestras educativas:</strong> Apresentação de temas relacionados ao TEA e apoio especializado.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">2. Campanhas de Conscientização sobre o TEA</h2>
          <p className="text-lg text-gray-700 mb-4">
            As campanhas de conscientização desempenham um papel fundamental na promoção do entendimento e aceitação do TEA na sociedade.
            Através de ações educativas, essas campanhas buscam esclarecer as características do transtorno, combater o estigma e promover
            a inclusão de pessoas com TEA em diversos contextos sociais. Alguns exemplos de campanhas incluem:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><strong>Mês de Conscientização do Autismo (Abril Azul):</strong> Campanhas globais e locais realizadas durante abril para aumentar a conscientização sobre o TEA.</li>
            <li><strong>Campanhas nas escolas e empresas:</strong> Promoção da inclusão por meio de treinamentos e sensibilização.</li>
            <li><strong>Mídias sociais e influenciadores:</strong> Uso de plataformas sociais para divulgar informações e histórias sobre o TEA.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">3. Eventos como o Dia Mundial da Conscientização do Autismo</h2>
          <p className="text-lg text-gray-700 mb-4">
            O Dia Mundial da Conscientização do Autismo, comemorado em 2 de abril, é um dos eventos mais importantes no calendário mundial
            para a promoção do entendimento sobre o TEA. Este dia foi criado pela Assembleia Geral das Nações Unidas em 2007 e tem como objetivo
            aumentar a conscientização global sobre o autismo e os desafios enfrentados pelas pessoas com TEA.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><strong>Iluminação de monumentos e prédios públicos em azul:</strong> A campanha "Ilumine Azul" busca chamar atenção para o TEA.</li>
            <li><strong>Feiras de informações e exposições:</strong> Feiras organizadas em várias cidades para educar o público sobre o TEA.</li>
            <li><strong>Palestras e seminários:</strong> Ações educativas realizadas por especialistas sobre o TEA.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">4. A Importância de Participar da Comunidade</h2>
          <p className="text-lg text-gray-700 mb-4">
            Participar de eventos comunitários e ações de conscientização não só traz benefícios diretos para pessoas com TEA, mas também
            fortalece a rede de apoio para as famílias. A interação com outras pessoas que compartilham experiências semelhantes promove
            a criação de laços, solidariedade e compreensão. Além disso, esses eventos oferecem um espaço para promover a inclusão e o respeito
            à diversidade, ensinando à sociedade como lidar com o TEA e criar um ambiente mais acolhedor e acessível para todos.
          </p>
        </section>

        <footer className="text-center py-8">
          <p className="text-lg text-gray-600">© 2024 Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

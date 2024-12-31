/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Pesquisas() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">
            Pesquisas e Estudos Científicos sobre Autismo
          </h1>
        </header>
        
        <section>
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Estudos Recentes sobre Autismo</h2>
          <p className="text-lg leading-relaxed mb-6">
            Diversas pesquisas recentes abordam diferentes aspectos do autismo, incluindo suas causas genéticas,
            fatores ambientais, e tratamentos eficazes. Alguns dos destaques incluem:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li className="text-lg">
              <strong>Genética e Biologia Molecular do Autismo:</strong> Pesquisas têm identificado genes associados ao risco
              de autismo, bem como a relação entre variações genéticas e o desenvolvimento cerebral. Esses estudos são
              essenciais para a compreensão das causas biológicas do TEA e para o desenvolvimento de tratamentos mais
              eficazes.
            </li>
            <li className="text-lg">
              <strong>Diagnóstico Precoce e Intervenção:</strong> Estudo recente publicado na
              <i> Lancet Psychiatry </i> aponta que a detecção precoce do autismo pode melhorar significativamente os
              resultados de desenvolvimento. Com ferramentas mais precisas e acessíveis, os médicos conseguem diagnosticar
              o autismo mais cedo, permitindo intervenções que ajudam as crianças a atingir seu potencial máximo.
            </li>
            <li className="text-lg">
              <strong>Neurodesenvolvimento e Intervenções Comportamentais:</strong> Pesquisas focadas em terapias comportamentais,
              como a Análise Comportamental Aplicada (ABA), têm mostrado resultados positivos, especialmente quando iniciadas
              nos primeiros anos de vida. Estes estudos ressaltam a importância de práticas personalizadas e de longo prazo
              para melhorar as habilidades sociais, comunicativas e cognitivas.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Publicações de Relevância Nacional e Internacional</h2>
          <p className="text-lg leading-relaxed mb-6">
            Existem várias publicações e periódicos científicos que se dedicam ao estudo do autismo, e muitos deles têm um
            alcance global. Algumas das publicações de maior relevância incluem:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li className="text-lg">Journal of Autism and Developmental Disorders</li>
            <li className="text-lg">Autism Research</li>
            <li className="text-lg">Revista Brasileira de Terapias Cognitivas e Comportamentais</li>
            <li className="text-lg">Archives of General Psychiatry</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Artigos sobre Práticas Baseadas em Evidências</h2>
          <p className="text-lg leading-relaxed mb-6">
            As práticas baseadas em evidências são aquelas que se fundamentam em pesquisas científicas rigorosas e são
            comprovadas como eficazes. No campo do autismo, essas práticas incluem terapias comportamentais, intervenções
            educacionais, apoio familiar, e tratamentos médicos.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li className="text-lg">
              <strong>Análise Comportamental Aplicada (ABA):</strong> A ABA é uma abordagem amplamente utilizada para crianças
              com autismo. Diversos estudos, como os publicados em <i>Behavior Analysis in Practice</i>, demonstram que a
              ABA melhora significativamente a comunicação, as habilidades sociais e o comportamento adaptativo.
            </li>
            <li className="text-lg">
              <strong>Terapia Ocupacional e Fonoaudiologia:</strong> A terapia ocupacional e a fonoaudiologia têm se mostrado
              eficazes no tratamento de dificuldades sensoriais e de comunicação de indivíduos com TEA. Artigos como
              "Intervenções baseadas em evidências no autismo: Uma revisão das terapias sensoriais" publicados em revistas
              como <i>Clinical Psychology Review</i> e <i>Journal of Autism and Developmental Disorders</i> mostram que
              essas abordagens ajudam a melhorar a qualidade de vida.
            </li>
            <li className="text-lg">
              <strong>Estratégias Educacionais e Inclusão Escolar:</strong> Programas de inclusão escolar e abordagens
              educacionais personalizadas são fundamentais para o desenvolvimento acadêmico de crianças com autismo. Artigos
              publicados na <i>Journal of Special Education</i> enfatizam o impacto positivo de métodos como o ensino estruturado,
              programas de habilidades sociais e adaptações curriculares.
            </li>
            <li className="text-lg">
              <strong>Tratamento Medicamentoso e Terapias Complementares:</strong> Embora o tratamento medicamentoso não cure
              o autismo, alguns medicamentos, como os usados para tratar ansiedade ou hiperatividade, têm mostrado ser úteis
              no gerenciamento de sintomas. Estudos recentes, como os publicados em <i>The Lancet Psychiatry</i>, exploram a
              eficácia desses tratamentos, juntamente com terapias complementares como o uso de dietas especiais e suplementos.
            </li>
          </ul>
        </section>

        <footer className="mt-16 text-center py-6 bg-blue-500 text-white">
          <p>&copy; 2024 Pesquisas sobre Autismo. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

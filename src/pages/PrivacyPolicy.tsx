import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-stone-600 mx-auto mb-4" />
            <h1 className="text-4xl font-light text-stone-800 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-stone-600 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Introdução
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              A Monxoros Expedition ("nós", "nosso" ou "empresa") está comprometida em proteger 
              sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, 
              divulgamos e protegemos suas informações quando você visita nosso site ou se 
              inscreve em nossos serviços.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Esta política está em conformidade com a Lei de Privacidade do Consumidor da 
              Califórnia (CCPA) e outras leis de privacidade aplicáveis.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Informações que Coletamos
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-stone-700 mb-2">
                  Informações Fornecidas Voluntariamente
                </h3>
                <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                  <li>Endereço de email (newsletter e formulário de aplicação)</li>
                  <li>Nome completo (formulário de aplicação)</li>
                  <li>Número de telefone (formulário de aplicação)</li>
                  <li>Informações sobre interesses de viagem</li>
                  <li>Consultas e mensagens enviadas através de formulários</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-stone-700 mb-2">
                  Informações Coletadas Automaticamente
                </h3>
                <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                  <li>Dados de performance do site (via Vercel Speed Insights)</li>
                  <li>Informações de navegação e uso do site</li>
                  <li>Endereço IP e localização aproximada</li>
                  <li>Tipo de dispositivo e navegador</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Como Usamos Suas Informações
            </h2>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Enviar newsletters e comunicações sobre expedições fotográficas</li>
              <li>Processar aplicações para workshops e expedições</li>
              <li>Responder a consultas e fornecer suporte ao cliente</li>
              <li>Melhorar a performance e funcionalidade do nosso site</li>
              <li>Analisar tendências de uso para aprimorar nossos serviços</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              Compartilhamento de Informações
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Não vendemos, alugamos ou comercializamos suas informações pessoais. 
              Podemos compartilhar suas informações apenas nas seguintes circunstâncias:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Com provedores de serviços terceirizados (Google Sheets, Gmail API)</li>
              <li>Para cumprir obrigações legais ou ordens judiciais</li>
              <li>Para proteger nossos direitos, propriedade ou segurança</li>
              <li>Com seu consentimento explícito</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2" />
              Segurança dos Dados
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas 
              para proteger suas informações pessoais contra acesso não autorizado, 
              alteração, divulgação ou destruição.
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Validação e sanitização de dados de entrada</li>
              <li>Acesso restrito a informações pessoais</li>
              <li>Monitoramento regular de segurança</li>
            </ul>
          </section>

          {/* CCPA Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Seus Direitos sob a CCPA (Califórnia)
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Se você é residente da Califórnia, tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li><strong>Direito de Saber:</strong> Solicitar informações sobre dados coletados</li>
              <li><strong>Direito de Deletar:</strong> Solicitar exclusão de seus dados pessoais</li>
              <li><strong>Direito de Opt-Out:</strong> Recusar a venda de dados pessoais</li>
              <li><strong>Direito de Não Discriminação:</strong> Não ser discriminado por exercer seus direitos</li>
            </ul>
            <p className="text-stone-600 leading-relaxed mt-4">
              Para exercer esses direitos, entre em contato conosco através do email: 
              <a href="mailto:privacy@monxorosexpedition.com" className="text-stone-800 underline">
                privacy@monxorosexpedition.com
              </a>
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Retenção de Dados
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Mantemos suas informações pessoais apenas pelo tempo necessário para 
              cumprir os propósitos descritos nesta política, a menos que um período 
              de retenção mais longo seja exigido ou permitido por lei.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência 
              em nosso site. Isso inclui:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Cookies de performance (Vercel Speed Insights)</li>
              <li>Cookies funcionais para melhorar a navegação</li>
              <li>Análise de uso do site para otimização</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Contato
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou quiser 
              exercer seus direitos, entre em contato conosco:
            </p>
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-stone-600">
                <strong>Email:</strong> privacy@monxorosexpedition.com<br />
                <strong>Telefone:</strong> +55 (11) 99999-9999<br />
                <strong>Endereço:</strong> São Paulo, SP, Brasil
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Atualizações desta Política
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. 
              Notificaremos sobre mudanças significativas através de nosso site 
              ou por email. Recomendamos que revise esta política regularmente.
            </p>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-stone-200">
            <p className="text-stone-500 text-sm">
              Esta política está em conformidade com CCPA, LGPD e outras leis de privacidade aplicáveis.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
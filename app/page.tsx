import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Heart,
  TrendingUp,
  MessageCircle,
  Mail,
  MapPin,
  Database,
  Brain,
  FileText,
  ExternalLink,
  LineChart,
  PieChart,
  Map,
  FileBarChart,
  FileSpreadsheet,
  FileTextIcon as FileText2,
  Layers,
  Presentation,
  Lightbulb,
  Target,
  CheckCircle2,
  Workflow,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Evida</span>
          </div>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#equipe" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Equipe
          </Link>
          <Link href="#servicos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Serviços
          </Link>
          <Link href="#projetos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Projetos
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contato
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 text-blue-700">
              Estudos de Dados Aplicados às Políticas Públicas
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  Ciência de Dados
                </span>
                <br />
                <span className="text-gray-900">aplicada à saúde e ao</span>
                <br />
                <span className="text-gray-900">desenvolvimento social</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-xl text-gray-600 md:text-2xl/relaxed">
                Combinamos <strong>rigor científico</strong> e <strong>inovação tecnológica</strong> para transformar
                dados em políticas públicas baseadas em evidências, com responsabilidade técnica e impacto social
                mensurável.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="https://wa.me/5511910634711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 px-8 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale com a nossa equipe!
              </Link>
              <Link
                href="#projetos"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-sm font-medium text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Nossa Equipe</h2>
            <p className="max-w-[600px] text-gray-600 text-lg">
              Dois perfis complementares que unem expertise científica e inovação tecnológica
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Dr. Aparecido */}
            <Card className="border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Dr. Aparecido Almeida</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Especialista Científico
                    </Badge>
                  </div>
                  <div className="space-y-3 text-left w-full">
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Epidemiologista</strong> com doutorado pela USP, especialista em análise espacial,
                      geoprocessamento e saúde ambiental.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Expertise em análise espacial e geoprocessamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Experiência com SINAN, CADÚnico e Bolsa Família</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Responsável técnico e validação científica dos estudos</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="http://lattes.cnpq.br/9277586103197210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Currículo Lattes
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Nathan */}
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Equipe de Dados</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Especialistas Técnicos
                    </Badge>
                  </div>
                  <div className="space-y-3 text-left w-full">
                    <p className="text-gray-600 leading-relaxed">
                      Time multidisciplinar de especialistas em engenharia de dados, ciência de dados e inteligência
                      artificial, com experiência em soluções tecnológicas para o setor público.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <Database className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Engenheiros de dados e cientistas especializados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Brain className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Expertise em cloud computing e big data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart3 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Desenvolvimento de soluções de IA e automação</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="#equipe"
                    className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    Conheça Nossa Equipe
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Nossos Serviços</h2>
            <p className="max-w-[800px] text-gray-600 text-lg">
              Soluções completas que combinam rigor científico e inovação tecnológica para políticas públicas baseadas
              em evidências
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow bg-white/80">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Estudos Epidemiológicos com Georreferenciamento</h3>
                <p className="text-gray-600">
                  Análise espacial de dados de saúde, mapeamento de riscos e identificação de padrões epidemiológicos
                  com validação científica rigorosa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow bg-white/80">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Integração de Dados Socioassistenciais</h3>
                <p className="text-gray-600">
                  Processamento e análise de grandes bases como CADÚnico, Bolsa Família e SINAN para vigilância
                  socioassistencial e avaliação de programas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow bg-white/80">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Visualização e BI para Políticas Públicas</h3>
                <p className="text-gray-600">
                  Dashboards interativos e relatórios executivos que transformam dados complexos em insights claros para
                  tomada de decisão.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-white/80">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automação de Fluxos e Dashboards</h3>
                <p className="text-gray-600">
                  Pipelines automatizados de dados, integração com APIs e deploy em produção para monitoramento contínuo
                  de indicadores.
                </p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow bg-white/80">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">IA Generativa para Síntese de Documentos</h3>
                <p className="text-gray-600">
                  Automação de relatórios, síntese de evidências científicas e suporte à tomada de decisão com IA
                  generativa e processamento de linguagem natural.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow bg-white/80">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Saúde Ambiental e Meio Ambiente</h3>
                <p className="text-gray-600">
                  Análise de impactos ambientais na saúde pública, monitoramento de indicadores ambientais e avaliação
                  de políticas de sustentabilidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section - EXPANDED */}
      <section id="projetos" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Projetos e Resultados</h2>
            <p className="max-w-[800px] text-gray-600 text-lg">
              Conheça o potencial transformador dos nossos projetos de dados e os resultados que podemos entregar para
              sua organização
            </p>
          </div>

          {/* Tipos de Projetos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Tipos de Projetos</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Map className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Mapeamento Epidemiológico</h4>
                  <p className="text-gray-600 text-sm">
                    Análise espacial de doenças e agravos, identificando clusters, áreas de risco e padrões de dispersão
                    para orientar ações preventivas e intervenções territorializadas.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="mr-1 mb-1">
                      Georreferenciamento
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Análise Espacial
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Saúde Pública
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileBarChart className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Diagnóstico Socioassistencial</h4>
                  <p className="text-gray-600 text-sm">
                    Análise integrada de dados do CADÚnico, Bolsa Família e outros programas sociais para mapear
                    vulnerabilidades, avaliar cobertura de serviços e identificar lacunas assistenciais.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="mr-1 mb-1">
                      Assistência Social
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Vulnerabilidade
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Políticas Públicas
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Monitoramento de Indicadores</h4>
                  <p className="text-gray-600 text-sm">
                    Desenvolvimento de sistemas automatizados para acompanhamento contínuo de indicadores de saúde,
                    educação e desenvolvimento social, com alertas e detecção precoce de tendências.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="mr-1 mb-1">
                      Dashboards
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Automação
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Séries Temporais
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Análise Preditiva</h4>
                  <p className="text-gray-600 text-sm">
                    Modelos estatísticos e de machine learning para prever tendências, identificar fatores de risco e
                    antecipar cenários em saúde pública e desenvolvimento social.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="mr-1 mb-1">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Previsão
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Modelagem
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FileSpreadsheet className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Integração de Bases de Dados</h4>
                  <p className="text-gray-600 text-sm">
                    Unificação e harmonização de diferentes fontes de dados governamentais para análises integradas,
                    criando visões holísticas dos fenômenos sociais e de saúde.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="mr-1 mb-1">
                      ETL
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Data Lake
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Interoperabilidade
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FileText2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Avaliação de Políticas Públicas</h4>
                  <p className="text-gray-600 text-sm">
                    Metodologias científicas para mensurar impacto, efetividade e custo-benefício de programas e
                    políticas públicas, gerando evidências para aprimoramento contínuo.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="mr-1 mb-1">
                      Avaliação de Impacto
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Evidências
                    </Badge>
                    <Badge variant="outline" className="mr-1 mb-1">
                      Gestão Pública
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Entregáveis */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">O Que Entregamos</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Dashboards Interativos</h4>
                <p className="text-sm text-gray-600">
                  Painéis dinâmicos e personalizados para visualização de dados em tempo real, com filtros e drill-down
                  para análises detalhadas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Map className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Mapas Georreferenciados</h4>
                <p className="text-sm text-gray-600">
                  Visualizações espaciais com camadas de informação, hotspots e análises territoriais para compreensão
                  geográfica dos fenômenos.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Relatórios Técnicos</h4>
                <p className="text-sm text-gray-600">
                  Documentos científicos com metodologia rigorosa, análises estatísticas e recomendações baseadas em
                  evidências.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Layers className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900">APIs e Integrações</h4>
                <p className="text-sm text-gray-600">
                  Interfaces programáticas para integração com sistemas existentes, permitindo fluxo contínuo e
                  automatizado de dados.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <Presentation className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Apresentações Executivas</h4>
                <p className="text-sm text-gray-600">
                  Sínteses visuais e objetivas para tomadores de decisão, destacando insights principais e recomendações
                  estratégicas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Workflow className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Fluxos Automatizados</h4>
                <p className="text-sm text-gray-600">
                  Pipelines de dados e processos automatizados para atualização contínua de indicadores e alertas em
                  tempo real.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Recomendações Estratégicas</h4>
                <p className="text-sm text-gray-600">
                  Orientações práticas e fundamentadas para aprimoramento de políticas públicas e tomada de decisão
                  baseada em dados.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Modelos Preditivos</h4>
                <p className="text-sm text-gray-600">
                  Algoritmos e modelos estatísticos para previsão de cenários, identificação de riscos e antecipação de
                  tendências.
                </p>
              </div>
            </div>
          </div>

          {/* Casos de Uso */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Casos de Uso</h3>
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">Saúde Pública</Badge>
                  <h4 className="text-lg font-semibold text-gray-900">Vigilância Epidemiológica Territorial</h4>
                  <p className="text-gray-600 text-sm">
                    Sistema integrado de monitoramento georreferenciado de doenças transmissíveis, com alertas precoces
                    e identificação de clusters para intervenções rápidas e direcionadas.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Mapeamento de casos por território</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Detecção automática de surtos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Análise de fatores ambientais associados</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-green-100 text-green-700 border-green-200">Assistência Social</Badge>
                  <h4 className="text-lg font-semibold text-gray-900">Diagnóstico de Vulnerabilidade Social</h4>
                  <p className="text-gray-600 text-sm">
                    Análise multidimensional de dados do CADÚnico para identificação de territórios vulneráveis e
                    famílias em risco, orientando a distribuição de recursos e serviços socioassistenciais.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Índice de vulnerabilidade territorial</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Mapeamento de cobertura de programas sociais</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Identificação de lacunas assistenciais</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">Meio Ambiente</Badge>
                  <h4 className="text-lg font-semibold text-gray-900">Impacto Ambiental na Saúde</h4>
                  <p className="text-gray-600 text-sm">
                    Análise da correlação entre fatores ambientais (poluição, áreas contaminadas) e indicadores de
                    saúde, identificando relações causais e orientando políticas de saúde ambiental.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Correlação espacial ambiente-saúde</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Monitoramento de áreas contaminadas</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Avaliação de impacto de políticas ambientais</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">Gestão Pública</Badge>
                  <h4 className="text-lg font-semibold text-gray-900">Avaliação de Programas Sociais</h4>
                  <p className="text-gray-600 text-sm">
                    Metodologia científica para mensurar o impacto e efetividade de programas sociais, com indicadores
                    de resultado, análise de custo-benefício e recomendações para aprimoramento.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Indicadores de resultado e impacto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Análise de custo-efetividade</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Recomendações baseadas em evidências</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Transforme Dados em Políticas Públicas Eficazes</h3>
            <p className="mb-6 text-blue-100">
              Estamos prontos para desenvolver soluções personalizadas que atendam às necessidades específicas da sua
              organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5511910634711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale com a nossa equipe!
              </Link>
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-white/20"
              >
                Solicitar Proposta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vamos Transformar Dados em Impacto?</h2>
            <p className="max-w-[600px] text-blue-100 text-lg">
              Entre em contato para discutir como podemos contribuir com seu projeto de políticas públicas baseadas em
              evidências.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link
                href="https://wa.me/5511910634711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 px-8 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale com a nossa equipe!
              </Link>
              <Link
                href="mailto:contato@datahubsaude.com"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-white/20"
              >
                <Mail className="mr-2 h-4 w-4" />
                E-mail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-3 items-center">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-400" />
              <span className="font-semibold">Evida</span>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">Responsável Técnico:</p>
              <div className="space-y-1">
                <p className="text-sm font-medium">Dr. Aparecido Almeida</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <Link
                href="http://lattes.cnpq.br/9277586103197210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                <ExternalLink className="h-4 w-4" />
                Lattes - Dr. Aparecido
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-xs text-gray-400">
              © 2024 Evida. Estudos de dados aplicados às políticas públicas com responsabilidade técnica e impacto
              social.
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <Link
        href="https://wa.me/5511910634711"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all hover:bg-green-700 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </div>
  )
}

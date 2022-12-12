import { AssetControlContent, CardContent, ClientsContainer, DataTractian, FeedbackContainer, FooterContainer, Header, HomeContainer, ImageContainer, ImageContent, Sensor, SensorContent, SensorDescrition, SensorName, SocialContent, SubTitle, Summary, Title, TitleForm, TopContent, TypesSolutions } from "./styles";
import logo from '../../Assets/logo.svg'
import logoFooter from '../../Assets/logoFooter.svg'
import sensorFunc from '../../Assets/sensor_func.svg'
import iconVibration from '../../Assets/icon_vibration.svg'
import iconEnergy from '../../Assets/icon_energy.svg'
import iconMonitor from '../../Assets/icon_monitor.svg'
import sensorEnergy from '../../Assets/sensor_energy.svg'
import sensorVibration from '../../Assets/sensor_vibration.svg'

import logoGoodyear from '../../Assets/logoGoodyear.svg'
import logoKarcher from '../../Assets/logoKarcher.svg'
import logoMartMinas from '../../Assets/logoMartMinas.svg'
import logoPetrobras from '../../Assets/logoPetrobras.svg'
import logoSuzano from '../../Assets/logoSuzano.svg'
import logoTigre from '../../Assets/logoTigre.svg'
import logoBoticario from '../../Assets/logoBoticario.svg'
import logoRenault from '../../Assets/logoRenault.svg'

import Avatar1 from '../../Assets/Avatar1.svg'
import Avatar2 from '../../Assets/Avatar2.svg'
import Avatar3 from '../../Assets/Avatar3.svg'
import Avatar4 from '../../Assets/Avatar4.svg'

import Instagram from '../../Assets/instagram.svg'
import Facebook from '../../Assets/facebook.svg'
import Linkedin from '../../Assets/linkedin.svg'
import Youtube from '../../Assets/youtube.svg'
import Tiktok from '../../Assets/tiktok.svg'


import dashboardAsset from '../../Assets/dashboardImage.jpeg'
import Solution from "../../Components/Solution";
import { dataCardMonitoramento, dataCardIoT, dataCardAtivos, dataCardPreventiva, dataEnergy, dataSupervisorio, dataVibration } from "../../Data/data";
import TitleSection from "../../Components/Title";
import Card from "../../Components/Card";
import ButtonContact from "../../Components/Button";
import Section from "../../Components/Section";
import CardFeedback from "../../Components/CardFeedback";
import FormContact from "../../Components/FormContact";
import { SubmitContent } from "../../Components/FormContact/styles";

export default function Home() {
  return (
    <HomeContainer>
      <Header>
        <img src={logo} />
      </Header>

      <Summary>
        <TopContent>
          <Title>
            Monitoramento Online e Gestão de Ativos em um só lugar
          </Title>

          <ImageContent>
            <img src={sensorFunc} alt="alustração sensor de vibração da TRACTIAN" />
          </ImageContent>
        </TopContent>

        <ButtonContact titleButton="Solititar demonstração" />

        <TypesSolutions>
          <Solution
            icon={iconVibration}
            title={dataVibration.title}
            description={dataVibration.description}
          />
          <Solution
            icon={iconEnergy}
            title={dataEnergy.title}
            description={dataEnergy.description}
          />
          <Solution
            icon={iconMonitor}
            title={dataSupervisorio.title}
            description={dataSupervisorio.description}
          />

        </TypesSolutions>
      </Summary>

      {/* Session how to works */}
      <Section>
        <TitleSection title="Como Funciona?" />
        <CardContent>
          <Card
            title={dataCardMonitoramento.title}
            description={dataCardMonitoramento.description}
          >
            <SubmitContent>
              <ButtonContact titleButton="Quero monitorar Online" />
            </SubmitContent>
          </Card>

          <Card
            title={dataCardIoT.title}
            description={dataCardIoT.description}
          >
            <SubmitContent>

              <ButtonContact titleButton="Quero mais insights" />
            </SubmitContent>
          </Card>

          <Card
            title={dataCardAtivos.title}
            description={dataCardAtivos.description}
          >
            <SubmitContent>
              <ButtonContact titleButton="Veja CMMS na prática" />
            </SubmitContent>
          </Card>

          <Card
            title={dataCardPreventiva.title}
            description={dataCardPreventiva.description}
          >
            <SubmitContent>
              <ButtonContact titleButton="Ver o sistema Preditivo" />
            </SubmitContent>
          </Card>
        </CardContent>

      </Section>

      {/* Session Asset control  */}
      <Section >
        <TitleSection title="Tenha maior controle dos seus ativos " />
        <AssetControlContent>
          <SubTitle>
            Dashboards em tempo real informam a saúde de seus ativos facilitando o seu planejamento e evitando paradas desnecessárias
          </SubTitle>

          <img src={dashboardAsset} alt="Imagem de um dashboard criado pelo sistema da TRACTIAN" />
        </AssetControlContent>
      </Section>

      {/* Session Sensors */}
      <Section>
        <TitleSection title="Conheça os nosso sensores" />

        <SensorContent>

          <Sensor>
            <SensorName>
              Sensor de Vibração
            </SensorName>
            <SensorDescrition>
              Com tecnologia plug & play, a instalação foi desenhada para ser rápida e descomplicada. A conectividade 2G/3G/4G permite o acompanhamento de forma remota e em tempo real.
            </SensorDescrition>
          </Sensor>

          <ImageContainer>
            <img src={sensorVibration} alt="Imagem do sensor de vibração da TRACTIAN" />

          </ImageContainer>

        </SensorContent>

        <SensorContent>
          <Sensor>
            <SensorName>
              Sensor de Energia
            </SensorName>
            <SensorDescrition>
              Acesse informações valiosas sobre a qualidade energética da sua operação e visualize os indicadores da rede elétrica em tempo real.
            </SensorDescrition>
          </Sensor>
          <ImageContainer>

            <img src={sensorEnergy} alt="Imagem do sensor de energia da TRACTIAN" />
          </ImageContainer>

        </SensorContent>
      </Section>

      <ButtonContact titleButton="Solititar demonstração" />

      {/* Session Clients */}
      <Section>
        <TitleSection title="Nossos principais clientes" />
        <ClientsContainer>
          <img src={logoGoodyear} alt="logo empresa Goodyear" />
          <img src={logoMartMinas} alt="logo empresa Mart Minas" />
          <img src={logoKarcher} alt="lodo empresa Karcher" />
          <img src={logoPetrobras} alt="logo empresa Petrobras" />
          <img src={logoSuzano} alt="logo empresa Suzano" />
          <img src={logoBoticario} alt="logo empresa Boticario" />
          <img src={logoTigre} alt="logo empresa Tigre" />
          <img src={logoRenault} alt="logo empresa Renault" />
        </ClientsContainer>
      </Section>

      {/* Session feedback */}
      <Section bgColor="#07074E">
        <TitleSection title="Alguns relatos de nossos clientes" colorText="#F9FBFC" />
        <FeedbackContainer>
          <CardFeedback
            avatar={Avatar1}
            name="Maria"
            position="Especialista em Manutenção"
            feedback="Com a TRACTIAN, consigo acompanhar 100% o que está acontecendo na fábrica. Tudo é mais rápido, automático e interativo. Unindo monitoramento online, gestão de ordens de serviço e histórico acessível, fica mais fácil colocar a casa em ordem."
          />
          <CardFeedback
            avatar={Avatar2}
            name="José"
            position="Engenheiro Industrial"
            feedback="Hoje utilizamos diariamente o sistema da Tractian que melhorou a eficiência da nossa operação, facilitando muito nosso dia a dia na manutenção. Além disso, o time Tractian é responsivo e todo o sistema está sempre evoluindo junto com feedback do cliente."
          />
          <CardFeedback
            avatar={Avatar3}
            name="Lúcia"
            position="Gerente de Operação"
            feedback="Os sensores trouxeram maior segurança, precisão e confiabilidade. O melhor é que conseguimos acompanhar os ativos em tempo real pela plataforma ou aplicativo no celular, com as informações na palma da mão. "
          />
          <CardFeedback
            avatar={Avatar4}
            name="Ádila"
            position="Supervisora de Manutenção Geral"
            feedback="Antes da TRACTIAN, a falha acontecia sem que nós tivéssemos nenhuma chance de reação. Agora nós conseguimos identificar qualquer anomalia fora do normal e isso nos permite fazer a intervenção antes que a quebra aconteça."
          />

        </FeedbackContainer>



      </Section>

      {/* Footer */}
      <FooterContainer>
        <img src={logoFooter} />

        <TitleForm>Solicite sua Demonstração</TitleForm>

        <FormContact />

        <SocialContent>
          <a href="https://www.linkedin.com/company/tractian/" target="_blank" >
            <img src={Linkedin} alt="logo Linkedin" />
          </a>
          <a href="https://www.facebook.com/tractian" target="_blank">
            <img src={Facebook} alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com/tractian/" target="_blank">
            <img src={Instagram} alt="logo instagram" />
          </a>
          <a href="https://www.youtube.com/c/TRACTIAN" target="_blank">
            <img src={Youtube} alt="logo youtube" />
          </a>
          <a href="https://www.tiktok.com/@tractian" target="_blank">
            <img src={Tiktok} alt="logo tiktok" />
          </a>
        </SocialContent>

        <DataTractian>
          CNPJ: CNPJ: 35.755.699/0001-84 <br />
          © Tractian Tecnologia Ltda
        </DataTractian>

      </FooterContainer>
    </HomeContainer>
  )
} 
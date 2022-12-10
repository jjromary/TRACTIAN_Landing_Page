import { AssetControlContent, CardContent, ClientsContainer, Header, HomeContainer, ImageContainer, ImageContent, Sensor, SensorContent, SensorDescrition, SensorName, SubTitle, Summary, Title, TopContent, TypesSolutions } from "./styles";
import logo from '../../Assets/logo.svg'
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

import dashboardAsset from '../../Assets/dashboardImage.jpeg'
import Solution from "../../Components/Solution";
import { dataCardMonitoramento, dataCardIoT, dataCardAtivos, dataCardPreventiva, dataEnergy, dataSupervisorio, dataVibration } from "../../Data/data";
import TitleSection from "../../Components/Title";
import Card from "../../Components/Card";
import ButtonContact from "../../Components/Button";
import Section from "../../Components/Section";

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
            <img src={sensorFunc} />
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
            <ButtonContact titleButton="Quero monitorar Online" />
          </Card>

          <Card
            title={dataCardIoT.title}
            description={dataCardIoT.description}
          >
            <ButtonContact titleButton="Quero mais insights" />
          </Card>

          <Card
            title={dataCardAtivos.title}
            description={dataCardAtivos.description}
          >
            <ButtonContact titleButton="Veja CMMS na prática" />
          </Card>

          <Card
            title={dataCardPreventiva.title}
            description={dataCardPreventiva.description}
          >
            <ButtonContact titleButton="Ver o sistema Preditivo" />
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

          <img src={dashboardAsset} />
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
            <img src={sensorVibration} />

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

            <img src={sensorEnergy} />
          </ImageContainer>

        </SensorContent>
      </Section>

      {/* Session Clients */}
      <Section>
        <TitleSection title="Nossos principais clientes" />
        <ClientsContainer>
          <img src={logoGoodyear} />
          <img src={logoMartMinas} />
          <img src={logoKarcher} />
          <img src={logoPetrobras} />
          <img src={logoSuzano} />
          <img src={logoBoticario} />
          <img src={logoTigre} />
          <img src={logoRenault} />
        </ClientsContainer>
      </Section>

      {/* Session feedback */}

      <Section bgColor="#07074E">
        <TitleSection title="Alguns relatos de nossos clientes" colorText="#F9FBFC" />


      </Section>
    </HomeContainer>
  )
} 
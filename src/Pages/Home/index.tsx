import { AssetControlContent, CardContent, Header, HomeContainer, ImageContent, SubTitle, Summary, Title, TopContent, TypesSolutions } from "./styles";
import logo from '../../Assets/logo.svg'
import sensorFunc from '../../Assets/sensor_func.svg'
import iconVibration from '../../Assets/icon_vibration.svg'
import iconEnergy from '../../Assets/icon_energy.svg'
import iconMonitor from '../../Assets/icon_monitor.svg'
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
      <Section>
        <TitleSection title="Tenha maior controle dos seus ativos " />
        <AssetControlContent>
          <SubTitle>
            Dashboards em tempo real informam a saúde de seus ativos facilitando o seu planejamento e evitando paradas desnecessárias
          </SubTitle>

          <img src={dashboardAsset} />
        </AssetControlContent>
      </Section>
    </HomeContainer>
  )
}
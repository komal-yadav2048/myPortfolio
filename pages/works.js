import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbhatch from '../public/images/works/hatchtank_eyecatch.png'
import thumbYaabin from '../public/images/works/yaabin_eyecatch.jpg'
import thumbFourPainters from '../public/images/works/PaperLink1.png'
import thumbMenkiki from '../public/images/works/SigninLink1.png'
import thumbVcRooom from '../public/images/works/vc-room_01.png'
import thumbModeTokyo from '../public/images/works/Covid-Recognizer1.png'
import thumbStyly from '../public/images/works/Svelte-list1.png'
import thumbJointJS from '../public/images/works/JointJS_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/svelte.png'
import thumbAmembo from '../public/images/works/Workflow.jpeg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="HatchTank" thumbnail={thumbhatch}>
          HatchTank Online Qualitative Software: Friendly, flexible and simple and contracting
          agency based in canada.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Yaabin"
            thumbnail={thumbYaabin}
          >
            Yaabin is a Traveling Agency based in mexico.     
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="PaperLink"
            thumbnail={thumbFourPainters}
          >
            PaperLink is a powerful web-app used to distribute a document to many end-users for detail filling purposes
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="SigninLink">
            An app which records the attendence data from any device by just clicking on a link.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          My Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbVcRooom} title="VC-ROOM">
          A video calling App.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Covid-Recognizer"
          >
           Helps in classifying whether the the patient is covid positive or negative
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbJointJS} title="JointJS Project">
            
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Svelte Audio Player"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="React-flow-Workflow">
            A webapp for making flow diagrams and implementing automations to reduce human input in an
            organisation
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Svelte-List">
            A Svelte based items listing web-app.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

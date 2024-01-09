import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Link from 'next/link'

const Work = () => (
  <Layout title="Covid-Recognizer">
    <Container>
      <Title>
        Covid-Recognizer <Badge>2020</Badge>
      </Title>
      <P>Helps in classifying whether the the patient is covid positive or negative based on their lung&apos;s CT Scan analysis. Performing lung and infection segmentation if the patient is covid positive.</P>


      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack </Meta>
          <span>Tensorflow, Keras, Nibabel</span>
        </ListItem>
        <ListItem>
          <Meta>Repository </Meta>
          <span> <Link href="https://github.com/komal-yadav2048/Covid-Recognizer">Covid-Recognizer</Link></span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/Covid-Recognizer1.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/Covid-Recognizer2.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/Covid-Recognizer3.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/Covid-Recognizer4.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

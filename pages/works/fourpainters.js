import {

  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PaperLink">
    <Container>
      <Title>
        PaperLink <Badge>2022</Badge>
      </Title>
      <P>
        PaperLink is a powerful web-app used to distribute a document to many end-users for detail filling purposes.With the help of this web-app one would be able to distribute certificates and many more documents to many users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.js, TailwindCSS, Node.js, Mongodb, Digital Ocean, PWA, Canvas & HTML5, Fabric.js, pdf.js, pdf-library</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://paperlink.app/">
            PaperLink <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>



      <WorkImage
        src="/images/works/PaperLink2.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/PaperLink3.png" alt="walknote" />
      <WorkImage src="/images/works/PaperLink4.png" alt="walknote" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

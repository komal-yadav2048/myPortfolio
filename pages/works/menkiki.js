import {

  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="SigninLink ">
    <Container>
      <Title>
        SigninLink <Badge>2022</Badge>
      </Title>
      <P>
        SigninLink is used to record attendance data from any device just by clicking on a link. It helps in maintaining
        the data in a sheet form which is in a ordered way to manage company&apos;s day-to-day work.
      </P>


      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Bootstrap, Node.js, Mongodb, Digital Ocean, PWA, Canvas & HTML5, pdj.js</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://signinlink.app/">
            SigninLink <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>



      <WorkImage src="/images/works/SigninLink2.jpeg" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/SigninLink3.png" alt="menkiki" />
        <WorkImage src="/images/works/SigninLink4.png" alt="menkiki" />
      </SimpleGrid>
      <WorkImage src="/images/works/SigninLink5.png" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

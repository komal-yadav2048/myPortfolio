import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="React-workflow">
    <Container>
      <Title>
        React-Workflow <Badge>2019-2020</Badge>
      </Title>

      <P>
        It is a web-app which reduces human input in an organisation by implementing automation in SMS and various  facilities
        .Moreover it helps in creating interactive flow-diagrams.
      </P>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, SCSS, JavaScript </span>
        </ListItem>

        <ListItem>
          <Meta>Last update</Meta>
          <span>2020</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-flow-workflow.vercel.app/">
            React-Workflow <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>






      <WorkImage src="/images/works/Workflow.jpeg" alt="amembo" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

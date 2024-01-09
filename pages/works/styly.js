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
  <Layout title="STYLY">
    <Container>
      <Title>
        Svelte-list <Badge>2017</Badge>
      </Title>
      <P>
        A Svelte and JavaScript based items listing web-app with an interactive frontend design.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Svelte, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://svelte-list.vercel.app/">
            Svelte-list <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>



      <WorkImage src="/images/works/Svelte-list1.png" alt="STYLY" />
      <WorkImage src="/images/works/Svelte-list2.png" alt="STYLY" />
      <WorkImage src="/images/works/Svelte-list3.png" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Svelte Audio Player">
    <Container>
      <Title>
        Svelte Audio Player <Badge>2004-2009</Badge>
      </Title>

      <P>Component that wraps html audio tag for building custom audio player.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any web browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Svelte, </span>
          <span>JavaScript, </span>
          <span>CSS, </span>
        </ListItem>

        <ListItem>
          <Meta>Last update</Meta>
          <span>2019</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sevelte-player.vercel.app/">
            Svelte-Player<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Center my={6}>
        <Image src="/images/works/svelte.png" alt="icon" />
      </Center>
      <Center my={6}>
        <Image src="/images/works/svelte2.png" alt="icon" />
      </Center>




    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="JointJS">
    <Container>
      <Title>
        JointJS Project <Badge>2017</Badge>
      </Title>
      <P>
        A Complete implimentation of JointJS with a minimap, drag and drop functionality 
        from HTML canvas to JointJS paper, zoom, linking restrications , editable elements, upload,
        download, undo & redo functionality.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JointJS, jQuery, Canvas, MySQL</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://www.donpy.net/standard-entry/app-reiview/4303.html">
            <Badge mr={2}>覚醒する @CDiP</Badge>
            Webアプリ版twitterクライアントの「pichu*pichu」が凄い。{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://labs.laurahouse.net/articles/iphone/1115.html">
            <Badge mr={2}>LauraHouse Labs</Badg
            知っておきたいWebアプリ版Twitterクライアント活用法{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      <WorkImage src="/images/works/JointJS_01.png" alt="JointJS" />
      <WorkImage src="/images/works/JointJS_eyecatch.png" alt="JointJS" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

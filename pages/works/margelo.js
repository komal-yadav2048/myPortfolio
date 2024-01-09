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
  <Layout title="VC-ROOM">
    <Container>
      <Title>
      VC-ROOM <Badge>2018</Badge>
      </Title>
      <P>
        Video Calling WebApp
      </P>
      <P>
        {/* <Link href="https://room-vc.herokuapp.com/" target="_blank">
          VC-ROOM <ExternalLinkIcon mx="2px" />
        </Link> */}
        I developed the entire project from scratch. It is a video calling App where you can add friends, call them and text them. This App uses a subscription model for allowing the users to call.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://room-vc.herokuapp.com/" target="_blank">
            https://room-vc.herokuapp.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
           React / Node.js / Firebase / WebRTC / stipe / JavaScript
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.youtube.com/watch?v=GznmPACXBlY">
            How I built a software agency website with Next.js + Tailwind CSS
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/vc-room_01.png" alt="Website" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      {/* <WorkImage src="/images/works/vc-room_01.png" alt="VC-ROOM" /> */}
      <WorkImage src="/images/works/vc-room_02.png" alt="VC-ROOM" />
      <WorkImage src="/images/works/vc-room_03.png" alt="VC-ROOM" />
      <WorkImage src="/images/works/vc-room_04.png" alt="VC-ROOM" />
      <WorkImage src="/images/works/vc-room_05.png" alt="VC-ROOM" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

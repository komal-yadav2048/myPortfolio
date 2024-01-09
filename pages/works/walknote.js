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
  <Layout title="Yaabin">
    <Container>
      <Title>
        Yaabin <Badge>2020-</Badge>
      </Title>
      <P>
      Yaabin is a Traveling Agency. 
      </P>
      <P>
      The name Yaabin is a blend of two Mayan words: Yaah which means love and Bin which means travel.
      We love to travel and realized that it was the perfect combo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS,Android & Web</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://beta.yaabin.com/">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Svelte, D3.js, SvelteKit, Capacitor, Adobe XD, MongoDB</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/Yaabin_01.png" alt="Yaabin" />
        <WorkImage src="/images/works/Yaabin_02.png" alt="Yaabin" />
      </SimpleGrid>
      <WorkImage src="/images/works/Yaabin_03.png" alt="Yaabin" />
      <WorkImage src="/images/works/Yaabin_04.png" alt="Yaabin" />
      <WorkImage src="/images/works/Yaabin_05.png" alt="Yaabin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

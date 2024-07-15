import Head from 'next/head'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  Link,
  SimpleGrid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import NHeader from '../components/NHeader'
import Footer from '../components/Footer.jsx'
import { FaArrowRight } from 'react-icons/fa'
import { PiNumberCircleOneFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from 'react-icons/pi'

export default function QuillHome() { 
    const PFeature = (props) => {
        return (
          <Flex align="center">
            <Flex shrink={0}>
              <Icon
                boxSize={5}
                mt={1}
                mr={2}
                color="brand.500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </Icon>
            </Flex>
            <Box ml={4}>
              <Text
                as="span"
                mt={2}
                color="gray.500"
              >
                {props.children}
              </Text>
            </Box>
          </Flex>
        );
      };

  const Feature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://keywordquill.com/" />

        <title>Keyword Quill - Google Autocomplete API</title>
        <meta name="description" content="With Keyword Quill, you can find 1000s of high traffic, low competition keywords for your niche in just seconds!" />

        <meta name="twitter:title" content="Keyword Quill - Google Autocomplete API" />
        <meta name="twitter:description" content="With Keyword Quill, you can find 1000s of high traffic, low competition keywords for your niche in just seconds!" />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/`}/>

        <meta property="og:title" content="Keyword Quill - Google Autocomplete API" />
        <meta property="og:description" content="With Keyword Quill, you can find 1000s of high traffic, low competition keywords for your niche in just seconds!" />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/`}/>

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />

        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white-translucent" />

        <link rel="apple-touch-icon" sizes="180x180" href="https://keywordquill.com/s/i/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="manifest" href="https://keywordquill.com/s/i/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:locale" content="en_US"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Keyword Quill - Google Autocomplete API!",
          "url": "https://keywordquill.com/"
        }`
        }} 
      />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXV756BYKV"></script>
        <script dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-CXV756BYKV');`
        }} />   
      </Head>
      <NHeader />
      <Flex as="main" mx="auto" mt={0} px={5}>
        <Container maxW={'7xl'}>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            textAlign={{base:"center",md:"left"}}
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={3}>
            <Heading mb={2}
                lineHeight={1.2}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
                <Text
                as={'span'}
                fontFamily={"'Montserrat', sans-serif!important"}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#2f3c7e47',
                    zIndex: -1,
                }}>
                Google Search
                </Text>
                <br />
                <Text
            fontFamily={"'Montserrat', sans-serif!important"} as={'span'} color={'#2f3c7ecc'}>
                Autocomplete API.
                </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
                With Keyword Quill, you can query our API and get back <strong>Google search autocomplete</strong> suggestions for any keyword in <strong>less than a second</strong>!
            </Text>
            <Stack
                spacing={{ base: 4, sm: 3 }}
                mt={2}
                justifyContent={{base:"center",md:"left"}}
                direction={{ base: 'column', sm: 'row' }}>
                <Link href="/sign-up" _hover={{ textDecoration:"none" }}><Button
                rounded={'lg'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                fontFamily={"'Montserrat', sans-serif!important"}
                rightIcon={<FaArrowRight size={16} />}
                backgroundColor={"#2f3c7ecc"} color={"white"} _hover={{backgroundColor:"#2f3c7eb3"}}>
                Get Started
                </Button></Link>
                <Link href="/#Features" _hover={{ textDecoration:"none" }}><Button
                rounded={'lg'}
                size={'lg'}
                fontFamily={"'Montserrat', sans-serif!important"}
                fontWeight={'normal'}
                px={6}>
                Learn More
                </Button></Link>
            </Stack>
            </Stack>
            <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            fontFamily={"'Montserrat', sans-serif!important"}
            w={'full'}>
            <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                <Image
                alt={'Keyword Quill'}
                fit={'cover'}
                align={'top'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://cdn.keywordquill.com/s/i/Hero-Main.webp'
                }
                />
            </Box>
            </Flex>
        </Stack>
        <Flex mt={12} w={"100%"} alignItems="center" mb={8} flexDirection="column">
            <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center">How <Text as="span" color={"#2f3c7ecc"}>Keyword Quill</Text> Works</Heading>
            <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>Keyword Quill acts as a <strong>Google search autocomplete API</strong>. Enter a keyword and a location, and <strong>retrieve the Google search suggestions</strong> in seconds.</Text>
        </Flex>
        <Box p={4} mb={12} id="Features">
            <SimpleGrid mb={16} columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                icon={<Icon color={"gray.500"} as={PiNumberCircleOneFill} w={10} h={10} />}
                title={'Sign Up'}
                text={
                    'Create an account for free and get your API key. Manage your settings and trial the API in the dashboard.'
                }
                />
                <Feature
                icon={<Icon color={"gray.500"} as={PiNumberCircleTwoFill} w={10} h={10} />}
                title={'Query Our API'}
                text={
                    'Using any programming language, call our HTTP API with a keyword, a location, a langauge, and your API key.'
                }
                />
                <Feature
                icon={<Icon color={"gray.500"} as={PiNumberCircleThreeFill} w={10} h={10} />}
                title={'Find Keywords'}
                text={
                    'Our API returns all the search suggestions from Google autocomplete for your keyword as JSON.'
                }
                />

            </SimpleGrid>
            </Box>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 5 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} alignItems="start" flexDirection="column">
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"}>Find <Text as="span" color={"#2f3c7ecc"}>Google search suggestions</Text></Heading>
                    <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="left" mt={4}>Keyword Quill automatically finds the <strong>Google search autocomplete suggestions</strong> for any keyword, all you have to do is ask!</Text>
                </Flex>
                <Box
                flex={1}
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                    <Image
                    alt={'Find Google search suggestions'}
                    fit={'cover'}
                    align={'top'}
                    w={'100%'}
                    h={'100%'}
                    src={
                        'https://cdn.keywordquill.com/s/i/Quill-Finder.webp'
                    }
                    />
                </Box>
            </Stack>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: 'column', md: 'row' }}>
                <Box
                flex={1}
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                  <Image
                  alt={'JSON results'}
                  fit={'cover'}
                  align={'top'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    'https://cdn.keywordquill.com/s/i/Quill-JSON.webp'
                  }
                  />
                </Box>
                <Flex flex={1} alignItems="start" flexDirection="column">
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"}>Get results as <Text as="span" color={"#2f3c7ecc"}>JSON</Text></Heading>
                    <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="left" mt={4}>The <strong>keywords are returned as JSON</strong>, along with the details of your request. This data can then be filtered and used by your program.</Text>
                </Flex>
            </Stack>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} alignItems="start" flexDirection="column">
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"}>Discover <Text as="span" color={"#2f3c7ecc"}>Popular Searches</Text></Heading>
                    <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="left" mt={4}>Google autocomplete is a great way to <strong>find what people are searching for</strong>. Automate this process with our <strong>Google search suggestions API</strong>.</Text>
                </Flex>
                <Box
                flex={1}
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                  <Image
                  alt={'Popular Searches'}
                  fit={'cover'}
                  align={'top'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    'https://cdn.keywordquill.com/s/i/Quill-Searches.webp'
                  }
                  />
                </Box>
            </Stack>
            <Flex id="Pricing" mt={12} pt={12} w={"100%"} alignItems="center" mb={8} flexDirection="column">
              <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center"><Text as="span" color={"#2f3c7ecc"}>Pricing</Text></Heading>
              <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>Each request to the API costs one credit. These credits can be bought for as low as <strong>$0.000625</strong> and never expire!</Text>
            </Flex>
            <Box maxW="7xl" py={2} mx="auto">
            <Alert fontFamily={"'Montserrat',sans-serif!important"} borderWidth={"1px"} status='success' flexDirection={'row'} display={'flex'} mx={"auto"} borderRadius={'7.5px'} variant={'subtle'} backgroundColor={"#d3e9f59c"} width={"fit-content"} mb={8}>
                    <AlertIcon/>
                    <div><strong>Get 75% OFF Credits!</strong>&nbsp;
                    To celebrate the launch of our API, enjoy a <strong>75% discount</strong> on all credit plans with the code &quot;<strong>LAUNCH</strong>&quot;</div>
                </Alert>
          <SimpleGrid columns={[1, , , 3]} gap={[16, 8]}>
            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg="white"
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"

                bg={"rgb(237, 243, 248)"}
              >
                <Text
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  Starter - {parseInt(25000).toLocaleString()} Credits
                </Text>
                <Text
                  mb={3}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color="gray.900"
                  lineHeight="tight"
                >
                  $25
                  </Text><Button
                  w={"full"}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={6}
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={"inherit"}
                  bg="white"
                  as="a"
                  href="/sign-up"
                  _hover={{ textDecoration:"none", bg:"#fafafa" }}
                >
                  Get Started for Free
                </Button>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <PFeature><strong>{parseInt(25000).toLocaleString()} Searches</strong></PFeature>
                <PFeature><strong>$1.00 / 1,000 queries</strong></PFeature>
                <PFeature>Real-time results</PFeature>
                <PFeature>Customize query location and language</PFeature>
                <PFeature>Credits never expire</PFeature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg="white"
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                bg={"rgb(237, 243, 248)"}
              >
                <Text
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  Standard - {parseInt(125000).toLocaleString()} Credits
                </Text>
                <Text
                  mb={3}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color="gray.900"
                  lineHeight="tight"
                >
                  $100
                </Text><Button
                  w={"full"}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={6}
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={"inherit"}
                  bg="white"
                  as="a"
                  href="/sign-up"
                  _hover={{ textDecoration:"none", bg:"#fafafa" }}
                >
                  Get Started for Free
                </Button>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <PFeature><strong>{parseInt(125000).toLocaleString()} Searches</strong></PFeature>
                <PFeature><strong>$0.80 / 1,000 queries</strong></PFeature>
                <PFeature>Real-time results</PFeature>
                <PFeature>Customize query location and language</PFeature>
                <PFeature>Credits never expire</PFeature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg="white"
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                bg={"rgb(237, 243, 248)"}
              >
                <Text
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  Scale - {parseInt(400000).toLocaleString()} Credits
                </Text>
                <Text
                  mb={3}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color="gray.900"
                  lineHeight="tight"
                >
                  $250
                </Text><Button
                  w={"full"}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={6}
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={"inherit"}
                  bg="white"
                  as="a"
                  href="/sign-up"
                  _hover={{ textDecoration:"none", bg:"#fafafa" }}
                >
                  Get Started for Free
                </Button>
              </Flex>
              <Stack minHeight={"400px"} direction="column" p="6" spacing="3" flexGrow="1">
                <PFeature><strong>{parseInt(400000).toLocaleString()} Searches</strong></PFeature>
                <PFeature><strong>$0.625 / 1,000 queries</strong></PFeature>
                <PFeature>Real-time results</PFeature>
                <PFeature>Customize query location and language</PFeature>
                <PFeature>Credits never expire</PFeature>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
            <Flex mt={12} py={14} w={"100%"} alignItems="center" mb={8} flexDirection="column">
              <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center"><Text as="span" color={"#2f3c7ecc"}>Ready To Start?</Text></Heading>
              <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>Create an account today and <strong>get 15 free credits</strong> to give the API a shot to see if it fits your use case. Don&apos;t like it? No problem.</Text>
              <Link
                mt={12} href="/sign-up" _hover={{ textDecoration:"none" }}><Button
                rounded={'lg'}
                size={'lg'}
                maxWidth="400px"
                width={"100%"}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                fontFamily={"'Montserrat', sans-serif!important"}
                bg={'#2f3c7ecc'}
                rightIcon={<FaArrowRight size={16} />}
                _hover={{ bg: '#2f3c7eb3' }}>
                Get Started
                </Button></Link>
            </Flex>
        </Container>
      </Flex>
      <Footer />
    </div>
  )
}
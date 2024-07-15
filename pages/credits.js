import Head from 'next/head'
import { Flex, Text, useToast,
  Stack,
  Icon,
  Box,
  SimpleGrid,
  Button,
  Heading,
  Divider,
  Spinner,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase } from '../components/utils/supabase'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'

export default function Credits() {
  const toast = useToast()
  const router = useRouter()
  
  const [userType, setUserType] = useState("")  
  const [user, setUser] = useState({})  
  const [userLoaded, setUserLoaded] = useState(false)  

  const Feature = (props) => {
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

  useEffect(() => {
    (async () => { 
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        const id = 'redir-toast'
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Redirecting...",
            description: "Sign in to use Keyword Quill.",
            status: "warning",
            position: "top-end",
            duration: 7500,
            isClosable: true,
          })
        }
        router.push('/sign-in')
      }
      setUserType(user.user_metadata.type)
      setUser(user)
      setUserLoaded(true)
    })();
  }, [])
  
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://keywordquill.com/credits" />

        <title>Credits - Keyword Quill</title>
        <meta name="description" content="Purchase more credits to keep using our Google autocomplete API. Credits never expire and there is no limit to how many one account can have." />

        <meta name="twitter:title" content="Credits - Keyword Quill" />
        <meta name="twitter:description" content="Purchase more credits to keep using our Google autocomplete API. Credits never expire and there is no limit to how many one account can have." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/credits`}/>

        <meta property="og:title" content="Credits - Keyword Quill" />
        <meta property="og:description" content="Purchase more credits to keep using our Google autocomplete API. Credits never expire and there is no limit to how many one account can have." />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/credits`}/>

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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXV756BYKV"></script>
        <script dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-CXV756BYKV');`
        }} /> 

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Flex as="main" mx="auto" mt={6} px={5}>
      <Flex flexDirection={"column"} w={"100%"} minHeight="100vh" mx="auto" maxWidth={"1200px"}>
      <Button variant={"outline"} mt={7} mb={6} size={"md"} as={"a"} href='/dashboard' alignItems={"center"} backgroundColor={"#FFFFFF"} width={"fit-content"} leftIcon={<FaArrowLeft size={16} />}>&nbsp;Dashboard</Button>
        <Stack
          align={'left'}
          spacing={{ base: 8, md: 10 }}
          pt={15}
          textAlign={"start"} w={"100%"}
          direction={{ base: 'column', md: 'row' }}>
          <Stack w={"100%"} flex={1} spacing={{ base: 7, md: 5 }}>
            <Heading
              lineHeight={1.2}
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}>
              <Text
                fontFamily={"'Montserrat', sans-serif!important"}
                as={'span'}
                position={'relative'}
                pr={1}
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
                Top Up
              </Text>
              <br />
              <Text fontFamily={"'Montserrat', sans-serif!important"} as={'span'} color={'#2f3c7ecc'}>
              Your Credits
              </Text>
            </Heading>
            <Text maxWidth={650} color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
              Purchase more credits to keep using our Google autocomplete API. <strong>Credits never expire</strong> and <strong>there is no limit</strong> to how many one account can have.
            </Text>
          </Stack>
        </Stack>
        <Divider id='Credits' mb={6} mt={6} />
        {userLoaded?<Box maxW="7xl" py={2} mx="auto">
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
                </Text>
                <form target="_blank" action="https://keywordquill.com/checkout" method="POST">
                <input type="hidden" name="userEmail" value={user.email} />
                <input type="hidden" name="userId" value={user.id} />
                <input type="hidden" name="plan" value={"25"} /><Button
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
                  type='submit'
                  _hover={{ textDecoration:"none", bg:"#fafafa" }}
                >
                  Buy Credits
                </Button></form> 
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature><strong>{parseInt(25000).toLocaleString()} Searches</strong></Feature>
                <Feature><strong>$1.00 / 1,000 queries</strong></Feature>
                <Feature>Real-time results</Feature>
                <Feature>Customize query location and language</Feature>
                <Feature>Credits never expire</Feature>
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
                </Text>
                <form target="_blank" action="https://keywordquill.com/checkout" method="POST">
                <input type="hidden" name="userEmail" value={user.email} />
                <input type="hidden" name="userId" value={user.id} />
                <input type="hidden" name="plan" value={"100"} /><Button
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
                  type='submit'
                  _hover={{ textDecoration:"none", bg:"#fafafa" }}
                >
                  Buy Credits
                </Button></form> 
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature><strong>{parseInt(125000).toLocaleString()} Searches</strong></Feature>
                <Feature><strong>$0.80 / 1,000 queries</strong></Feature>
                <Feature>Real-time results</Feature>
                <Feature>Customize query location and language</Feature>
                <Feature>Credits never expire</Feature>
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
                </Text>
                <form target="_blank" action="https://keywordquill.com/checkout" method="POST">
                <input type="hidden" name="userEmail" value={user.email} />
                <input type="hidden" name="userId" value={user.id} />
                <input type="hidden" name="plan" value={"250"} /><Button
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
                  type='submit'
                  _hover={{ textDecoration:"none", bg:"#fafafa" }}
                >
                  Buy Credits
                </Button></form> 
              </Flex>
              <Stack minHeight={"400px"} direction="column" p="6" spacing="3" flexGrow="1">
                <Feature><strong>{parseInt(400000).toLocaleString()} Searches</strong></Feature>
                <Feature><strong>$0.625 / 1,000 queries</strong></Feature>
                <Feature>Real-time results</Feature>
                <Feature>Customize query location and language</Feature>
                <Feature>Credits never expire</Feature>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>:<Spinner />}
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}
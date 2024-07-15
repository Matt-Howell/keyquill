import Head from 'next/head'
import { Flex, Text, Input, useToast,
  Link,
  Card, CardHeader, CardBody,
  Heading,
  Divider,
  Stack,
  FormControl,
  FormHelperText
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase } from '../components/utils/supabase'
import { useRouter } from 'next/router'

export default function Settings() {
  const toast = useToast()
  const router = useRouter()
  
  const [userType, setUserType] = useState("")  
  const [user, setUser] = useState({})  
  const [userMedium, setUserMedium] = useState("email") 
  const [userCredits, setUserCredits] = useState(0)   
  const [userApiKey, setUserApiKey] = useState("")   

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
      await supabase
      .from('uservals')
      .select('searches,key')
      .eq("id", user.id)
      .then((result) => {
          setUserCredits(result.data[0].searches)
          setUserApiKey(result.data[0].key)
          setUser(user)
          setUserMedium(user.app_metadata.provider)
      })
    })();
  }, [])
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://keywordquill.com/account" />

        <title>Your Account - Keyword Quill</title>
        <meta name="description" content="View your account information, edit your settings, and manage your preferences." />

        <meta name="twitter:title" content="Your Account - Keyword Quill" />
        <meta name="twitter:description" content="View your account information, edit your settings, and manage your preferences." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/account`}/>

        <meta property="og:title" content="Your Account - Keyword Quill" />
        <meta property="og:description" content="View your account information, edit your settings, and manage your preferences." />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/account`}/>

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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXV756BYKV"></script>
        <script dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-CXV756BYKV');`
        }} /> 

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Flex as="main" mx="auto" mt={6} px={5}>
        <Flex flexDirection={"column"} w={"100%"} alignItems={"center"} minHeight="100vh" mx="auto" maxWidth={"1250px"}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={15}
          maxWidth={750}
          textAlign={"center"}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 7, md: 5 }}>
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
                Your
              </Text>
              <br />
              <Text fontFamily={"'Montserrat', sans-serif!important"} as={'span'} color={'#2f3c7ecc'}>
                Account Settings
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
              View your <strong>account information</strong>, <strong>edit your settings</strong>, and <strong>manage your preferences</strong>. Need some help? <Link color={'blue.300'} _hover={{ textDecoration:"none",opacity:0.8 }} href='/contact'>Contact us</Link> - we are more than happy to assist!</Text>
          </Stack>
        </Stack>
        <Divider id='Settings' mb={6} mt={12} />
        <Flex width={"100%"} flexDirection={"column"}>
            <Card variant={"outline"}>
                <CardHeader pb={3} fontWeight={500} fontSize={"lg"}>
                    Email Address
                </CardHeader>
                <CardBody pt={0}>
                    <FormControl>
                        <Input isReadOnly={true} type='email' value={user.email} />
                        <FormHelperText mt={3}>If you want to change your email address, please reach out to <Link color={'blue.300'} _hover={{ textDecoration:"none",opacity:0.8 }} href='/contact'>support</Link>.</FormHelperText>
                    </FormControl>
                </CardBody>
            </Card>
            {userMedium === "email"?<Card mt={3} variant={"outline"}>
                <CardHeader pb={3} fontWeight={500} fontSize={"lg"}>
                    Password
                </CardHeader>
                <CardBody pt={0}>
                    <FormControl>
                        <Input isReadOnly={true} type='password' value={"password"} />
                        <FormHelperText mt={3}>If you want to change your password, you can do so <Link color={'blue.300'} _hover={{ textDecoration:"none",opacity:0.8 }} href='/change-password'>here</Link>.</FormHelperText>
                    </FormControl>
                </CardBody>
            </Card> : null}
            <Card mt={3} variant={"outline"}>
                <CardHeader pb={3} fontWeight={500} fontSize={"lg"}>
                    Credits Remaining
                </CardHeader>
                <CardBody pt={0}>
                    <FormControl>
                        <Input isReadOnly={true} type='text' value={userCredits} />
                        <FormHelperText mt={3}>To purchase more credits and top up your account, <Link color={'blue.300'} _hover={{ textDecoration:"none",opacity:0.8 }} href='/credits'>go here</Link>.</FormHelperText>
                    </FormControl>
                </CardBody>
            </Card>
            <Card mt={3} variant={"outline"}>
                <CardHeader pb={3} fontWeight={500} fontSize={"lg"}>
                    API Key
                </CardHeader>
                <CardBody pt={0}>
                    <FormControl>
                        <Input isReadOnly={true} type='text' value={userApiKey} />
                        <FormHelperText mt={3}>Use this key when you make API requests.</FormHelperText>
                    </FormControl>
                </CardBody>
            </Card>
        </Flex>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}
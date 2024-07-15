import Head from 'next/head'
import { Flex, Text, Button, Input, useToast,
  Link,
  Card, CardHeader, CardBody,
  Heading,
  Divider,
  Stack,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase } from '../components/utils/supabase'
import { useRouter } from 'next/router'

export default function PasswordChange() {
  const toast = useToast()
  const router = useRouter()

  const passwordOne = useRef("")
  const passwordTwo = useRef("")

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
    })();
  }, [])
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://keywordquill.com/change-password" />

        <title>Change Your Password - Keyword Quill</title>
        <meta name="description" content="Forgotten your old password or just want to change it? You can always change your password here." />

        <meta name="twitter:title" content="Change Your Password - Keyword Quill" />
        <meta name="twitter:description" content="Forgotten your old password or just want to change it? You can always change your password here." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/change-password`}/>

        <meta property="og:title" content="Change Your Password - Keyword Quill" />
        <meta property="og:description" content="Forgotten your old password or just want to change it? You can always change your password here." />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/change-password`}/>

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
        <Flex flexDirection={"column"} w={"100%"} minHeight="100vh" mx="auto" maxWidth={"1250px"}><Button variant={"outline"} mt={7} mb={6} size={"md"} as={"a"} href='/dashboard' alignItems={"center"} backgroundColor={"#FFFFFF"} width={"fit-content"} leftIcon={<FaArrowLeft size={16} />}>&nbsp;Dashboard</Button>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={15}
          textAlign={{base:"center",md:"left"}}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 4, md: 6 }}>
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
                Change
              </Text>
              <br />
              <Text fontFamily={"'Montserrat', sans-serif!important"} as={'span'} color={'#2f3c7ecc'}>
                Your Password
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
              Forgotten your old password or want to change it? <strong>You can always change your password here</strong>. Need some help? <Link color={'blue.300'} _hover={{ textDecoration:"none",opacity:0.8 }} href='/contact'>Contact us</Link> - we are more than happy to assist!</Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
          </Flex>
        </Stack>
        <Divider id='Change' mb={6} mt={12} />
        <Flex flexDirection={"column"}>
            <Card mt={3} variant={"outline"}>
                <CardHeader pb={3} fontWeight={500} fontSize={"lg"}>
                    Change Password
                </CardHeader>
                <CardBody pt={0} mt={3}>
                    <form onSubmit={ async (e) => {
                        e.preventDefault()
                        if (passwordOne.current.value === passwordTwo.current.value) {
                            await supabase.auth.updateUser({ password: passwordOne.current.value }).then(() => {
                                toast({
                                    title: "Password Changed!",
                                    description: "Your password has been successfully changed.",
                                    status: "success",
                                    position: "top-end",
                                    duration: 7500,
                                    isClosable: true,
                                  })
                            })
                        }
                    }}>
                        <FormControl isRequired>
                            <FormLabel>New Password</FormLabel>
                            <Input ref={passwordOne} type='password' />
                        </FormControl>
                        <FormControl isRequired mt={3}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input ref={passwordTwo} type='password' />
                        </FormControl>
                        <Button
                            mt={4}
                            type='submit'
                            rightIcon={<FaArrowRight />}
                            fontFamily={"'Montserrat',sans-serif!important"} backgroundColor={"#2f3c7ecc"} color={"white"} _hover={{backgroundColor:"#2f3c7eb3"}}>
                            Change Password
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </Flex>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}
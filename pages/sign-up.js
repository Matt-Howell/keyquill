import Head from 'next/head'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  InputRightElement,
  InputGroup,
  Divider,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import NHeader from '../components/NHeader'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { supabase } from '../components/utils/supabase.js'
import { FcGoogle } from 'react-icons/fc'

export default function SignUp() {  
  const router = useRouter();
  const toast = useToast()
  const userEmail = useRef("")
  const userPass = useRef("");
  const userPass2 = useRef("");
  const userVerif = useRef("");

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [userEmailState, setUserEmailState] = useState("")

  const handleClick = () => setShow(!show)
  const handleClick2 = () => setShow2(!show2)

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 2,
  })

  useEffect(() => {
    (async () => { 
      if ((await supabase.auth.getUser()).data.user) {
        const id = 'redir-toast'
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Redirecting...",
            description: "You are already signed into an account!",
            status: "warning",
            position: "top-end",
            duration: 7500,
            isClosable: true,
          })
        }
        router.push('/dashboard')
      }
    })();
  }, [])

  const signUpEP = async () => {
    if (userPass.current.value != userPass2.current.value) {
        toast({
          title: "Passwords Do Not Match!",
          description: "Please make sure your passwords match, and try again.",
          status: "error",
          position: "top-end",
          duration: 7500,
          isClosable: true,
        })
        return;
    }
    let email = String(userEmail.current.value)
    let password = String(userPass.current.value)
    const { data: user, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      toast({
        title: "Whoops!",
        description: String(error.message),
        status: "error",
        position: "top-end",
        duration: 7500,
        isClosable: true,
      })
    }
    if (user) {
      toast({
        title: "Account Created!",
        description: "Please confirm your email address by using the code in your inbox.",
        status: "success",
        position: "top-end",
        duration: 7500,
        isClosable: true,
      })
      setUserEmailState(user.user.email)
      setActiveStep(1)
    }
  }

  async function signUpGoogle() {
    try {
      let provider = 'google'
      let { error, user } = await supabase.auth.signInWithOAuth({ provider: provider, options: {
        redirectTo:'https://keywordquill.com/dashboard'
      }})
      if (error) {
        toast({
          title: "Whoops!",
          description: String(error.message),
          status: "error",
          position: "top-end",
          duration: 7500,
          isClosable: true,
        })
      }
      if (user) {
          toast({
            title: "Signed Up!",
            description: "You have successfully created an account using Google.",
            status: "success",
            position: "top-end",
            duration: 7500,
            isClosable: true,
          })
      }
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://keywordquill.com/sign-up" />

        <title>Sign Up - Keyword Quill</title>
        <meta name="description" content="Create an account to access our Google autocomplete API." />

        <meta name="twitter:title" content="Sign Up - Keyword Quill" />
        <meta name="twitter:description" content="Create an account to access our Google autocomplete API." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/sign-up`}/>

        <meta property="og:title" content="Sign Up - Keyword Quill" />
        <meta property="og:description" content="Create an account to access our Google autocomplete API." />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/sign-up`}/>

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
      <NHeader />
      <Flex as="main" mx="auto" mt={6} px={5}>
        <Flex flexDirection={"column"} w={"100%"} align={'center'} justify={'center'} py={6} mx="auto" maxWidth={"1200px"}>
            <Flex
                flexDirection={"column"}>
                <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                    <Heading fontFamily={"'Montserrat',sans-serif!important"} textAlign="center" fontSize={'4xl'}>Create an account</Heading>
                    <Text fontFamily={"'Montserrat',sans-serif!important"} textAlign="center" fontSize={'lg'} color={'gray.600'}>
                        and access the API! 🔍
                    </Text>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    bg={'#fafafa'}
                    boxShadow={'lg'}
                    p={8}>
                    <Button borderWidth={"1px"} fontFamily={"'Montserrat',sans-serif!important"} onClick={signUpGoogle} w={'full'} _hover={{ opacity:0.8 }} backgroundColor={'white'} color={'#757575'} leftIcon={<FcGoogle />}>
                      Continue with Google
                    </Button>
                    <Divider my={6} />
                    <Stepper mb={6} flexDirection={{base:"column!important", md:"row!important"}} index={activeStep}>
                    <Step>
                      <StepIndicator>
                          <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box flexShrink='0'>
                          <StepTitle>Create Account</StepTitle>
                          <StepDescription>Sign up</StepDescription>
                        </Box>

                        <StepSeparator />
                      </Step>
                      <Step>
                      <StepIndicator opacity={activeStep == 0 ? 0.7:1}>
                          <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box opacity={activeStep == 0 ? 0.7:1} flexShrink='0'>
                          <StepTitle>Verify Email</StepTitle>
                          <StepDescription>Enter the code sent</StepDescription>
                        </Box>

                        <StepSeparator />
                      </Step>
                    </Stepper>
                    {activeStep===0?<form onSubmit={(e) => {
                        e.preventDefault()
                        signUpEP()
                    }}><Stack spacing={4}>
                    <FormControl id="email" isRequired>
                            <FormLabel fontFamily={"'Montserrat',sans-serif!important"}>Email address</FormLabel>
                            <Input fontFamily={"'Montserrat',sans-serif!important"} ref={userEmail} type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                            <FormLabel fontFamily={"'Montserrat',sans-serif!important"}>Password</FormLabel>
                            <InputGroup><Input fontFamily={"'Montserrat',sans-serif!important"} type={show ? "text" : "password"} ref={userPass} />
                            <InputRightElement w={'fit-content'} mr={2}>
                                <Button size="sm" background={'none'} onClick={handleClick}>
                                {show ? <FaEyeSlash size={15} opacity={1} /> : <FaEye size={15} opacity={1} /> }
                                </Button>
                            </InputRightElement></InputGroup>
                            </FormControl>
                            <FormControl id="password" isRequired>
                            <FormLabel fontFamily={"'Montserrat',sans-serif!important"}>Confirm Password</FormLabel>
                            <InputGroup><Input fontFamily={"'Montserrat',sans-serif!important"} type={show2 ? "text" : "password"} ref={userPass2} />
                            <InputRightElement w={'fit-content'} mr={2}>
                                <Button size="sm" background={'none'} onClick={handleClick2}>
                                {show2 ? <FaEyeSlash size={15} opacity={1} /> : <FaEye size={15} opacity={1} /> }
                                </Button>
                            </InputRightElement></InputGroup>
                            </FormControl>
                            <Stack spacing={5}>
                            <Button
                                type='submit'
                                fontFamily={"'Montserrat',sans-serif!important"}
                                backgroundColor={"#2f3c7ecc"} color={"white"} _hover={{backgroundColor:"#2f3c7eb3"}}>
                                Create Account
                            </Button>
                            <Text fontFamily={"'Montserrat',sans-serif!important"} textAlign='center'>Already have an account? <Link href="/sign-in" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>Sign in</Link>.</Text>
                        </Stack> 
                    </Stack></form> : <form onSubmit={ async (e) => {
                              e.preventDefault()
                              const {data: user, error} = await supabase.auth.verifyOtp({
                                email:userEmailState,
                                token:userVerif.current.value,
                                type:'signup'
                              })
                              if (user.user) {
                                toast({
                                  title: "Account Verified!",
                                  description: "You can now use your account.",
                                  status: "success",
                                  position: "top-end",
                                  duration: 7500,
                                  isClosable: true,
                                })
                                router.push("/dashboard")
                              }
                          }}><Stack spacing={4}><FormControl defaultValue={""} id="code" isRequired>
                            <FormLabel fontFamily={"'Montserrat',sans-serif!important"}>Verification Code</FormLabel>
                              <Input fontFamily={"'Montserrat',sans-serif!important"} autoComplete='off' id='userCode' placeholder='123456' max="1000000" ref={userVerif} type="number" />
                            </FormControl>
                            <Stack spacing={5}>
                            <Button
                                type='submit'
                                fontFamily={"'Montserrat',sans-serif!important"}
                                backgroundColor={"#2f3c7ecc"} color={"white"} _hover={{backgroundColor:"#2f3c7eb3"}}>
                                Verify
                            </Button>
                        </Stack></Stack></form>}
                    </Box>
                </Stack>
            </Flex>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}
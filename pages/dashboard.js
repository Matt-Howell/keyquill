import Head from 'next/head'
import { Flex, Text, Button, Input, IconButton, Spinner, useToast, Badge,
  Link,
  Box,
  Heading,
  Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Icon, Alert, AlertIcon
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer.jsx'
import { useRouter }  from 'next/router'
import { FaCoins, FaCopy, FaHome, FaSearch, FaUserCircle } from 'react-icons/fa'
import { Select as ReactSel } from "chakra-react-select";
import Header from '../components/Header.jsx'
import { supabase } from '../components/utils/supabase.js'
import { Highlight, themes, Prism } from "prism-react-renderer"
import { translations } from "../components/utils/codes.js"
import { RiExternalLinkLine } from 'react-icons/ri'

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-dart");

const NavItem = (props) => {
    const { icon, children, initial, href, disabled, ...rest } = props;
    return (
      <a href={href} className='menuButton'>
      <Flex
        align="center"
        px="4"
        pl="4"
        className='menuButton' 
        fontSize={'1rem'}
        py="3"
        opacity={1}
        cursor="pointer"
        borderRadius={"md"}
        color="inherit"
        _hover={{
          bg: "gray.100",
          color: "inherit",
        }}
        role="group"
        fontWeight="500"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            ml="2"
            mr="3"
            boxSize="4"
            _groupHover={{
              color: "inherit",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
      </a>
    );
  };

  const SidebarContent = (props) => (
    <Flex
      as="nav"
      flexDir={"column"}
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      py="5"
      pr={3}
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem href="/dashboard" icon={FaHome}>Dashboard</NavItem>
        <NavItem href="/credits" icon={FaCoins}>Credits</NavItem>
        <NavItem href="/account" icon={FaUserCircle}>Account</NavItem>
      </Flex>
    </Flex>
  );

export default function Dashboard() { 
  const toast = useToast()
  const router = useRouter()
  const inputBox = useRef()
  const countryCodes = [
    "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ",
    "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS",
    "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN",
    "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE",
    "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF",
    "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM",
    "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM",
    "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC",
    "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK",
    "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
    "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG",
    "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW",
    "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS",
    "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO",
    "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI",
    "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
    ];

    const languageCodes = [
    "aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az",
    "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce",
    "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee",
    "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr",
    "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr",
    "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is",
    "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn",
    "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln",
    "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms",
    "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv",
    "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu",
    "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk",
    "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta",
    "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw",
    "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi",
    "yo", "za", "zh", "zu"
    ];

  const [serpLoading, setSerpLoading] = useState(false)
  const [searchGeo, setSearchGeo] = useState("US")
  const [searchLang, setSearchLang] = useState("en")
  const [codeForPreview, setCodeForPreview] = useState("")
  const [codeForPreviewLanguage, setCodeForPreviewLanguage] = useState("nodejs")
  const [activeTab, setActiveTab] = useState(0)

  const [keywordData, setKeywordData] = useState({})

  const checkQuery = async () => {
    setSerpLoading(true)
    setActiveTab(1)
    setKeywordData({})
    const { data: { user } } = await supabase.auth.getUser()

    const { data:userV } = await supabase
    .from('uservals')
    .select('searches')
    .eq("id", user.id)
  
    if (userV[0].searches < 1) {  
      const id = 'error-toast'
      if (!toast.isActive(id)) {
      toast({
        id,
        title: "No Searches Remaining.",
        description: "Purchase more credits below to continue using the API.",
        status: "warning",
        position: "top-end",
        duration: 7500,
        isClosable: true,
      })
    }
    setSerpLoading(false)
      return;
    }
    let searchToSend = searchGeo||"US"
    let langToSend = searchLang||"en"
    let kw = inputBox.current.value
    const data = JSON.stringify({
      "keyword": kw,
      "gl": searchToSend,
      "hl": langToSend
    });
      
      await fetch('https://queries.keywordquill.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': userApiKey
        },
        body: data
      })
      .then(response => response.json())
      .then(data => {setKeywordData(data); setUserCredits(data.account.credits); setSerpLoading(false)})
      .catch(error => {setSerpLoading(false);setKeywordData('Error:', error)});
  }

  const [userCredits, setUserCredits] = useState(0)
  const [userApiKey, setUserApiKey] = useState("")

  useEffect(() => {
    (async () => { 
      const { data: { user } } = await supabase.auth.getUser()
      await supabase
      .from('uservals')
      .select('searches,key')
      .eq("id", user.id)
      .then((result) => {
          setUserCredits(result.data[0].searches)
          setUserApiKey(result.data[0].key)
          let code = translations.find(el => el.language == "nodejs").code.replace("_API_KEY_", result.data[0].key).replace("_KEYWORD_", inputBox.current.value).replace("_GL_", searchGeo).replace("_HL_", searchLang)
          setCodeForPreview(code)
      })
    })();
  }, [])

  const updateCode = (language,gl,hl) => {
    let code = translations.find(el => el.language == language).code.replace("_API_KEY_", userApiKey).replace("_KEYWORD_", inputBox.current.value).replace("_GL_", gl||searchGeo).replace("_HL_", hl||searchLang)
    setCodeForPreview(code)
  }

  useEffect(() => {
    (async () => { 
      if (!(await supabase.auth.getUser()).data.user) {
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
        <link rel="canonical" href="https://keywordquill.com/dashboard" />

        <title>Dashboard - Keyword Quill</title>
        <meta name="description" content="Create code snippets, manage your account, and use our API playground - all in your Keyword Quill dashboard." />
        
        <meta name="twitter:title" content="Dashboard - Keyword Quill" />
        <meta name="twitter:description" content="Create code snippets, manage your account, and use our API playground - all in your Keyword Quill dashboard." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/dashboard`}/>
        
        <meta property="og:title" content="Dashboard - Keyword Quill" />
        <meta property="og:description" content="Create code snippets, manage your account, and use our API playground - all in your Keyword Quill dashboard." />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/dashboard`}/>
        
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
      <Flex as="main" mx="auto" height={"100%"} mt={8} px={5} fontFamily={"'Montserrat', sans-serif"}>
      <SidebarContent
        display={{
          base: "none",
          xl: "unset",
        }}
      />
      <Flex
        ml={{
          base: 0,
          xl: "60px",
        }}
        direction={"column"}
        alignItems={"center"}
        width={"100%"} maxW={1500}
      >
        <Flex flexDirection={"column"} w={"100%"} minHeight="100vh" mx="auto">
            {userCredits < 1 ? <Alert flexDirection={'row'} display={'flex'} mb={10} borderRadius={"md"} status={"warning"}><AlertIcon /><div><strong>You have run out of credits</strong>. To continue using the API and make requests, please&nbsp;<Link href="/credits" color="blue.300" _hover={{opacity:0.8}}>purchase more credits</Link>.</div></Alert> : null}
          <Flex justifyContent={"start"} flexDirection={"column"} width={"100%"}>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Heading fontSize={"3xl"} color={"inherit"} fontWeight={"medium"} fontFamily={"'Montserrat', sans-serif"}>Dashboard</Heading>
                <Text mt={2} maxWidth={550} opacity={0.9} lineHeight={1.6}>Create code snippets, manage your account, and use our API playground - all in your Keyword Quill dashboard.</Text>
              </Box>
            </Flex>
            <Alert fontFamily={"'Montserrat',sans-serif!important"} borderWidth={"1px"} status='success' flexDirection={'row'} display={'flex'} borderRadius={'7.5px'} variant={'subtle'} backgroundColor={"#d3e9f59c"} width={"fit-content"} mt={8}>
                    <AlertIcon/>
                    <div><strong>Get 75% OFF Credits!</strong>&nbsp;
                    To celebrate the launch of our API, enjoy a <strong>75% discount</strong> on all <Link href={"/credits"} color="blue.300" _hover={{textDecoration:"none", opacity:0.7}}>credit plans</Link> with the code &quot;<strong>LAUNCH</strong>&quot;</div>
                </Alert>
        <Flex mt={8} width={"100%"} flexDirection={{base:"column",md:"row"}}>
          <Box width={{base:"100%", md:"50%"}} height={"fit-content"} display={"flex"} flexDirection={"column"} justifyContent={"center"} p={6} borderRadius={"md"} backgroundColor={"#FFFFFF"} borderColor={"gray.300"} boxShadow={"none!important"} borderWidth={"1px"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Badge colorScheme={"blue"} p={2} borderRadius={"sm"} height={"fit-content"}>Balance: <strong>{userCredits} Credit{userCredits==1?null:"s"}</strong></Badge>
              <Button size={"sm"} as="a" href="/credits" rightIcon={<RiExternalLinkLine />}>Get Credits</Button>
            </Flex>
            <Badge mt={6} textTransform={"none"} textAlign={"center"} fontWeight={"normal"} backgroundColor={"#FFFFFF"} borderColor={"#2f3c7eb3"} boxShadow={"none!important"} borderWidth={"1px"} p={3} borderRadius={"md"} fontSize={"md"}>
                  API Key: <strong>{userApiKey}</strong>
                </Badge>
                <Divider mt={6} />
            <Flex mt={0} justifyContent={"center"} height={"100%"} flexDirection={"column"}><form onSubmit={(e) => {
              e.preventDefault()
              checkQuery()
            }}>
              <Flex flexDirection={"column"} alignItems={"center"} mt={6} mb={4}>
                <Input onChange={() => updateCode(codeForPreviewLanguage)} isDisabled={userCredits < 1} isRequired ref={inputBox} placeholder='Keyword' />
                <Box mt={3} width={"100%"}><ReactSel 
                  placeholder="Country (GL) - Default US"
                  useBasicStyles
                  isDisabled={userCredits < 1}
                  onChange={(e) => {setSearchGeo(e.value);updateCode(codeForPreviewLanguage,e.value,searchLang)}}
                  options={countryCodes.map(el => ({label:`${el.toUpperCase()}`, value:`${el}`})
                  )}
                /></Box>
                <Box mt={3} width={"100%"}><ReactSel 
                  placeholder="Language (HL) - Default EN"
                  useBasicStyles
                  isDisabled={userCredits < 1}
                  onChange={(e) => {setSearchLang(e.value);updateCode(codeForPreviewLanguage,searchGeo,e.value,)}}
                  options={languageCodes.map(el => ({label:`${el.toUpperCase()}`, value:`${el}`})
                  )}
                /></Box>
                {userCredits < 1?<Button as="a" href="/credits" px={4} type={"button"} mt={3} width={"100%"} backgroundColor={"#2f3c7ecc"} color={"white"} _hover={{backgroundColor:"#2f3c7eb3"}} rightIcon={<RiExternalLinkLine size={15} />} fontSize="md">Buy Credits</Button>:<IconButton px={4} type={"submit"} mt={3} width={"100%"} backgroundColor={"#2f3c7ecc"} color={"white"} _hover={{backgroundColor:"#2f3c7eb3"}} icon={<FaSearch size={15} />} isLoading={serpLoading} fontSize="sm" />}
              </Flex>
            </form></Flex>
            </Box>
            <Box width={{base:"100%", md:"50%"}} display={"flex"} flexDirection={"column"} ml={{base:0,md:4}} mt={{base:4,md:0}} borderRadius={"md"} backgroundColor={"#FFFFFF"} borderColor={"gray.300"} boxShadow={"none!important"} borderWidth={"1px"}>
            <Tabs onChange={(num) => setActiveTab(num)} index={activeTab} p={6}>
                <TabList>
                    <Tab>Code</Tab>
                    <Tab>Result</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                    <Flex mb={6} mt={2} justifyContent={"space-between"}><Box maxWidth={200} minWidth={150}><ReactSel 
                    placeholder="Programming Language"
                    useBasicStyles
                    defaultValue={{ label:"NodeJs", value:"nodejs" }}
                    onChange={(e) => {setCodeForPreviewLanguage(e.value);updateCode(e.value)}}
                    options={[["C#", "csharp"],["cURL", "curl"],["Dart", "dart"],["Go", "go"],["HTTP", "http"],["Java", "java"],["JavaScript", "js"],["C", "c"],["NodeJs", "nodejs"],["Objective-C", "objc"],["OCaml", "ocaml"],["PHP", "php"],["PowerShell", "powershell"],["Python", "py"],["R", "r"],["Ruby", "ruby"],["Shell", "shell"],["Swift", "swift"]].map(el => ({label:`${el[0]}`, value:`${el[1]}`})
                    )}
                    /></Box>
                    <Button onClick={() => {navigator.clipboard.writeText(codeForPreview);toast({title:"📋 Code Copied",duration:3000,status:"success",position:"top-right"})}} backgroundColor={"#FFFFFF"} borderColor={"gray.300"} boxShadow={"none!important"} borderWidth={"1px"} leftIcon={<FaCopy />}>Copy</Button></Flex>
                    <Highlight
                        theme={themes.vsLight}
                        code={codeForPreview}
                        language={"csharp"}
                    >
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre style={{...style, whiteSpace:"pre-wrap"}}>
                            {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                            ))}
                        </pre>
                        )}
                    </Highlight>
                    </TabPanel>
                    <TabPanel px={0}>
                    {serpLoading ? <Spinner /> : JSON.stringify(keywordData) != "{}" ? <pre>{JSON.stringify(keywordData, null, 2)}</pre> : <Text fontSize={"md"}>Query the API with a keyword to get a result.</Text>}
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Box></Flex>
          </Flex>
          </Flex>
          </Flex>
        </Flex>
        <Footer />
    </div>
  )
}
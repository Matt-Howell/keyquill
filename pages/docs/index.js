import Head from 'next/head'
import {  Box, Text, Heading,
    Flex, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Image, UnorderedList,
    ListItem, ListIcon, Link, Button
} from "@chakra-ui/react";
import NHeader from '../../components/NHeader'
import Footer from '../../components/Footer'
import { FaChevronRight, FaClock, FaArrowRight } from 'react-icons/fa'

export default function Tutorial() { 
  return (
    <div>
      <Head>       
        <link rel="canonical" href="https://keywordquill.com/docs/" />

        <title>API Documentation - Keyword Quill</title>
        <meta name="description" content="Discover how to harness Google's autocomplete suggestions for insightful keyword data with our API guide." />
        
        <meta name="twitter:title" content="API Documentation - Keyword Quill" />
        <meta name="twitter:description" content="Discover how to harness Google's autocomplete suggestions for insightful keyword data with our API guide." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/docs.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/docs/`}/>
        
        <meta property="og:title" content="API Documentation - Keyword Quill" />
        <meta property="og:description" content="Discover how to harness Google's autocomplete suggestions for insightful keyword data with our API guide." />
        <meta property="og:image" content="https://keywordquill.com/s/i/docs.webp" />
        <meta property="og:url" content={`https://keywordquill.com/docs/`}/>
        
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
      <Box as='main'>
            <Flex pb={12} px={{ base:4, md:0 }} width="100%" pt={10} justifyContent={"center"}>
                <Flex justifyContent={"start"} width="100%" flexDirection={{ base:"column", md:"row" }} maxWidth={"1392px"}>
                    <Flex flexDirection={"column"} justifyContent={"start"} width={{ base:"100%", md:"70%" }} px={{ base:"none", md:4 }}>
                        <Breadcrumb spacing='8px' separator={<FaChevronRight size={12} opacity='0.8' color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/' _hover={{ textDecoration:"none", opacity:0.9 }} opacity={0.8}>Keyword Quill</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink textOverflow={'ellipsis'} href='/docs' _hover={{ textDecoration:"none" }}>API Documentation</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading 
                        as="h1"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={5}
                        fontWeight={500}
                        pb={5}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Using our Google search autocomplete API
                        </Heading>
                        <Image alt='Keyword Quill API Docs' src="https://cdn.keywordquill.com/s/i/docs.webp" mt={5} borderRadius='6px' border={"1px solid rgba(0, 0, 0, 0.1)"} />
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Introduction
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        The Keyword Quill API provides a convenient way to retrieve popular keyword suggestions that people are searching for on Google. By integrating with this API, developers can conduct keyword research to identify trending topics and optimize their content for better visibility in search engines. 
                        <br /><br />
                        Autocomplete suggestions are returned in JSON format, allowing for easy integration into various applications and platforms.
                        </Text>
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Authentication
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        Access to the Keyword Quill API requires authentication using an API key. You can obtain an API key by signing up to Keyword Quill and finding it in your account dashboard.
                        </Text>
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Request Method
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        POST to <strong>https://queries.keywordquill.com/search</strong>
                        </Text>
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Request Headers
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        <UnorderedList spacing={3} fontSize={'1.075rem'} lineHeight={1.65}>
                            <li>X-API-KEY: Your unique API key obtained from Keyword Quill.</li>
                            <li>Content-Type: application/json</li>
                        </UnorderedList>
                        </Text> 
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Request Body
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        The request body should be a JSON object with the following fields:
                        <UnorderedList spacing={3} my={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            <li><strong>keyword</strong> (required): The search keyword for which autocomplete suggestions are to be retrieved. If left empty, the API will return an error.</li>
                            <li><strong>gl</strong> (optional): The country code (ISO 3166-1 alpha-2) to restrict the search to a specific country. Default is &quot;US&quot;.</li>
                            <li><strong>hl</strong> (optional): The language code (ISO 639-1) to restrict the search to a specific language. Default is &quot;en&quot;.</li>
                        </UnorderedList>
                        Example body:
                        <Box as="pre" mt={4}>
                        {`{
    "keyword": "air fryers",
    "gl": "US",
    "hl": "en"
}`}
                        </Box>
                        </Text>   

                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Response
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        The response contains an array of autocomplete suggestions relevant to the provided keyword. Each suggestion is represented as a string in the data array.
                        <br /><br />
                        Example response: 
                        <Box whiteSpace={"pre-wrap"} as="pre" mt={4}>
                        {`{ 
    account: { 
        credits: 15, 
        api_key: API_KEY 
    }, 
    meta: { 
        gl: "US",
        hl: "en", 
        keyword: "air fryer" 
    },
    data: { 
        keywords: ["best air fryers","air fryer recipes","air fryer chicken", ...]
    }
}`}
                        </Box>
                        </Text>
                        <br />
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        In case of errors, the API returns appropriate HTTP status codes along with error messages in the response body.
                        <br /><br />
                        For any inquiries or assistance regarding the Keyword Quill API, please contact help@keywordquill.com.
                        </Text>
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
                        </Flex>
                    <Box px={4} mt={{ base:6, md:0 }} justifyContent={"start"} width={{ base:"100%", md:"30%" }}>
                        <Flex direction={"column"} p={6} borderRadius='6px' border={"1px solid rgba(0, 0, 0, 0.1)"}>
                            <Heading 
                            as="h3"
                            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                            fontWeight={500}
                            fontSize={'xl'}
                            width="100%"
                            pb={3}
                            boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                            >
                                Post Summary
                            </Heading>
                            <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} mx={0} lineHeight={1.65}>
                                <ListItem fontWeight={600} display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    API Documentation
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>                                
                                    Discover how to harness Google&apos;s autocomplete suggestions for insightful keyword data with our API guide.
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    <ListIcon as={FaClock} fontSize="md" opacity={0.8} />
                                    <strong>Last Updated:&nbsp;</strong> 27 March, 2024
                                </ListItem>
                            </UnorderedList>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
      <Footer />
    </div>
  )
}
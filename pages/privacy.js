import Head from 'next/head'
import { Text,
  Heading,
  Box,
  Stack,
  Container,
  Link,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react'
import NHeader from '../components/NHeader'
import Footer from '../components/Footer.jsx'
import { FaChevronRight } from 'react-icons/fa'

export default function Privacy() { 
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://keywordquill.com/privacy" />

        <title>Privacy - Keyword Quill</title>
        <meta name="description" content="At Keyword Quill, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it." />

        <meta name="twitter:title" content="Privacy - Keyword Quill" />
        <meta name="twitter:description" content="At Keyword Quill, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it." />
        <meta name="twitter:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://keywordquill.com/privacy`}/>

        <meta property="og:title" content="Privacy - Keyword Quill" />
        <meta property="og:description" content="At Keyword Quill, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it." />
        <meta property="og:image" content="https://keywordquill.com/s/i/Quill-512.png" />
        <meta property="og:url" content={`https://keywordquill.com/privacy`}/>

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
          <Box width="100%" padding="1rem 0" bg={'#f0f5f9'}>
            <Container maxW={'5xl'}>
              <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 2, md: 3 }}
                py={{ base: 10, md: 14 }}>
                <Heading
                  fontWeight={600}
                  as="h1"
                  mb={3}
                  fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                  lineHeight={'110%'}>
                  Your Privacy
                </Heading>
                <Text lineHeight={1.5} color={'gray.500'} fontSize="1.25rem" maxW={'3xl'}>
                At Keyword Quill, we put our users first. To keep you in the know, here is our privacy policy - detailing the data we collect and how we use it. 🔒
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1250px'}>
          <Text color={'gray.600'} fontSize={"lg"}>At Keyword Quill, accessible from keywordquill.com, one of our main priorities is the privacy of our visitors. This privacy policy document contains types of information that is collected and recorded by Keyword Quill and how we use it.</Text><br />

<Text color={'gray.600'} fontSize={"lg"}>If you have additional questions or require more information about our privacy policy, do not hesitate to <Link href="/contact" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>contact</Link> us.</Text><br />

<Text color={'gray.600'} fontSize={"lg"}>This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Keyword Quill. This policy is not applicable to any information collected offline or via channels other than this website.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>Consent</Heading>

<Text color={'gray.600'} fontSize={"lg"}>By using our website, you hereby consent to our privacy policy and agree to its terms.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>Information we collect</Heading>

<Text color={'gray.600'} fontSize={"lg"}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>How we use your information</Heading>

<Text color={'gray.600'} fontSize={"lg"}>We use the information we collect in various ways, including to:</Text><br />

<UnorderedList style={{ paddingLeft:"30px" }}>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Provide, operate, and maintain our website</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Improve, personalize, and expand our website</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Understand and analyze how you use our website</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Develop new products, services, features, and functionality</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Send you emails</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Find and prevent fraud</ListItem>
</UnorderedList><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>Log Files</Heading>

<Text color={'gray.600'} fontSize={"lg"}>Keyword Quill follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>Cookies and Web Beacons</Heading>

<Text color={'gray.600'} fontSize={"lg"}>Like any other website, Keyword Quill uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</Text><br />

<Text color={'gray.600'} fontSize={"lg"}>For more general information on cookies, please read <Link href="https://www.allaboutcookies.org/cookies/">&quot;What Are Cookies&quot;</Link>.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>Third Party Privacy Policies</Heading>

<Text color={'gray.600'} fontSize={"lg"}>Keyword Quill&apos;s privacy policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </Text><br />

<Text color={'gray.600'} fontSize={"lg"}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>CCPA Privacy Rights (Do Not Sell My Personal Information)</Heading>

<Text color={'gray.600'} fontSize={"lg"}>Under the CCPA, among other rights, California consumers have the right to:</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>Request that a business delete any personal data about the consumer that a business has collected.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>GDPR Data Protection Rights</Heading>

<Text color={'gray.600'} fontSize={"lg"}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Text><br />
<Text color={'gray.600'} fontSize={"lg"}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text><br />

<Heading
              color={'gray.600'}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid #00000025'}>Children&apos;s Information</Heading>

<Text color={'gray.600'} fontSize={"lg"}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Text><br />

<Text color={'gray.600'} fontSize={"lg"}>Keyword Quill does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Text>
        </Container>
        </Box>
      <Footer />
    </div>
  )
}
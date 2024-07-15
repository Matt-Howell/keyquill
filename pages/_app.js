import '../styles/globals.css'
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"

export default function KeywordQuill({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme({
      initialColorMode: 'light',
      useSystemColorMode: false,
      styles: {
        global: () => ({
          body: {
            bg:'#FFFFFF',
            fontFamily: "'Montserrat', sans-serif",
            color:'#4A5568'
          },
          html: {
            colorScheme:'light'
          }
        }),
      },
    })}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
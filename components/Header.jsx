import { useState, useRef, useEffect } from "react";
import {
  HStack,
  Link,
  Flex,
  IconButton,
  Button,
  Box,
  useToast,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  MenuDivider,
  Badge,
  Stack,
  Collapse,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io'
import { RiMenuLine } from 'react-icons/ri'
import { MdOutlineExitToApp } from 'react-icons/md'
import { TbUserSquareRounded } from 'react-icons/tb'
import { useRouter }  from 'next/router'
import { supabase } from "./utils/supabase";

export default function Header() {
  const router = useRouter()
  const bg = "#fafafa"
  const ref = useRef();
  const toast = useToast();
  const [user, setUser] = useState()
  const [billingEnabled, setBillingEnabled] = useState()
  const [userCredits, setUserCredits] = useState(0)  

  const cols = "gray.700"

  useEffect(() => {
    (async () => { 
      const { data: { user } } = await supabase.auth.getUser()
      await supabase
      .from('uservals')
      .select('searches')
      .eq("id", user.id)
      .then( async (result) => {
          setUserCredits(result.data[0].searches)
          await supabase
          .from('customers')
          .select('stripeId')
          .eq("userId", user.id)
          .then((result) => {
            if (result.data.length > 0) {
              setBillingEnabled(true)
            } else {
              setBillingEnabled(false)
            }
          })
      })
      setUser(user)
    })();
  }, [])

  const logOutSB = async () => {
    let { error } = await supabase.auth.signOut()
    if (error) {
      toast({
        title: "Whoops!",
        description: "An unknown error has occurred. Please try again in a few minutes.",
        status: "error",
        position: "top-end",
        duration: 7500,
        isClosable: true,
      })
    } else {
      toast({
        title: "Signed Out!",
        description: "You have successfully signed out from your account.",
        status: "success",
        position: "top-end",
        duration: 7500,
        isClosable: true,
      })
      router.reload()
    }
  }

  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
    <Flex flexDirection={"column"} as="header"
        borderBottomWidth={1}
        borderBottomColor={"gray.200"}
        bg={bg}>
      <Box
        ref={ref}
        transition="box-shadow 0.2s"
        bg={bg}
        zIndex={isOpen?15:null}
        w={"100%"}
        borderBottomWidth={1}
        borderBottomColor={"gray.200"}
      >
        <Box h="4.5rem" maxWidth={1400} mx="auto">
          <Flex
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex flex={1}>
              <Link href="/dashboard">
                <HStack>


                <svg width="214" height="38" viewBox="0 0 214 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6409 19.2148C11.7629 17.1356 14.1734 14.0868 17.361 11.9009C23.6092 7.61628 30.9326 7.81652 31.1324 7.83122C31.3857 7.85065 31.6292 7.93824 31.8359 8.08436C32.0427 8.23048 32.2048 8.42948 32.3044 8.65948C32.5128 9.12477 33.6385 12.0206 30.954 14.8059C30.814 14.9485 30.6621 15.0792 30.4997 15.1967C30.4886 15.3647 30.4454 15.529 30.3724 15.6809C29.9538 16.5505 29.4541 17.4523 28.857 18.3369C27.8151 19.8825 26.464 21.3927 24.7246 22.5866C21.4687 24.8193 17.6031 25.4261 14.6539 25.5072C13.3209 25.5433 11.9864 25.481 10.6615 25.3207C10.562 25.64 9.60484 28.8668 9.50416 29.4378C9.44206 29.79 9.23984 30.1026 8.94199 30.3068C8.64413 30.5111 8.27504 30.5902 7.91591 30.5269C7.55677 30.4636 7.23702 30.263 7.02698 29.9692C6.81695 29.6754 6.73384 29.3124 6.79594 28.9603C6.92963 28.202 7.34404 26.7704 7.69461 25.6136C8.37773 23.3627 9.51898 21.2939 10.6409 19.2148ZM28.9504 12.9451C29.8513 12.0086 30.0011 11.104 29.9619 10.4946C27.8298 10.4952 22.6171 10.8234 18.3889 13.724C15.6828 15.5785 13.8337 18.1784 12.6535 20.3664C12.2434 21.1256 11.8755 21.9063 11.5514 22.705C12.5509 22.8022 13.5552 22.8375 14.5583 22.8108C17.2524 22.7354 20.5047 22.178 23.1398 20.3698C24.4899 19.444 25.5841 18.2582 26.466 16.9788C25.0226 17.4362 23.5025 17.8062 22.4413 17.9573C22.0808 18.0085 21.7135 17.9169 21.42 17.7026C21.1266 17.4883 20.9311 17.1689 20.8765 16.8147C20.822 16.4605 20.9128 16.1004 21.1291 15.8138C21.3454 15.5271 21.6694 15.3373 22.0299 15.2861C22.9952 15.1482 24.5773 14.759 26.0553 14.2638C26.7884 14.0179 27.4658 13.7554 28.0062 13.5015C28.5908 13.2267 28.8719 13.0257 28.9504 12.9451Z" fill="#2F3C7E"/>
<path d="M48.632 23.944L48.512 21.016L58.04 11.2H60.776L53.408 18.976L52.064 20.464L48.632 23.944ZM46.52 28V11.2H48.92V28H46.52ZM58.424 28L51.536 19.984L53.144 18.208L61.232 28H58.424ZM68.5355 28.144C67.1755 28.144 65.9755 27.864 64.9355 27.304C63.9115 26.744 63.1115 25.976 62.5355 25C61.9755 24.024 61.6955 22.904 61.6955 21.64C61.6955 20.376 61.9675 19.256 62.5115 18.28C63.0715 17.304 63.8315 16.544 64.7915 16C65.7675 15.44 66.8635 15.16 68.0795 15.16C69.3115 15.16 70.3995 15.432 71.3435 15.976C72.2875 16.52 73.0235 17.288 73.5515 18.28C74.0955 19.256 74.3675 20.4 74.3675 21.712C74.3675 21.808 74.3595 21.92 74.3435 22.048C74.3435 22.176 74.3355 22.296 74.3195 22.408H63.4955V20.752H73.1195L72.1835 21.328C72.1995 20.512 72.0315 19.784 71.6795 19.144C71.3275 18.504 70.8395 18.008 70.2155 17.656C69.6075 17.288 68.8955 17.104 68.0795 17.104C67.2795 17.104 66.5675 17.288 65.9435 17.656C65.3195 18.008 64.8315 18.512 64.4795 19.168C64.1275 19.808 63.9515 20.544 63.9515 21.376V21.76C63.9515 22.608 64.1435 23.368 64.5275 24.04C64.9275 24.696 65.4795 25.208 66.1835 25.576C66.8875 25.944 67.6955 26.128 68.6075 26.128C69.3595 26.128 70.0395 26 70.6475 25.744C71.2715 25.488 71.8155 25.104 72.2795 24.592L73.5515 26.08C72.9755 26.752 72.2555 27.264 71.3915 27.616C70.5435 27.968 69.5915 28.144 68.5355 28.144ZM77.8844 32.8C77.2764 32.8 76.6844 32.696 76.1084 32.488C75.5324 32.296 75.0364 32.008 74.6204 31.624L75.6044 29.896C75.9244 30.2 76.2764 30.432 76.6604 30.592C77.0444 30.752 77.4524 30.832 77.8844 30.832C78.4444 30.832 78.9084 30.688 79.2764 30.4C79.6444 30.112 79.9884 29.6 80.3084 28.864L81.1004 27.112L81.3404 26.824L86.3324 15.28H88.5884L82.4204 29.272C82.0524 30.168 81.6364 30.872 81.1724 31.384C80.7244 31.896 80.2284 32.256 79.6844 32.464C79.1404 32.688 78.5404 32.8 77.8844 32.8ZM80.9084 28.408L75.1004 15.28H77.5004L82.4444 26.608L80.9084 28.408ZM93.2392 28L88.5112 15.28H90.6952L94.8952 26.8H93.8632L98.2312 15.28H100.175L104.447 26.8H103.439L107.735 15.28H109.799L105.047 28H102.839L98.8312 17.488H99.5032L95.4472 28H93.2392ZM117.234 28.144C115.954 28.144 114.818 27.864 113.826 27.304C112.834 26.744 112.05 25.976 111.474 25C110.898 24.008 110.61 22.888 110.61 21.64C110.61 20.376 110.898 19.256 111.474 18.28C112.05 17.304 112.834 16.544 113.826 16C114.818 15.44 115.954 15.16 117.234 15.16C118.498 15.16 119.626 15.44 120.618 16C121.626 16.544 122.41 17.304 122.97 18.28C123.546 19.24 123.834 20.36 123.834 21.64C123.834 22.904 123.546 24.024 122.97 25C122.41 25.976 121.626 26.744 120.618 27.304C119.626 27.864 118.498 28.144 117.234 28.144ZM117.234 26.128C118.05 26.128 118.778 25.944 119.418 25.576C120.074 25.208 120.586 24.688 120.954 24.016C121.322 23.328 121.506 22.536 121.506 21.64C121.506 20.728 121.322 19.944 120.954 19.288C120.586 18.616 120.074 18.096 119.418 17.728C118.778 17.36 118.05 17.176 117.234 17.176C116.418 17.176 115.69 17.36 115.05 17.728C114.41 18.096 113.898 18.616 113.514 19.288C113.13 19.944 112.938 20.728 112.938 21.64C112.938 22.536 113.13 23.328 113.514 24.016C113.898 24.688 114.41 25.208 115.05 25.576C115.69 25.944 116.418 26.128 117.234 26.128ZM127.02 28V15.28H129.228V18.736L129.012 17.872C129.364 16.992 129.956 16.32 130.788 15.856C131.62 15.392 132.644 15.16 133.86 15.16V17.392C133.764 17.376 133.668 17.368 133.572 17.368C133.492 17.368 133.412 17.368 133.332 17.368C132.1 17.368 131.124 17.736 130.404 18.472C129.684 19.208 129.324 20.272 129.324 21.664V28H127.02ZM141.838 28.144C140.606 28.144 139.502 27.872 138.526 27.328C137.566 26.784 136.806 26.024 136.246 25.048C135.686 24.072 135.406 22.936 135.406 21.64C135.406 20.344 135.686 19.216 136.246 18.256C136.806 17.28 137.566 16.52 138.526 15.976C139.502 15.432 140.606 15.16 141.838 15.16C142.91 15.16 143.878 15.4 144.742 15.88C145.606 16.36 146.294 17.08 146.806 18.04C147.334 19 147.598 20.2 147.598 21.64C147.598 23.08 147.342 24.28 146.83 25.24C146.334 26.2 145.654 26.928 144.79 27.424C143.926 27.904 142.942 28.144 141.838 28.144ZM142.03 26.128C142.83 26.128 143.55 25.944 144.19 25.576C144.846 25.208 145.358 24.688 145.726 24.016C146.11 23.328 146.302 22.536 146.302 21.64C146.302 20.728 146.11 19.944 145.726 19.288C145.358 18.616 144.846 18.096 144.19 17.728C143.55 17.36 142.83 17.176 142.03 17.176C141.214 17.176 140.486 17.36 139.846 17.728C139.206 18.096 138.694 18.616 138.31 19.288C137.926 19.944 137.734 20.728 137.734 21.64C137.734 22.536 137.926 23.328 138.31 24.016C138.694 24.688 139.206 25.208 139.846 25.576C140.486 25.944 141.214 26.128 142.03 26.128ZM146.374 28V24.568L146.518 21.616L146.278 18.664V10.192H148.582V28H146.374ZM167.331 28.288C166.019 28.288 164.795 28.072 163.659 27.64C162.539 27.208 161.563 26.6 160.731 25.816C159.915 25.032 159.275 24.112 158.811 23.056C158.363 22 158.139 20.848 158.139 19.6C158.139 18.352 158.363 17.2 158.811 16.144C159.275 15.088 159.923 14.168 160.755 13.384C161.587 12.6 162.563 11.992 163.683 11.56C164.803 11.128 166.019 10.912 167.331 10.912C168.659 10.912 169.875 11.128 170.979 11.56C172.099 11.992 173.067 12.6 173.883 13.384C174.715 14.152 175.363 15.064 175.827 16.12C176.291 17.176 176.523 18.336 176.523 19.6C176.523 20.848 176.291 22.008 175.827 23.08C175.363 24.136 174.715 25.056 173.883 25.84C173.067 26.608 172.099 27.208 170.979 27.64C169.875 28.072 168.659 28.288 167.331 28.288ZM172.827 31.864C172.171 31.864 171.547 31.792 170.955 31.648C170.379 31.504 169.803 31.272 169.227 30.952C168.667 30.632 168.075 30.2 167.451 29.656C166.843 29.112 166.179 28.44 165.459 27.64L169.539 26.608C169.971 27.2 170.371 27.672 170.739 28.024C171.107 28.376 171.459 28.624 171.795 28.768C172.147 28.912 172.515 28.984 172.899 28.984C173.923 28.984 174.835 28.568 175.635 27.736L177.363 29.8C176.227 31.176 174.715 31.864 172.827 31.864ZM167.331 24.976C168.083 24.976 168.771 24.848 169.395 24.592C170.035 24.336 170.595 23.968 171.075 23.488C171.555 23.008 171.923 22.44 172.179 21.784C172.451 21.112 172.587 20.384 172.587 19.6C172.587 18.8 172.451 18.072 172.179 17.416C171.923 16.76 171.555 16.192 171.075 15.712C170.595 15.232 170.035 14.864 169.395 14.608C168.771 14.352 168.083 14.224 167.331 14.224C166.579 14.224 165.883 14.352 165.243 14.608C164.603 14.864 164.043 15.232 163.563 15.712C163.099 16.192 162.731 16.76 162.459 17.416C162.203 18.072 162.075 18.8 162.075 19.6C162.075 20.384 162.203 21.112 162.459 21.784C162.731 22.44 163.099 23.008 163.563 23.488C164.043 23.968 164.603 24.336 165.243 24.592C165.883 24.848 166.579 24.976 167.331 24.976ZM184.629 28.192C183.557 28.192 182.597 27.984 181.749 27.568C180.917 27.152 180.269 26.52 179.805 25.672C179.341 24.808 179.109 23.712 179.109 22.384V15.088H182.853V21.832C182.853 22.904 183.077 23.696 183.525 24.208C183.989 24.704 184.637 24.952 185.469 24.952C186.045 24.952 186.557 24.832 187.005 24.592C187.453 24.336 187.805 23.952 188.061 23.44C188.317 22.912 188.445 22.256 188.445 21.472V15.088H192.189V28H188.637V24.448L189.285 25.48C188.853 26.376 188.213 27.056 187.365 27.52C186.533 27.968 185.621 28.192 184.629 28.192ZM195.658 28V15.088H199.402V28H195.658ZM197.53 13.288C196.842 13.288 196.282 13.088 195.85 12.688C195.418 12.288 195.202 11.792 195.202 11.2C195.202 10.608 195.418 10.112 195.85 9.712C196.282 9.312 196.842 9.112 197.53 9.112C198.218 9.112 198.778 9.304 199.21 9.688C199.642 10.056 199.858 10.536 199.858 11.128C199.858 11.752 199.642 12.272 199.21 12.688C198.794 13.088 198.234 13.288 197.53 13.288ZM202.876 28V10.192H206.62V28H202.876ZM210.095 28V10.192H213.839V28H210.095Z" fill="#4A5568"/>
</svg>

                </HStack>
              </Link>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
            <Badge as="a" href="/credits" backgroundColor={"#FFFFFF"} borderColor={"inherit"} boxShadow={"none!important"} borderWidth={"1px"} py={2} px={3} borderRadius={"4px"} height={"fit-content"}><strong>{userCredits}</strong> Credit{userCredits==1?null:"s"}</Badge>
              <Menu placement="bottom-end">
                <MenuButton as={IconButton}
                  size="md"
                  fontSize="lg"
                  justifyContent={'center'}
                  display={{ base:"none", md:'flex' }}
                  variant="ghost"
                  color="current"
                  mx={{ base: "2", md: "3" }}
                  className="noFocus"
                ><TbUserSquareRounded style={{ margin:"0 auto" }} /></MenuButton>
                <MenuList zIndex={151} position="relative">
                  <Text flexDirection={"column"} display={"flex"} alignItems={"center"} fontSize={"medium"} fontWeight={500} color={cols} p={4}>{user ? user.email : null}</Text>
                  <MenuDivider />
                  <form target="_blank" action="https://keywordquill.com/billing" method="POST">
                    <MenuItem _focus={{ background:"inherit" }} _hover={{ background:"inherit" }}>
                      <input type="hidden" name="userId" value={user ? user.id : null} />
                      <Button variant="ghost" isDisabled={!billingEnabled} color={cols} w="full" type="submit">Billing</Button>
                    </MenuItem>            
                  </form>
                  <MenuItem _focus={{ background:"inherit" }} _hover={{ background:"inherit" }}><Button variant="ghost" color={cols} w="full" onClick={() => router.push("/account")}>Account</Button></MenuItem>
                  <MenuItem _focus={{ background:"inherit" }} _hover={{ background:"inherit" }}><Button rightIcon={<MdOutlineExitToApp />} onClick={logOutSB} color={cols} variant="ghost" w="full">Sign Out</Button></MenuItem>
                  </MenuList>
              </Menu>
            </Flex>
            <Flex
            display={{ base: 'flex', xl: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <IoMdClose w={3} h={3} /> : <RiMenuLine w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          </Flex>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav userCredits={userCredits} user={user} />
        </Collapse>
      </Box>
    </Flex>
    </>
  );
}

const MobileNav = ({ user, userCredits, billingEnabled }) => {
    const logOutSB = async () => {
      let { error } = await supabase.auth.signOut()
      if (error) {
        toast({
          title: "Whoops!",
          description: "An unknown error has occurred. Please try again in a few minutes.",
          status: "error",
          position: "top-end",
          duration: 7500,
          isClosable: true,
        })
      } else {
        toast({
          title: "Signed Out!",
          description: "You have successfully signed out from your account.",
          status: "success",
          position: "top-end",
          duration: 7500,
          isClosable: true,
        })
        router.reload()
      }
    }
    const toast = useToast()
    const router = useRouter()
    let coll = 'gray.600'
    const cols = "gray.700"
    const [arrowDir, setArrowDir] = useState(true)
    return (
      <Stack
        bg={'#fafafa'}
        p={4}
        display={{ xl: 'none' }}>
        <>{NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}</>
        <Menu onClose={() => setArrowDir(false)} onOpen={() => setArrowDir(true)}>
          <MenuButton as={Text}
            justifyContent={'center'}
            className="noFocus"
            fontWeight={600}
            my={2}
            pt={2}
            color={coll}
            pointerEvents="all"
          ><Flex alignItems={"center"} w="100%"> <Text mr={3}>Account</Text> {arrowDir ? <FaChevronDown /> : <FaChevronUp />} </Flex></MenuButton>
          <MenuList>
            <Text fontSize={"medium"} fontWeight={500} color={cols} p={4}>{user ? user.email : null}</Text>
            <MenuDivider />
            <form target="_blank" action="https://keywordquill.com/billing" method="POST">
            <MenuItem _focus={{ background:"inherit" }} _hover={{ background:"inherit" }}>
              <input type="hidden" name="userId" value={user ? user.id : null} />
              <Button variant="ghost" isDisabled={billingEnabled} color={cols} w="full" type="submit">Billing</Button>
            </MenuItem>            
            </form>
            <MenuItem _focus={{ background:"inherit" }} _hover={{ background:"inherit" }}><Button variant="ghost" color={cols} w="full" onClick={() => router.push("/account")}>Account</Button></MenuItem>
            <MenuItem _focus={{ background:"inherit" }} _hover={{ background:"inherit" }}><Button rightIcon={<MdOutlineExitToApp />} onClick={logOutSB} color={cols} variant="ghost" w="full">Sign Out</Button></MenuItem>
            </MenuList>
        </Menu>
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    let coll = 'gray.600'
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          pointerEvents={"all"}
          opacity={"1"}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={coll}>
            {label}
          </Text>
          {children && (
            <Icon
              as={FaChevronDown}
              color={coll}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={3}
              h={3}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mb={3}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link _hover={{ color:"blue.300" }} key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

const NAV_ITEMS = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Credits',
      href: '/credits',
    }
];
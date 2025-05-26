import { Box, Flex, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
// import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <Box>
      <Flex
        as="nav"
        bg="blue.800"
        color="white"
        p="6"
        gap="4"
        direction="row"
        align="center"
        justify="space-between"
        width="100%"
      >
        <IconButton
          aria-label="SideNavbar"
          onClick={toggleMenu}
          variant="outline"
          align="flex-start"
          icon={<GiHamburgerMenu />}
        ></IconButton>
        <Text fontWeight="bold">Learning Application</Text>
        <IconButton
          aria-label="View Profile"
          variant="outline"
          icon={<CgProfile />}
        ></IconButton>
      </Flex>
    </Box>
  );
}
export default Navbar;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <Text>Game Station 89</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;

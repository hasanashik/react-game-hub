import { Center, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/HUZAsGameStation.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* justifyContent="space-between" */}
      <HStack spacing={8} padding="15px">
        <Link to={"/"}>
          <Image
            src={logo}
            boxSize="20px"
            w="350px"
            h="80px"
            alt="HUZA's Game Station"
            objectFit="cover"
          ></Image>
        </Link>

        {/* <Text whiteSpace={"nowrap"}>HUZA's Game Station</Text> */}
        <SearchInput></SearchInput>
        <Text whiteSpace={"nowrap"}>HASAN-UZ-ZAMAN ASHIK</Text>
        <Text whiteSpace={"nowrap"}>Inspired from RAWG.IO</Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
}

export default NavBar;

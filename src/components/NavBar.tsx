import { Center, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/HUZAsGameStation.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <>
      <HStack justifyContent="space-between" padding="15px">
        <Image
          src={logo}
          boxSize="20px"
          w="250px"
          h="80px"
          alt="HUZA's Game Station"
        ></Image>

        {/* <Text whiteSpace={"nowrap"}>HUZA's Game Station</Text> */}
        <SearchInput onSearch={onSearch}></SearchInput>

        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
}

export default NavBar;

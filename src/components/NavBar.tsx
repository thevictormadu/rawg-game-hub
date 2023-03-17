import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import ColorToggle from "./ColorToggle";

import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text fontSize="3xl">
        <span style={{ fontWeight: "bold" }}>Vic</span>RawG
      </Text>
      <SearchInput onSearch={onSearch} />
      <ColorToggle />
    </HStack>
  );
};

export default NavBar;

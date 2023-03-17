import { Icon, useColorMode } from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import React from "react";

const ColorToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  
  const darkProperties = {
    as: BsFillSunFill,
    bgColor: "gray.600",
  };

  const lightProperties = {
    as: BsFillMoonFill,
    bgColor: "gray.200",
  };

  const properties = colorMode === 'dark' ? darkProperties : lightProperties;

  return <Icon onClick={toggleColorMode} {...properties} p={1} boxSize={7} borderRadius={5} />;
};

export default ColorToggle;

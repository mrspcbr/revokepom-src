import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="1rem"
      left="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
      title="Dark Mode Toggle"
      aria-label="Dark Mode Toggle"
    />
  );
};

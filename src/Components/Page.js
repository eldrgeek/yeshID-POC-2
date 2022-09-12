import React, { useState, useRef } from "react";
import {
  Box,
  Link,
  Stack,
  ExternalLinkIcon,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";
import Jitsi from "./Jitsi";
import YeshIcon from "./YeshIcon";
import { useQueryState } from "use-location-state";
const chromeURL =
  "https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en";
const Page = (props) => {
  const openEl = useRef(null);
  const [role, setRole] = useQueryState("role", "Customer");
  const [share, setShare] = useState(role !== "Customer");
  const [data, setData] = useState("undefined");
  const openChrome = () => {
    setData(JSON.stringify(document.location.href));
    const win = window.open(
      chromeURL,
      "something",
      "width=500,height=500, left=200, top=200"
    );
  };
  const startShare = () => {
    setShare(true);
  };
  const copyBlock = `
  There's nothing easier than installing YeshID.
  `;
  const buttonStyle = { m: 2, bg: "blue.400", color: "white" };
  return (
    <Box>
      <Stack>
        {share ? null : (
          <>
            <YeshIcon />
            <Text fontSize="4xl"> YeshID is Dead Simple to install </Text>
            <Text fontSize="lg"> {copyBlock} </Text>
          </>
        )}
        {share ? <Jitsi /> : null}
      </Stack>
      >
      <Flex align="left" m={5}>
        <Button {...buttonStyle} onClick={startShare} ref={openEl}>
          Let me see!
        </Button>
        {!share ? null : (
          <>
            <Button {...buttonStyle} onClick={openChrome} ref={openEl}>
              Open
            </Button>
            <Button o {...buttonStyle} nClick={() => openEl.current.click()}>
              {" "}
              Open2
            </Button>
            <Button {...buttonStyle}> Button 1</Button>)
          </>
        )}
        <Box></Box>
      </Flex>
    </Box>
  );
};
export default Page;

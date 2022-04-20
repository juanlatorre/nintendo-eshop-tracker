import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "ui/chakra";
import { FaHeart, FcGoogle, MdFacebook } from "ui/icons";

import { Card } from "ui/components";

export default function Login() {
  return (
    <Center width="100vw" height="100vh" bg="pink.100" flexDirection="column">
      <Card width="380px">
        <Heading size="xl" mb="1em">
          eShop Tracker
        </Heading>

        <Stack>
          <Button leftIcon={<FcGoogle />}>Log In With Google</Button>
          <Button leftIcon={<MdFacebook />} colorScheme="facebook">
            Log In With Facebook
          </Button>
        </Stack>
      </Card>

      <Card width="380px">
        <Text>
          Crafted with <Icon as={FaHeart} color="pink.400" /> by{" "}
          <Link
            color="pink.400"
            href="https://github.com/juanlatorre"
            target="_blank"
          >
            Juan Latorre
          </Link>
        </Text>
      </Card>
    </Center>
  );
}

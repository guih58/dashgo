import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={3}>
          <Text>Matheus Guilherme</Text>
          <Text color="gray.300" fontSize="small">
            matheus.guih58@yahoo.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Mathes Guilherme"
        src="https://github.com/guih58.png"
      />
    </Flex>
  );
}

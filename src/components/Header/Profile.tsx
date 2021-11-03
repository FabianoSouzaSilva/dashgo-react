import { Flex, Text,Box, Avatar } from '@chakra-ui/react';

export default function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Fabiano Souza</Text>
                <Text color="gray.300" fontSize="small">
                    fbn_fabianosouza@outlook.com
                </Text>
            </Box>
            <Avatar size="md" name="Fabiano Souza" src="https://github.com/FabianoSouzaSilva.png" />
        </Flex>
    );
}
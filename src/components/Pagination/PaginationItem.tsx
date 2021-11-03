import { Stack, Button, Box } from '@chakra-ui/react';

interface PaginationItemProps {
    IsCurrent?: boolean;
    number: number;
}

export default function PaginationItem({ IsCurrent = false, number }: PaginationItemProps) {
    if (IsCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}>
                {number}
            </Button>
        );
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}>
            {number}
        </Button>
    );

}
import {
    Box,
    Drawer,
    useBreakpointValue,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";


import SideBarNav from "./SideBarNav";

export default function Sidebar() {

    const { isOpen, onClose} = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
                <DrawerOverlay>
                    <DrawerContent p="4" bg="gray.800">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader >Navegação</DrawerHeader>

                        <DrawerBody >
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>);
    }
    return (
        <Box as="aside" w="64" mr="8" >
            <SideBarNav />
        </Box>
    );
}
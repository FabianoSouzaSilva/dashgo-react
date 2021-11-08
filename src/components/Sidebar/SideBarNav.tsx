import { Stack} from "@chakra-ui/react";
import { RiBarChartBoxLine, RiDashboardLine, RiInputMethodLine, RiUserAddLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBarNav(){
    return (
        <Stack
        spacing="12"
        align="flex-start"
    >
        <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
            <NavLink icon={RiUserAddLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
            <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
            <NavLink icon={RiBarChartBoxLine}>Automação</NavLink>
        </NavSection>
    </Stack>
    );
}
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
            <NavLink icon={RiDashboardLine} href="/dashboard" >Dashboard</NavLink>
            <NavLink icon={RiUserAddLine} href="/users" >Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
            <NavLink icon={RiInputMethodLine} href="/forms" >Formulários</NavLink>
            <NavLink icon={RiBarChartBoxLine} href="/automation" >Automação</NavLink>
        </NavSection>
    </Stack>
    );
}
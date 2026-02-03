import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";
import { links, NavLink } from "@/utils/links";

export default function LinkDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex gap-4 max-w-[100px] border border-gray-400 b-1 rounded-md"
        >
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end" sideOffset={10}>
        {links.map((link: NavLink) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

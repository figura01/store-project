import Link from "next/link";
import { Button } from "../ui/button";
import { VscCode } from "react-icons/vsc";

export default function Logo() {
  return (
    <Button
      size="icon"
      asChild
      className="bg-primary/100 dark:bg-primary/10 dark:text-primary/100"
    >
      <Link href="/">
        <VscCode className="w-6 h-6" />
      </Link>
    </Button>
  );
}

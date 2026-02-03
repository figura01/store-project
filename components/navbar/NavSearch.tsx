import { Input } from "../ui/input";

export default function NavSearch() {
  return (
    <Input
      type="search"
      placeholder="Search products... "
      className="max-w-xs border-1 outline-offset-0 outline-0 focus-visible:ring-[1px] dark:bg-muted"
    />
  );
}

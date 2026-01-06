import ProductFiler from "@/components/shopingView/filter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";
import { sortOptions } from "@/config/config";

function ProductListing() {
  return (
    <div className="grid grid-col-1 md:grid-cols-[300px_1fr] gap-6 p-4 p-6">
      <ProductFiler />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex item-center justify-between">
          <h2 className="text-lg font-semibold">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">10 Products</span>
             <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 px-2 py-1 !bg-white !text-black border">
                <ArrowUpDownIcon className="h-4 w-3" />
                <span>Sort by</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[200px]'>
                <DropdownMenuRadioGroup>
                    {
                        sortOptions.map(sortItem => <DropdownMenuRadioItem key={sortItem.id}>{sortItem.label}</DropdownMenuRadioItem>)
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"></div>
      </div>
    </div>
  );
}
export default ProductListing;

"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const Pagination = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pathName = usePathname();

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push(`${pathName}?page=${currentPage - 1}`, {
        scroll: false,
      });
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      router.push(`${pathName}?page=${currentPage + 1}`, {
        scroll: false,
      });
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="outline"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowLeft />
      </Button>

      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => {
            setCurrentPage(index + 1);
            router.push(`${pathName}?page=${index + 1}`, {
              scroll: false,
            });
          }}
          key={index}
          className={`${
            currentPage === index + 1
              ? "bg-orange-500"
              : "bg-gray-100 text-black"
          } w-8 h-8 rounded-full flex items-center justify-center flex-wrap hover:bg-orange-500 `}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        variant="outline"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;

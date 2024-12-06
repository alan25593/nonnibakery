import Link from "next/link";

export const Breadcrumb = ({ page }: { page: string }) => {
  return (
    <div className="w-full h-[300px] md:h-[425px] bg-gray-200 items-center justify-center flex flex-col gap-4 shadow-redcoach-lg">
      <h2 className="text-6xl text-center font-bold">{page}</h2>
      <div className="text-center">
        <p className="font-semibold md:text-lg text-base ">
          <Link href={"/"} className="hover:text-purple transition-all">
            Inicio
          </Link>{" "}
          - <span className="text-purple font-semibold">{page}</span>
        </p>
      </div>
    </div>
  );
};

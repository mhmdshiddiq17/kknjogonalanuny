// "use client";
// import UserTable from "@/components/user-table"
import ProductTable from "@/components/product-table"
// import type { Metadata } from "next"
import Link from "next/link";

// export const metadata: Metadata = {
//     title: "Warga",
// }


const ProductPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-black">
        <div className="w-full mx-auto py-10">
          <div className="flex justify-center gap-x-10">
            <h1 className="text-2xl font-bold">Data Warga</h1>
            <Link href="/product/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Tambah Data
            </Link>
          </div>
            <ProductTable />
        </div>
    </div>
  )
}

export default ProductPage

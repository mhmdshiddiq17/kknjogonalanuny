"use client";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { useState, useEffect } from "react";
  import DownloadBtn from "./downloadBtn";
  import DebouncedInput from "./debouncedInput";
  import { SearchIcon } from "@/public/Icons/Icons";
  import { getWargaByRT } from "@/lib/data"; // Adjust the import according to your file structure
  import { TrashOutline, OpenOutline } from 'react-ionicons'
  import { deleteWarga } from "@/lib/actions";
  import { calculateAge } from "@/lib/utils";

//   interface User {
//     id: string;
//     namaLengkap: string;
//     jenisKelamin: string;
//     pekerjaan: string;
//     agama: string;
//     pendidikan: string;
//     tanggalLahir: string; // atau Date jika sudah dalam format tanggal
//     rt: {
//         nomor: string;
//     };
// }

  const TanStackTable = () => {
    const columnHelper = createColumnHelper();

    const handleDelete = async (userId: string) => {
        // Menampilkan dialog konfirmasi
        const confirmed = window.confirm("Apakah Anda yakin ingin menghapus pengguna ini?");
        if (confirmed) {
            await deleteWarga(userId);
            alert("Data berhasil dihapus");
            window.location.reload();
        } else {
            // Jika pengguna membatalkan, tidak ada tindakan yang diambil
            alert('Penghapusan dibatalkan.');
        }
    };
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columns: any = [
      columnHelper.accessor("", {
        id: "S.No",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "No",
      }),
      columnHelper.accessor("namaLengkap", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Nama Lengkap",
      }),
      columnHelper.accessor("jenisKelamin", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Jenis Kelamin",
      }),
      columnHelper.accessor("pekerjaan", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Pekerjaan",
      }),
      columnHelper.accessor("agama", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Agama",
      }),
      columnHelper.accessor("pendidikan", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Pendidikan",
      }),
      columnHelper.accessor("tanggalLahir", {
        cell: (info) => <span>{calculateAge(info.getValue())}</span>,
        header: "Umur",
      }),
      columnHelper.accessor("rt.nomor", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "RT",
      }),
      columnHelper.accessor("id", {
        id: "aksi",
        header: "Actions",
        cell: (info) => (
            <div className="flex space-x-2">
                <button onClick={() => handleDelete(info.getValue())}>
                    <TrashOutline width={20} color="#fff" />
                </button>
                <button onClick={() => console.log(info.getValue())}>
                    <OpenOutline  width={20} color="#fff" />
                </button>
            </div>
        ),
      })
    ];
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>([]);
    const [globalFilter, setGlobalFilter] = useState("");
    // const [page, setPage] = useState(1); // For pagination
    // const [searchQuery, setSearchQuery] = useState(""); // For search query
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getWargaByRT();
          setData(result);
        } catch (error) {
          console.error("Error fetching warga data:", error);
        }
      };
      fetchData();
    }, []); 
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
    return (
      <div className="p-2 max-w-full mx-auto text-white fill-gray-400">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <SearchIcon />
            <DebouncedInput
              value={globalFilter ?? ""}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(value: any) =>setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none text-black border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
              placeholder="Search all columns..."
            />
          </div>
          <DownloadBtn data={data} fileName={"warga"} />
        </div>
        <table className="border border-gray-700 w-full text-left">
          <thead className="bg-indigo-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`
                  ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32 bg-gray-800">
                <td colSpan={9}>Loading ....</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-end mt-2 gap-2 bg-gray-800">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>
  
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-gray-800"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default TanStackTable;
import { DownloadIcon } from "@/public/Icons/Icons";
import * as XLSX from "xlsx";

const DownloadBtn = ({ data = [], fileName = "warga" }) => {
  return (
<button
    className="flex items-center justify-center px-4 gap-x-3 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out"
    onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
    }}
>
    <DownloadIcon /> {/* Menambahkan margin kanan untuk spasi */}
    Download
</button>
  );
};

export default DownloadBtn;

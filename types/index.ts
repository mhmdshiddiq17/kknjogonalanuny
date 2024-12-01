/* eslint-disable @typescript-eslint/no-explicit-any */
export type ColumnData = {
	[key: string]: {
		values: Array<string | boolean | number>;
		classNames?: (value: string | boolean | number) => string;
		renderBoolean?: (value: any) => React.ReactNode;
		renderValue?: (value: string | boolean | number) => React.ReactNode;
	};
};

export type sortType = {
	key: string;
	direction: "asc" | "desc" | null;
};

export interface Warga {
    id: number;
    namaLengkap: string;
    jenisKelamin: string;
    pekerjaan: string;
    agama: string;
    pendidikan: string;
    rt: { nomor: number }; // Adjust based on your actual data structure
}

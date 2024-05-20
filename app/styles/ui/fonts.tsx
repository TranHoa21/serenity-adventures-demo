import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    subsets: ['latin'], // Chỉ định subset hợp lệ cho font Lusitana
    weight: '400', // Chỉ định trọng lượng (font weight) cho font Lusitana
});

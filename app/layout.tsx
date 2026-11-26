import type {Metadata} from 'next';
import './globals.css';
import {studio} from '@/lib/content';
export const metadata:Metadata={title:`${studio.name} — Photography & Film`,description:studio.bio};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

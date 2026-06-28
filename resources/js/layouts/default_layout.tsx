import { NavBar } from '@/components/layout/navbar';
import { router } from '@inertiajs/react'; //  router.visit('/products')

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-bg flex min-h-screen max-w-screen flex-col">
            <NavBar onHomeClick={() => router.visit('/')} />
            <main className="flex flex-1 flex-col px-28 pb-8">{children}</main>
        </div>
    );
}

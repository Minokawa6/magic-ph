import { Button } from '@/components/ui/button';
import DefaultLayout from '@/layouts/default_layout';

export default function Profilepage() {
    return (
        <DefaultLayout>
            <div className="bg-card-bg border-border my-8 flex w-full flex-col gap-4 rounded-md border-2 p-4 shadow-lg/50">
                <h1>Your Profile</h1>
                <div className="flex gap-2">
                    <img className="border-border size-48 rounded-full border-2 object-cover" src="/images/IMG_2460.png" alt="profile picture" />
                    <div className="flex flex-col justify-center">
                        <h1>Minokawa</h1>
                        <h2 className="text-text">rikkumine@gmail.com</h2>
                    </div>
                </div>
                <Button label="Edit Profile"></Button>
            </div>
        </DefaultLayout>
    );
}

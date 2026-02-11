import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bal Manohar Jalan Museum | Planet Patna Foundation',
    description:
        'The Bal Manohar Jalan Museum is the flagship museum initiative of the Planet Patna Foundation, featuring Patna Qalam (Company School) paintings, antiquities, and the R.K. Jalan Archives.',
};

export default function MuseumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

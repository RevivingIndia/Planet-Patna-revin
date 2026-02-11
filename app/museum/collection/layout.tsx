
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Collection | Planet Patna Foundation',
    description:
        'Company School paintings at the Bal Manohar Jalan Museum—Patna Qalam, Murshidabad, Awadh, Benaras, Tanjore, and Trichinopoly traditions.',
};

export default function CollectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

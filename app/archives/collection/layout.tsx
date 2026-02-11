
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Collection | Archives | Planet Patna Foundation',
    description:
        'Explore the archival collection at Planet Patna Foundation. Thematic collections, rare documents, and the stories that shaped the region.',
};

export default function ArchivesCollectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

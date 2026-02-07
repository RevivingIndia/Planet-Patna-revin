export interface ShopProduct {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const ALL_SHOP_PRODUCTS: ShopProduct[] = [
    {
        id: 'bookmark',
        name: 'Heritage Bookmark',
        description: 'Elegant keepsake featuring Patna’s motifs. Perfect for readers and collectors.',
        image: '/shop/bookmark.jpg',
    },
    {
        id: 'coaster',
        name: 'Coaster Set',
        description: 'Handcrafted coasters with archival-inspired designs for your table.',
        image: '/shop/coaster.png',
    },
    {
        id: 'coaster-1',
        name: 'Coaster Set (Design B)',
        description: 'A second set of artful coasters celebrating local heritage.',
        image: '/shop/coaster-1.png',
    },
    {
        id: 'paperweight',
        name: 'Paperweight',
        description: 'Sturdy, decorative paperweight—a small piece of history for your desk.',
        image: '/shop/paperweight-1.png',
    },
    {
        id: 'postcards',
        name: 'Postcards',
        description: 'A set of postcards capturing Patna’s landmarks and stories.',
        image: '/shop/postcards.jpg',
    },
    {
        id: 'quila-house',
        name: 'Quila House Book',
        description: 'Dive into the history and legacy of Quila House in this illustrated book.',
        image: '/shop/quila-house-book.png',
    },
    {
        id: 'dual-heritage',
        name: 'The Dual Heritage',
        description: 'A compelling read on the layered cultural heritage of the region.',
        image: '/shop/dual-heritage-book.jpg',
    },
];

/** Product IDs to show on home page "Shop with Us" (rest are only on /shop). */
export const FEATURED_SHOP_IDS = ['bookmark', 'coaster', 'paperweight'];

export function getFeaturedProducts(): ShopProduct[] {
    return ALL_SHOP_PRODUCTS.filter((p) => FEATURED_SHOP_IDS.includes(p.id));
}

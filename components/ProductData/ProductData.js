const ProductData = [
    {
        id: 1,
        name: 'شیر کم چرب غنی شده با ویتامین D پاک ۱ لیتری',
        brand: {
            brandEn: 'pak',
            brandPe: 'پاک',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e671bbe9.jpg'
            },
        ],
        category: {
            categoryEn: 'dairy-products',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کم چرب'},
            {id: 2, name: 'ساده'}
        ],
        price: 10900,
        discount: 14,
        MaximumOrder: 4
    },

    {
        id: 2,
        name: 'نوشابه سون آپ ۳۳۰ میلی لیتری',
        brand: {
            brandEn: '7up',
            brandPe: 'سون آپ',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5fd48b08e3257.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5fd48afd49d4b.jpg'
            }
        ],
        category: {
            categoryEn: 'drinks',
            categoryPe: 'نوشیدنی'
        },
        group: {
            groupId: 1,
            groupName: 'نوشابه'
        },
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'لیمویی'},
            {id: 2, name: 'قوطی'},
            {id: 3, name: 'یکنفره'}
        ],
        price: 8100,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 3,
        name: 'پرتقال تامسون جنوب درجه یک بسته ۱ کیلوگرمی',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
            }
        ],
        category: {
            categoryEn: 'fruit-and-vegetables',
            categoryPe: 'میوه و سبزیجات تازه'
        },
        group: {
            groupId: 1,
            groupName: 'میوه تازه'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 31300,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 4,
        name: 'قاووت پسته‌ای کلاسیک شیررضا ۱۴۰ گرمی',
        brand: {
            brandEn: 'shir-reza',
            brandPe: 'شیررضا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61657b8b6331d.jpg'
            }
        ],
        category: {
            categoryEn: 'nuts',
            categoryPe: 'خشکبار، دسر و شیرینی'
        },
        group: {
            groupId: 1,
            groupName: 'انواع شیرینی'
        },
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 85000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 5,
        name: 'آب استریلیزه نوزادان ماجان ۳۳۰ میلی لیتری',
        brand: {
            brandEn: 'majan',
            brandPe: 'ماجان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/388379-1.jpg'
            }
        ],
        category: {
            categoryEn: 'kids',
            categoryPe: 'کودک و نوزاد'
        },
        group: {
            groupId: 1,
            groupName: 'مواد غذایی کودک'
        },
        inventory: {
            available: true,
            quantity: 13,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 8500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 6,
        name: 'ماکارونی ۱.۵ زر ماکارون ۷۰۰ گرمی',
        brand: {
            brandEn: 'zar-macaron',
            brandPe: 'زر ماکارون',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-122727.jpg'
            }
        ],
        category: {
            categoryEn: 'grocery-bread',
            categoryPe: 'خواربار و نان'
        },
        group: {
            groupId: 1,
            groupName: 'ماکارونی و لازانیا و رشته'
        },
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 8600,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 7,
        name: 'تخم مرغ تلاونگ ۶ عددی',
        brand: {
            brandEn: 'telavang',
            brandPe: 'تلاونگ',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210810-310456-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210810-310456-2.jpg'
            }
        ],
        category: {
            categoryEn: 'proteins',
            categoryPe: 'مواد پروتئینی'
        },
        group: {
            groupId: 1,
            groupName: 'تخم مرغ'
        },
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 11400,
        discount: 10,
        MaximumOrder: 6
    },
    {
        id: 8,
        name: 'کنسرو ماهی تون آسان بازشو گلکسی ۱۸۰ گرمی',
        brand: {
            brandEn: 'galaxy',
            brandPe: 'گالکسی',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210818-177823-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210818-177823-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210818-177823-3.jpg'
            }
        ],
        category: {
            categoryEn: 'canned-food',
            categoryPe: 'کنسرو و غذای آماده '
        },
        group: {
            groupId: 1,
            groupName: 'تن ماهی'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 29500,
        discount: 19,
        MaximumOrder: 5
    },
    {
        id: 9,
        name: 'کیسه زباله متوسط هایپراستار ۴۲ عددی',
        brand: {
            brandEn: 'hyperstar',
            brandPe: 'هایپر استار',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-279460-a.jpg'
            }
        ],
        category: {
            categoryEn: 'home-and-lifestyle',
            categoryPe: 'خانه و سبک زندگی'
        },
        group: {
            groupId: 1,
            groupName: 'لوازم یکبارمصرف'
        },
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 43000,
        discount: 11,
        MaximumOrder: 6
    },
    {
        id: 10,
        name: 'دستمال کاغذی ۲ لایه شکوه ۵۰ عددی',
        brand: {
            brandEn: 'shokouh',
            brandPe: 'شکوه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/352394-(2).jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/352394-(3).jpg'
            }
        ],
        category: {
            categoryEn: 'detergent',
            categoryPe: 'دستمال و شوینده'
        },
        group: {
            groupId: 1,
            groupName: 'دستمال کاغذی'
        },
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'جعبه ای'},
        ],
        price: 7200,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 11,
        name: 'ژل شستشو پوست خشک کامان ۵۰۰ میلی لیتری',
        brand: {
            brandEn: 'comeon',
            brandPe: 'کامان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/619b7c166b04d.jpg'
            },
        ],
        category: {
            categoryEn: 'health-and-beauty',
            categoryPe: 'آرایشی و بهداشتی'
        },
        group: {
            groupId: 1,
            groupName: 'بهداشت و مراقب صورت'
        },
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ژل'},
        ],
        price: 75300,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 12,
        name: 'مربا توت فرنگی هایپراستار ۶۱۰ گرمی',
        brand: {
            brandEn: 'hyperstar',
            brandPe: 'هایپر استار',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210921-312506-1.jpg'
            },
        ],
        category: {
            categoryEn: 'breakfast',
            categoryPe: 'صبحانه'
        },
        group: {
            groupId: 1,
            groupName: 'مربا'
        },
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'توت فرنگی'},
        ],
        price: 36900,
        discount: null,
        MaximumOrder: 2
    },
    {
        id: 13,
        name: 'لامپ شمعی ۷ وات مهتابی سیدکو',
        brand: {
            brandEn: 'sidco',
            brandPe: 'سیدکو',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/10272021-332201-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/10272021-332201-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/10272021-332201-3.jpg'
            }
        ],
        category: {
            categoryEn: '13',
            categoryPe: 'لوازم برقی و دیجیتال'
        },
        group: {
            groupId: 1,
            groupName: 'نور و روشنایی'
        },
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ماهی'},
            {id: 2, name: 'کنسرو'},
            {id: 3, name: 'ساده'}
        ],
        price: 34300,
        discount: 42,
        MaximumOrder: 6
    },
    {
        id: 14,
        name: 'چوب شور آلبینا شیرین عسل ۳۰ گرمی',
        brand: {
            brandEn: 'shirin-asal',
            brandPe: 'شیرین عسل',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210811-271726-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210811-271726-2.jpg'
            }
        ],
        category: {
            categoryEn: 'junk-food',
            categoryPe: 'تنقلات'
        },
        group: {
            groupId: 1,
            groupName: 'بیسکویت و ویفر'
        },
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کراکر و چوب شور'},
        ],
        price: 1000,
        discount: 5,
        MaximumOrder: 12
    },
    {
        id: 15,
        name: 'سس فلفل سبز گالری ۸۸ میلی لیتری',
        brand: {
            brandEn: 'gloria',
            brandPe: 'گلوریا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5fa27c8a8b43a.jpg'
            }
        ],
        category: {
            categoryEn: 'condiment',
            categoryPe: 'چاشنی و افزودنی'
        },
        group: {
            groupId: 1,
            groupName: 'سس'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'تند'},
        ],
        price: 9900,
        discount: 20,
        MaximumOrder: 6
    }
]

export default ProductData
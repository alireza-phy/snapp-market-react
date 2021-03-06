//------------------------------ دسته بندی 1:لبنیات-------------------------------------
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
        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
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
        name: 'شیر استریلیزه فرادما پرچرب ۳٪ چربی کاله ۱ لیتری',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5fd9b62661447.jpg'
            }
        ],
        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'پر چرب'},
        ],
        price: 17000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 3,
        name: 'شیر کاکائو دنت ۱۲۵ میلی لیتری',
        brand: {
            brandEn: 'danette',
            brandPe: 'دنت',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf471e1101b.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf474114e7e.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کاکائو'},
        ],
        price: 4500,
        discount: 15,
        MaximumOrder: 6
    },
    {
        id: 4,
        name: 'شیر موز عالیس ۱ لیتری',
        brand: {
            brandEn: 'alis',
            brandPe: 'عالیس',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cdb2f4a7649.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'موز'},
        ],
        price: 21000,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 5,
        name: 'شیر نارگیل عالیس ۱ لیتری',
        brand: {
            brandEn: 'alis',
            brandPe: 'عالیس',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf2897dc217.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf28b24e84f.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 24000,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 6,
        name: 'شیر کم چرب میهن ۲۰۰ میلی لیتری',
        brand: {
            brandEn: 'mihan',
            brandPe: 'میهن',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-244920-a.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'کم چرب'}
        ],
        price: 5000,
        discount: 16,
        MaximumOrder: 6
    },
    {
        id: 7,
        name: 'شیر کاکائو پرچرب پاک ۱ لیتری',
        brand: {
            brandEn: 'pak',
            brandPe: 'پاک',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1fb05945f.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پرچرب'},
            {id: 2, name: 'کاکائو'}
        ],
        price: 17500,
        discount: 13,
        MaximumOrder: 4
    },
    {
        id: 8,
        name: 'شیر نارگیل عالیس ۲۰۰ میلی لیتری',
        brand: {
            brandEn: 'alis',
            brandPe: 'عالیس',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf4492cd793.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/312287-a.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 7500,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 9,
        name: 'شیر پرچرب مدت دار دومینو ۱ لیتری',
        brand: {
            brandEn: 'domino',
            brandPe: 'دومینو',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61e5c928b3613.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61e5c927e3469.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'پر چرب'}
        ],
        price: 17000,
        discount: 12,
        MaximumOrder: 6
    },
    {
        id: 10,
        name: 'کاپوچینو سولاته کاله ۲۵۰ میلی لیتری',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608eb36349dae.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608eb3b659750.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کاپوچینو'}
        ],
        price: 18000,
        discount: 25,
        MaximumOrder: 6
    },
    {
        id: 11,
        name: 'شیر زیرو کاله ۱ لیتری',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61e5c98e74dfb.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61e5c98db64ee.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'کم چرب'}
        ],
        price: 16500,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 12,
        name: 'شیر کاکائو کاله ۲۰۰ میلی لیتری',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-106673-a.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 1,
        groupName: 'شیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کاکائو'}
        ],
        price: 6000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 13,
        name: 'پنیر پیتزا رنده شده دالیا ۵۰۰ گرمی',
        brand: {
            brandEn: 'dalya',
            brandPe: 'دالیا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-207908-a.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-207908-b.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 2,
        groupName: 'پنیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پنیر پیتزا'},
            {id: 2, name: 'رنده شده'}
        ],
        price: 78000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 14,
        name: 'پنیر ورقه‌ای پارمسان کاله ۱۸۰ گرمی',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5f4cf91da38b1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5f4cf960f1ab5.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 2,
        groupName: 'پنیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ورقه ای'},
            {id: 2, name: 'پنیر پارمسان'}
        ],
        price: 28900,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 15,
        name: 'پنیر خامه ای پگاه ۱۰۰ گرمی',
        brand: {
            brandEn: 'pegah',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608fbaa27f89e.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608fbac80c4d5.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 2,
        groupName: 'پنیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پنیر خامه ای'},
            {id: 2, name: 'قالبی'}
        ],
        price: 7000,
        discount: 15,
        MaximumOrder: 12
    },
    {
        id: 16,
        name: 'پنیر ورقه ای گودا پگاه ۱۸۰ گرمی',
        brand: {
            brandEn: 'pegah',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-305694-a.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-305694-b.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 2,
        groupName: 'پنیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ورقه ای'},
            {id: 2, name: 'پنیر گودا'}
        ],
        price: 28900,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 17,
        name: 'پنیر پیتزا موزارلا رنده شده کم چرب دالیا ۵۰۰ گرمی',
        brand: {
            brandEn: 'dalya',
            brandPe: 'دالیا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608d4ffb93118.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-207910-b.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 2,
        groupName: 'پنیر',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پنیر پیتزا'},
            {id: 2, name: 'رنده شده'}
        ],
        price: 78000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 18,
        name: 'ماست موسیر هراز ۴۵۰ گرمی',
        brand: {
            brandEn: 'haraz',
            brandPe: 'هراز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609669245b683.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609669357ba28.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60966b050384c.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 3,
        groupName: 'ماست',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'طعم دار'},
            {id: 2, name: 'موسیر'}
        ],
        price: 17500,
        discount: 13,
        MaximumOrder: 3
    },
    {
        id: 19,
        name: 'ماست همزده کم چرب پروبیوتیک سبو هراز ۱.۵ کیلوگرمی',
        brand: {
            brandEn: 'haraz',
            brandPe: 'هراز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60966b0befd88.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60966b1e817dd.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60966b2fc1f0e.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 3,
        groupName: 'ماست',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کم چرب'},
        ],
        price: 37500,
        discount: 20,
        MaximumOrder: 6
    },
    {
        id: 20,
        name: 'ماست چکیده موسیردار پگاه ۲۵۰ گرمی',
        brand: {
            brandEn: 'pegha',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6098da1aa8624.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6098da288d05c.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6098da288d05c.jpg'
            },
            {
                id: 4,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-71215-a.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 3,
        groupName: 'ماست',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'طعم دار'},
            {id: 2, name: 'موسیر'}
        ],
        price: 10000,
        discount: 13,
        MaximumOrder: 3
    },
    {
        id: 21,
        name: 'ماست یونانی پرچرب ۵٪ چربی میهن ۹۰۰ گرمی',
        brand: {
            brandEn: 'mihan',
            brandPe: 'میهن',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60966e513f177.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 3,
        groupName: 'ماست',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پرچرب'}
        ],
        price: 33200,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 22,
        name: 'ماست موسیر هراز ۴۵۰ گرمی',
        brand: {
            brandEn: 'haraz',
            brandPe: 'هراز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609669245b683.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609669357ba28.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60966b050384c.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 3,
        groupName: 'ماست',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'طعم دار'},
            {id: 2, name: 'موسیر'}
        ],
        price: 17500,
        discount: 13,
        MaximumOrder: 3
    },
    {
        id: 23,
        name: 'دوغ نعنا گرمادیده بدون گاز هراز ۱.۵ لیتری',
        brand: {
            brandEn: 'haraz',
            brandPe: 'هراز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-303348-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-303348-2.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 4,
        groupName: 'دوغ',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'بدون گاز'},
            {id: 2, name: 'با سبزی معطر'}
        ],
        price: 14900,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 24,
        name: 'دوغ کفیر ۱.۵ لیتری پگاه',
        brand: {
            brandEn: 'pegah',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-185527-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-185527-2.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 4,
        groupName: 'دوغ',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'بدون گاز'}
        ],
        price: 17000,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 25,
        name: 'دوغ نعنا پگاه ۲ لیتری',
        brand: {
            brandEn: 'pegah',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-253951-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-253951-2.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 4,
        groupName: 'دوغ',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'بدون گاز'},
            {id: 2, name: 'با سبزی معطر'}
        ],
        price: 20000,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 26,
        name: 'دوغ گازدار با طعم طبیعی نعناع پگاه ۱.۵ لیتری',
        brand: {
            brandEn: 'pegah',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-71187-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-71187-2.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 4,
        groupName: 'دوغ',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'گازدار'},
            {id: 2, name: 'با سبزی معطر'}
        ],
        price: 15000,
        discount: null,
        MaximumOrder: 5
    },
    {
        id: 27,
        name: 'دوغ هراز ۴ لیتری',
        brand: {
            brandEn: 'haraz',
            brandPe: 'هراز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-248499-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210809-248499-2.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 4,
        groupName: 'دوغ',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'بدون گاز'}
        ],
        price: 36900,
        discount: 25,
        MaximumOrder: 6
    },
    {
        id: 28,
        name: 'کره پاستوریزه کاله ۱۰۰ گرمی',
        brand: {
            brandEn: 'pegah',
            brandPe: 'پگاه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609a8278bdd9f.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5c9dc66b44cab.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5b9cfb758547e.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 5,
        groupName: 'کره',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'صبحانه'}
        ],
        price: 13000,
        discount: 20,
        MaximumOrder: 12
    },
    {
        id: 29,
        name: 'کره دویچه کاله ۱۰۰ گرمی',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609a53d09da0c.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5e3aafe63c716.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5e3ab00148f78.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 5,
        groupName: 'کره',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'صبحانه'}
        ],
        price: 18000,
        discount: 5,
        MaximumOrder: 12
    },
    {
        id: 30,
        name: 'کره گیاهی لیوانی مهگل ۲۵۰ گرمی',
        brand: {
            brandEn: 'mahgol',
            brandPe: 'مهگل',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609a542439095.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609a545b89210.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 5,
        groupName: 'کره',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'گیاهی'}
        ],
        price: 8400,
        discount: 15,
        MaximumOrder: 6
    },
    {
        id: 31,
        name: 'کره گیاهی کم چرب غنی شده با ویتامین D مهگل ۱۵۰ گرمی',
        brand: {
            brandEn: 'mahgol',
            brandPe: 'مهگل',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609a55913bf74.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 5,
        groupName: 'کره',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'گیاهی'}
        ],
        price: 8625,
        discount: 28,
        MaximumOrder: 6
    },
    {
        id: 32,
        name: 'کره پاستوریزه با طعم سیر شکلی ۵۰ گرمی',
        brand: {
            brandEn: 'shakhelli',
            brandPe: 'شکلی',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/358068.jpg'
            }
        ],

        categoryEn: 'dairyProduct',
        categoryPe: 'لبنیات',
        groupId: 5,
        groupName: 'کره',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'صبحانه'}
        ],
        price: 7000,
        discount: 5,
        MaximumOrder: 12
    },
    //------------------------------ دسته بندی 2:نوشیدنی-------------------------------------
    {
        id: 33,
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

        categoryEn: 'drinks',
        categoryPe: 'نوشیدنی',
        groupId: 1,
        groupName: 'نوشابه',
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
        price: 8500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 34,
        name: 'ماءالشعیر لیمویی ایستک ۳۲۰ میلی لیتری',
        brand: {
            brandEn: 'Istak',
            brandPe: 'ایستک',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210731-238464.jpg'
            },

        ],

        categoryEn: 'drinks',
        categoryPe: 'نوشیدنی',
        groupId: 2,
        groupName: 'ماءالعشیر',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'لیمویی'},
            {id: 2, name: 'شیشه ای'},
            {id: 3, name: 'یکنفره'}
        ],
        price: 8100,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 35,
        name: 'نوشیدنی انبه حاوی تکه های میوه رانی ۲۴۰ میلی لیتری',
        brand: {
            brandEn: 'rani',
            brandPe: 'رانی',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60c0817e814e7.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60c07f28044fd.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60c080e40f0c9.jpg'
            }
        ],

        categoryEn: 'drinks',
        categoryPe: 'نوشیدنی',
        groupId: 3,
        groupName: 'آبمیوه',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'انبه'},
            {id: 2, name: 'قوطی'},
            {id: 3, name: 'کوچک'}
        ],
        price: 10000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 36,
        name: 'چای کیسه ای صبحانه احمد ۲۵ عددی',
        brand: {
            brandEn: 'Ahmad',
            brandPe: 'احمد',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60d17d1435205.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5d89d5107480b.jpg'
            }
        ],

        categoryEn: 'drinks',
        categoryPe: 'نوشیدنی',
        groupId: 4,
        groupName: 'چای و دمنوش',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کیسه ای'},

        ],
        price: 17900,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 37,
        name: 'آب آشامیدنی دماوند ۱.۵ لیتری',
        brand: {
            brandEn: 'Damavand',
            brandPe: 'دماوند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60fd13db1b284.jpg'
            },

        ],

        categoryEn: 'drinks',
        categoryPe: 'نوشیدنی',
        groupId: 5,
        groupName: 'آب',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'بزرگ'},

        ],
        price: 6000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 38,
        name: 'بسته قهوه فورى ٣ در ١ نسكافه ۲۰ عددی',
        brand: {
            brandEn: 'NESCAFE',
            brandPe: 'نسکافه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5d7cf43ee8313.jpg'
            },

        ],

        categoryEn: 'drinks',
        categoryPe: 'نوشیدنی',
        groupId: 6,
        groupName: 'قهوه و هات چاکلت',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'فوری'},

        ],
        price: 71000,
        discount: 20,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 3:میوه و سبزیجات-------------------------------------
    {
        id: 39,
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

        categoryEn: 'fruit-and-vegetables',
        categoryPe: 'میوه و سبزیجات تازه',
        groupId: 1,
        groupName: 'میوه تازه',
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
        id: 40,
        name: 'هندوانه گرد ۶.۵ کیلوگرمی ± ۱.۵ کیلوگرم',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617f0c8e71d93.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617f0c8f1fd1d.jpg'
            }
        ],

        categoryEn: 'fruit-and-vegetables',
        categoryPe: 'میوه و سبزیجات تازه',
        groupId: 1,
        groupName: 'میوه تازه',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 64350,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 41,
        name: 'خیار اصفهان ۱ کیلوگرمی',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617ef4b918003.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617ef4b994087.jpg'
            }
        ],

        categoryEn: 'fruit-and-vegetables',
        categoryPe: 'میوه و سبزیجات تازه',
        groupId: 1,
        groupName: 'میوه تازه',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'تازه'}],
        price: 21900,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 42,
        name: 'کاهو رسمی ۱ کیلوگرمی ± ۱۰۰ گرم',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5c19fd35451c2.jpg'
            }
        ],

        categoryEn: 'fruit-and-vegetables',
        categoryPe: 'میوه و سبزیجات تازه',
        groupId: 2,
        groupName: 'سبزیجات و صیفی جات',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'تازه'}],
        price: 9500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 43,
        name: 'لوبیا سبز ۱ کیلوگرمی',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617e7479b24cc.jpg'
            }
        ],

        categoryEn: 'fruit-and-vegetables',
        categoryPe: 'میوه و سبزیجات تازه',
        groupId: 2,
        groupName: 'سبزیجات و صیفی جات',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'تازه'}],
        price: 22900,
        discount: 10,
        MaximumOrder: 2
    },
    {
        id: 44,
        name: 'فلفل دلمه رنگی ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5c2775a7dea20.jpg'
            }
        ],

        categoryEn: 'fruit-and-vegetables',
        categoryPe: 'میوه و سبزیجات تازه',
        groupId: 2,
        groupName: 'سبزیجات و صیفی جات',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'تازه'}],
        price: 10740,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 4:خشکبار، دسر و شیرینی-------------------------------------
    {
        id: 45,
        name: 'پودر کرم کارامل فرمند ۷۰ گرمی',
        brand: {
            brandEn: 'Farmand',
            brandPe: 'فرمند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210711-20657-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210711-20657-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210711-20657-3.jpg'
            }
        ],

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 1,
        groupName: 'دسر',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'کارامل'}],
        price: 19000,
        discount: 31,
        MaximumOrder: 12
    },
    {
        id: 46,
        name: 'تخمه ژاپنی درجه یک فله چرین ۲۵۰ گرمی',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61657b8b6331d.jpg'
            }
        ],

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 2,
        groupName: 'آجیل',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'تخمه'}],
        price: 53750,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 47,
        name: 'خرما پیارم خشکپاک ۴۰۰ گرمی',
        brand: {
            brandEn: 'khoshkpak',
            brandPe: 'خشکپاک',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5dbd69f71e905.jpg'
            }
        ],

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 3,
        groupName: 'خرما',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'خرما پیارم'}],
        price: 90000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 48,
        name: 'پودر ژله با طعم توت فرنگی فرمند ۱۰۰ گرمی',
        brand: {
            brandEn: 'Farmand',
            brandPe: 'فرمند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20591-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20591-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20591-3.jpg'
            }
        ],

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 4,
        groupName: 'ژله',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'توت فرنگی'}],
        price: 14900,
        discount: 22,
        MaximumOrder: 12
    },
    {
        id: 49,
        name: 'آلو بخارا برتر ۴۵۰ گرمی',
        brand: {
            brandEn: 'Bartar',
            brandPe: 'برتر',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211012-351.jpg'
            }
        ],

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 5,
        groupName: 'خشکبار',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 88100,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 50,
        name: 'پودر کیک پرتقالی رشد ۵۰۰ گرمی',
        brand: {
            brandEn: 'Roshd',
            brandPe: 'رشد',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210711-20566-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210711-20566-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210711-20566-3.jpg'
            }
        ],

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 6,
        groupName: 'پودر کیک و پنکیک',
        inventory: {
            available: true,
            quantity: 20,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'پودر کیک'}],
        price: 29950,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 51,
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

        categoryEn: 'nuts',
        categoryPe: 'خشکبار، دسر و شیرینی',
        groupId: 7,
        groupName: 'انواع شیرینی',
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
    //------------------------------ دسته بندی 5:کودک و نوزاد-------------------------------------
    {
        id: 52,
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

        categoryEn: 'kids',
        categoryPe: 'کودک و نوزاد',
        groupId: 1,
        groupName: 'مواد غذایی کودک',
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
        id: 53,
        name: 'شیر خشک نان کید نستله ۴۰۰ گرمی',
        brand: {
            brandEn: 'Nestle',
            brandPe: 'نستله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-279017-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-279017-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-279017-3.jpg'
            }
        ],

        categoryEn: 'kids',
        categoryPe: 'کودک و نوزاد',
        groupId: 1,
        groupName: 'مواد غذایی کودک',
        inventory: {
            available: true,
            quantity: 13,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 30700,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 54,
        name: 'پودر صابون دستی صورتی‌ فیروز فیروز ۴۰۰ گرمی',
        brand: {
            brandEn: 'Firooz',
            brandPe: 'فیروز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-23675-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-23675-2.jpg'
            }
        ],

        categoryEn: 'kids',
        categoryPe: 'کودک و نوزاد',
        groupId: 2,
        groupName: 'بهداشت کودک',
        inventory: {
            available: true,
            quantity: 13,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 24000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 55,
        name: 'شامپو بچه آلوئه‌ورا فیروز ۳۰۰ میلی لیتری',
        brand: {
            brandEn: 'Firooz',
            brandPe: 'فیروز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-23655-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-23655-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-23655-3.jpg'
            }
        ],

        categoryEn: 'kids',
        categoryPe: 'کودک و نوزاد',
        groupId: 2,
        groupName: 'بهداشت کودک',
        inventory: {
            available: true,
            quantity: 13,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 29200,
        discount: 20,
        MaximumOrder: 6
    },
    {
        id: 56,
        name: 'پستانک سیلیکن ۲۹۱ سایز ۲ بیبی لند',
        brand: {
            brandEn: 'baby-land',
            brandPe: 'بیبی لند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20220126-229736-1.jpg'
            }
        ],

        categoryEn: 'kids',
        categoryPe: 'کودک و نوزاد',
        groupId: 3,
        groupName: 'لوازم کودک و نوزاد',
        inventory: {
            available: true,
            quantity: 13,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 34000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 57,
        name: ' مونوپولی یا دی وی دی کنعان',
        brand: {
            brandEn: 'kanaan',
            brandPe: 'کنعان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/259055.jpg'
            }
        ],

        categoryEn: 'kids',
        categoryPe: 'کودک و نوزاد',
        groupId: 4,
        groupName: 'اسباب بازی کودک',
        inventory: {
            available: true,
            quantity: 13,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'سازه و لگو'}],
        price: 84000,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 6:خواروبار و نان-------------------------------------
    {
        id: 58,
        name: 'روغن جوانه ذرت پخت و پز و سالاد زر اویل ۱.۶ لیتری',
        brand: {
            brandEn: 'ZarOil',
            brandPe: 'زر اویل',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210725-322422-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210725-322422-2.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 1,
        groupName: 'روغن',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'روغن ذرت'}],
        price: 156000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 59,
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

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 2,
        groupName: 'ماکارونی و لازانیا و رشته',
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
        id: 60,
        name: 'رب گوجه فرنگی طبیعت ۸۲۰ گرمی',
        brand: {
            brandEn: 'Tabiaat',
            brandPe: 'طبیعت',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210727-256983-1.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 3,
        groupName: 'رب',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 96100,
        discount: 58,
        MaximumOrder: 6
    },
    {
        id: 61,
        name: 'لپه گلستان ۹۰۰ گرمی',
        brand: {
            brandEn: 'Golestan',
            brandPe: 'گلستان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210801-33132-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210801-33132-2.jpg'
            },
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 4,
        groupName: 'حبوبات و سویا',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 71900,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 62,
        name: 'نان تست سبوس سه نان ۵۳۰ گرمی',
        brand: {
            brandEn: 'cenan',
            brandPe: 'سه نان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211222-226994.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 5,
        groupName: 'انواع نان',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'نان تست'}],
        price: 14000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 63,
        name: 'برنج هاشمی مهماندوست ۵ کیلوگرمی',
        brand: {
            brandEn: 'mehmandoost',
            brandPe: 'مهماندوست',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/619cc123d092d.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 6,
        groupName: 'برنج',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'برنج سفید'}],
        price: 494000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 64,
        name: 'نبات زعفرانی شاهسوند ۲۶ عددی',
        brand: {
            brandEn: 'shahsavand',
            brandPe: 'شاهسوند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6028e07322c3b.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 7,
        groupName: 'قند و شکر و نبات',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'نبات نی دار'}],
        price: 32800,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 65,
        name: 'آرد سفید رشد ۴۵۰ گرمی',
        brand: {
            brandEn: 'Roshd',
            brandPe: 'رشد',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210901-155767-1.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 8,
        groupName: 'پودر سوخاری و آرد',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 11000,
        discount: 27,
        MaximumOrder: 6
    },
    {
        id: 66,
        name: 'جو دوسر صبحانه ارگانیک اُ.آ.ب ۲۰۰ گرمی',
        brand: {
            brandEn: 'OAB',
            brandPe: ' اُ.آ.ب',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211010-280603-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211010-280603-2.jpg'
            },
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 9,
        groupName: 'غلات',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'پوست کنده'}],
        price: 46000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 67,
        name: 'خمیر پیراشکی شیری ۹۵۹۵ ۵۰۰ گرمی',
        brand: {
            brandEn: '9595',
            brandPe: '9595',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210816-382585-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210816-382585-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210816-382585-3.jpg'
            }
        ],

        categoryEn: 'grocery-bread',
        categoryPe: 'خواربار و نان',
        groupId: 10,
        groupName: 'انواع خمیر',
        inventory: {
            available: true,
            quantity: 35,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 24100,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 7:پروتئینی-------------------------------------
    {
        id: 68,
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

        categoryEn: 'proteins',
        categoryPe: 'مواد پروتئینی',
        groupId: 1,
        groupName: 'تخم مرغ',
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
        id: 69,
        name: 'فیله مرغ ۵۰۰ گرمی',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/210223-5407-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/210223-5407-2.jpg'
            }
        ],

        categoryEn: 'proteins',
        categoryPe: 'مواد پروتئینی',
        groupId: 2,
        groupName: 'مرغ',
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 36580,
        discount: 10,
        MaximumOrder: 6
    },
    {
        id: 70,
        name: 'سردست گوساله ۵۰۰ گرمی',
        brand: {
            brandEn: 'no-brand',
            brandPe: 'بدون برند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/210223-5201-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/210223-5201-2.jpg'
            }
        ],

        categoryEn: 'proteins',
        categoryPe: 'مواد پروتئینی',
        groupId: 3,
        groupName: 'گوشت قرمز',
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 98950,
        discount: 8,
        MaximumOrder: 3
    },
    {
        id: 71,
        name: 'فیله ماهی کوتر تحفه ۶۰۰ گرمی',
        brand: {
            brandEn: 'tohfe',
            brandPe: 'تحفه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5da590687aba6.jpg'
            }
        ],

        categoryEn: 'proteins',
        categoryPe: 'مواد پروتئینی',
        groupId: 4,
        groupName: 'ماهی و میگو',
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 132200,
        discount: 22,
        MaximumOrder: 6
    },
    {
        id: 72,
        name: 'سوسیس کوکتل دودی ۵۵٪ گوشت کاله ۳۰۰ گرمی',
        brand: {
            brandEn: 'Kale',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210822-176542-1.jpg'
            }
        ],

        categoryEn: 'proteins',
        categoryPe: 'مواد پروتئینی',
        groupId: 5,
        groupName: 'سوسیس و کالباس',
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 30000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 73,
        name: 'کالباس ژیگو کاله ۳۰۰ گرمی',
        brand: {
            brandEn: 'Kale',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210821-140355-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210821-140355-2.jpg'
            }
        ],

        categoryEn: 'proteins',
        categoryPe: 'مواد پروتئینی',
        groupId: 5,
        groupName: 'سوسیس و کالباس',
        inventory: {
            available: true,
            quantity: 9,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 66500,
        discount: 5,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 8:کنسرو وغذای اماده-------------------------------------
    {
        id: 74,
        name: 'نان پیتزا ب.آ ۴۸۰ گرمی',
        brand: {
            brandEn: 'B.A',
            brandPe: 'ب.آ',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-244584-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-244584-2.jpg'
            }
        ],

        categoryEn: 'canned-food',
        categoryPe: 'کنسرو و غذای آماده ',
        groupId: 1,
        groupName: 'فرآورده های منجمد یخچالی',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'خمیرآماده'}],
        price: 15900,
        discount: 25,
        MaximumOrder: 6
    },
    {
        id: 75,
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

        categoryEn: 'canned-food',
        categoryPe: 'کنسرو و غذای آماده ',
        groupId: 2,
        groupName: 'تن ماهی',
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
        id: 76,
        name: 'نودالیت مرغ آماده لذیذ ۷۵ گرمی',
        brand: {
            brandEn: 'amade-laziz',
            brandPe: 'آماده لذیذ',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210908-66182-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210908-66182-2.jpg'
            }
        ],

        categoryEn: 'canned-food',
        categoryPe: 'کنسرو و غذای آماده ',
        groupId: 3,
        groupName: 'غذای نیمه آماده',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'نودل'}],
        price: 8000,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 77,
        name: 'کنسرو سبزیجات مخلوط دلوسه ۴۰۰ گرمی',
        brand: {
            brandEn: 'Delvese',
            brandPe: 'دلوسه',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210829-308163-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210829-308163-2.jpg'
            }
        ],

        categoryEn: 'canned-food',
        categoryPe: 'کنسرو و غذای آماده ',
        groupId: 4,
        groupName: 'کنسرو و کمپوت',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'سبزیجات مخلوط'}],
        price: 23900,
        discount: null,
        MaximumOrder: 5
    },
    {
        id: 78,
        name: 'الویه کالباس نامی نو ۲۰۰ گرمی',
        brand: {
            brandEn: 'namino',
            brandPe: 'نامی نو',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-13278-a.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-13278-b.jpg'
            }
        ],

        categoryEn: 'canned-food',
        categoryPe: 'کنسرو و غذای آماده ',
        groupId: 5,
        groupName: 'غذای آماده مصرف',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'الویه'}],
        price: 17500,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 79,
        name: 'کنسرو بادمجان مکنزی ۳۸۰ گرمی',
        brand: {
            brandEn: 'Makenzy',
            brandPe: 'مکنزی',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/607a9610f2c71.jpg'
            }
        ],

        categoryEn: 'canned-food',
        categoryPe: 'کنسرو و غذای آماده ',
        groupId: 5,
        groupName: 'غذای آماده مصرف',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 17900,
        discount: 19,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 9:خانه و سبک زندگی-------------------------------------
    {
        id: 80,
        name: 'قابلمه تفلون نچسب سایز ۲۰ هایپر استار',
        brand: {
            brandEn: 'hyperstar',
            brandPe: 'هایپر استار',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/07042021-251438-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/07042021-251438-2.jpg'
            },
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 1,
        groupName: 'لوازم آشپزخانه',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 269900,
        discount: 22,
        MaximumOrder: 6
    },
    {
        id: 81,
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

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 2,
        groupName: 'لوازم یکبارمصرف',
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
        id: 82,
        name: 'دستمال گردگیری ۴۰*۳۰ رنگی پرسان ۴ عددی',
        brand: {
            brandEn: 'ParSan',
            brandPe: 'پرسان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211225-266563-1.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 3,
        groupName: 'لوازم خانه',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'دستمال گردگیری'}],
        price: 19000,
        discount: 62,
        MaximumOrder: 6
    },
    {
        id: 83,
        name: 'لیف حمام لایه بردار ریوا ۲ عددی',
        brand: {
            brandEn: 'Riva',
            brandPe: 'ریوا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5d78a4f27c413.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 4,
        groupName: 'کالای حمام و سرویس بهداشتی',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 42900,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 84,
        name: 'چسب ۱۲۳ ۲۰۰ میلی لیتری استار باند',
        brand: {
            brandEn: 'StarBond',
            brandPe: 'استار باند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/11062021-350981-1.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 5,
        groupName: 'ابزار آلات و یراق آلات',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 43800,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 85,
        name: 'ﺧﺎﮎ برگ ۴ لیتری گیلدا',
        brand: {
            brandEn: 'Gilda',
            brandPe: 'گیلدا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/296740.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 6,
        groupName: 'باغبانی',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 40000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 86,
        name: 'ژل آتش زا بزرگ گریلان',
        brand: {
            brandEn: 'GrillOn',
            brandPe: 'گریلان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/337708.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 7,
        groupName: 'گردش و سفر',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 57300,
        discount: 12,
        MaximumOrder: 6
    },
    {
        id: 87,
        name: 'ماسک تنفسی ۳ لایه سبز بریت ۵۰ عددی',
        brand: {
            brandEn: 'Breath Mask',
            brandPe: 'بریت ماسک',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61f63cbe0975b.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/376576-3.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/376576-1.jpg'
            },
            {
                id: 4,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/376576-2.jpg'
            }

        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 8,
        groupName: 'کالای سلامت',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 50000,
        discount: 20,
        MaximumOrder: 6
    },
    {
        id: 88,
        name: 'توپ والیبال چرمی مولتن اف جی تی',
        brand: {
            brandEn: 'FGT',
            brandPe: 'اف جی تی',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6051ac43ba237.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 9,
        groupName: 'ورزش و بازی',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 35500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 89,
        name: 'شیشه شوی خودرو کاسپین ۱ لیتری',
        brand: {
            brandEn: 'Caspian',
            brandPe: 'کاسپین',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-5431-a.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-5431-b.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 10,
        groupName: 'خودرو، موتور سیکلت و دوچرخه',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 18900,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 90,
        name: 'شمع قطر ۶ فانتزی بزرگ هایپراستار',
        brand: {
            brandEn: 'hyperstar',
            brandPe: 'هایپر استار',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211220-369109-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/369109-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/369109-1.jpg'
            },
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 11,
        groupName: 'لوازم جشن و کادو',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 97900,
        discount: 23,
        MaximumOrder: 6
    },
    {
        id: 91,
        name: 'زغال قلیان خط دار سمین همراز',
        brand: {
            brandEn: 'hamraz',
            brandPe: 'همراز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/354399.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 12,
        groupName: 'دخانیات',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 8000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 92,
        name: 'آبرنگ بزرگ آریا ۱۲ رنگ',
        brand: {
            brandEn: 'Aria',
            brandPe: 'آریا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5fa924ca2d837.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-253300-b.jpg'
            }
        ],

        categoryEn: 'home-and-lifestyle',
        categoryPe: 'خانه و سبک زندگی',
        groupId: 13,
        groupName: 'لوازم التحریر و اداری',
        inventory: {
            available: true,
            quantity: 40,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 37000,
        discount: 10,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 10:دستمال و شوینده-------------------------------------
    {
        id: 93,
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

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 1,
        groupName: 'دستمال کاغذی',
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
        id: 94,
        name: 'دستمال رولی حوله ای گلرنگ ۲ عددی',
        brand: {
            brandEn: 'Golrang',
            brandPe: 'گلرنگ',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210929-350452-1.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 2,
        groupName: 'دستمال حوله ای',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 30700,
        discount: 15,
        MaximumOrder: 6
    },
    {
        id: 95,
        name: 'دستمال توالت کم حجم ۴ لایه سافتلن ۱۲ قلو',
        brand: {
            brandEn: 'Softlan',
            brandPe: 'سافتلن',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6159559a865a5.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-241422.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 3,
        groupName: 'دستمال توالت',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
        ],
        price: 101500,
        discount: 2,
        MaximumOrder: 6
    },
    {
        id: 96,
        name: 'پاک کننده چند منظوره سطوح آشپزخانه آنتی گریس سیف ۷۵۰ میلی لیتری',
        brand: {
            brandEn: 'Cif',
            brandPe: 'سیف',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/10172021-199439-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/10172021-199439-2.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 4,
        groupName: 'نظافت خانه و آشپزخانه',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'چند منظوره'},
        ],
        price: 47500,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 97,
        name: 'مایع پاک کننده سرویس بهداشتی من ۱ لیتری',
        brand: {
            brandEn: 'man',
            brandPe: 'من',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/11222021-173166-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/11222021-173166-2.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 5,
        groupName: 'پاک کننده و ضدعفونی کننده سرویس بهداشتی',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 10900,
        discount: 15,
        MaximumOrder: 6
    },
    {
        id: 98,
        name: 'دستکش خانگی ساق کوتاه نرگس سایز کوچک رزمریم',
        brand: {
            brandEn: 'RozMaryam',
            brandPe: 'رزمریم',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/616c077f4ac87.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 6,
        groupName: 'شستشوی ظروف',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 17000,
        discount: 9,
        MaximumOrder: 6
    },
    {
        id: 99,
        name: 'مایع ‌لباسشویی لباس مشکی و تیره سپید ۱ کیلوگرمی',
        brand: {
            brandEn: 'Sepid',
            brandPe: 'سپید',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61237cfe2d7d6.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/612381307aa49.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 7,
        groupName: 'شستشوی لباس',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'تیره شوی'},
        ],
        price: 31000,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 100,
        name: 'مایع دستشویی پرتقال بس ۱ لیتری',
        brand: {
            brandEn: 'bath',
            brandPe: 'بس',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/10172021-250287-1.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 8,
        groupName: 'فوم و مایع دستشویی',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'مایع'},
        ],
        price: 24680,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 101,
        name: 'گندزدای سبزی و میوه من ۵۰۰ میلی لیتری',
        brand: {
            brandEn: 'man',
            brandPe: 'من',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211225-173170-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211225-173170-2.jpg'
            }
        ],

        categoryEn: 'detergent',
        categoryPe: 'دستمال و شوینده',
        groupId: 9,
        groupName: 'ضدعفونی کننده سطوح و میوه',
        inventory: {
            available: true,
            quantity: 70,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 8900,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 11:ارایشی بهداشتی-------------------------------------
    {
        id: 102,
        name: 'دستمال مرطوب مخصوص پوستهای مختلط بیول ۲۰ عددی',
        brand: {
            brandEn: 'BIOL',
            brandPe: 'بیول',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5d81e965655aa.jpg'
            },
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 1,
        groupName: 'محصولات آرایشی',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'دستمال مرطوب'},
        ],
        price: 13950,
        discount: 7,
        MaximumOrder: 6
    },
    {
        id: 103,
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

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 2,
        groupName: 'بهداشت و مراقب صورت',
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
        id: 104,
        name: 'شامپو سدر صحت ۳۰۰ میلی لیتری',
        brand: {
            brandEn: 'sehat',
            brandPe: 'صحت',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-1400-a.jpg'
            },
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 3,
        groupName: 'شامپو و مراقبت مو',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 14300,
        discount: 20,
        MaximumOrder: 6
    },
    {
        id: 105,
        name: 'کیت رنگ مو بلوند ابریشمی شماره ۸.۱ ۵۰ میلی لیتری زی فام',
        brand: {
            brandEn: 'zifam',
            brandPe: 'زی فام',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60c9f47b3909a.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5e65f638ce807.jpg'
            }
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 4,
        groupName: 'آرایش مو',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'رنگ مو و کیت'},
        ],
        price: 69500,
        discount: 10,
        MaximumOrder: 6
    },
    {
        id: 106,
        name: 'بسته ۶ عددی صابون حمام سبز گلنار ۱۳۰ گرمی',
        brand: {
            brandEn: 'Golnar',
            brandPe: 'گلنار',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/11222021-101288-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/11222021-101288-2.jpg'
            }
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 5,
        groupName: 'بهداشت و مراقبت بدن',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'صابون معمولی'},
        ],
        price: 39570,
        discount: 18,
        MaximumOrder: 3
    },
    {
        id: 107,
        name: 'مسواک دو قلو پاتریکس',
        brand: {
            brandEn: 'Patrix',
            brandPe: 'پاتریکس',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/334699.jpg'
            },
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 6,
        groupName: 'بهداشت دهان',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'متوسط'},
        ],
        price: 31000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 108,
        name: 'تیغ چند بار مصرف ۲ لبه نرمال حساس سیلور ۵ عددی',
        brand: {
            brandEn: 'Silver',
            brandPe: 'سیلور',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5e3939fa2513f.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/124748-(2).jpg'
            }
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 7,
        groupName: 'اصلاح صورت و بدن',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'تیغ'},
        ],
        price: 36297,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 109,
        name: 'کاندوم انار کدکس ۱۲ عددی',
        brand: {
            brandEn: 'kodex',
            brandPe: 'کدکس',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-226925-a.jpg'
            },
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 8,
        groupName: 'بهداشت جنسی',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 28500,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 110,
        name: 'رول ضد عرق مردانه فرش اکت مای ۵۰ میلی لیتری',
        brand: {
            brandEn: 'MY',
            brandPe: 'مای',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-249937.jpg'
            },
        ],

        categoryEn: 'health-and-beauty',
        categoryPe: 'آرایشی و بهداشتی',
        groupId: 9,
        groupName: 'اسپری و ضدتعریق',
        inventory: {
            available: true,
            quantity: 11,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'رول'},
            {id: 2, name: 'مردانه'}
        ],
        price: 33100,
        discount: 14,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 12:صبحانه-------------------------------------
    {
        id: 111,
        name: 'عسل چهل گیاه پت آبشن ۱.۸ کیلوگرمی',
        brand: {
            brandEn: 'abshan',
            brandPe: 'آبشن',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210913-342415.jpg'
            },
        ],

        categoryEn: 'breakfast',
        categoryPe: 'صبحانه',
        groupId: 1,
        groupName: 'عسل',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'چهل گیاه'},
        ],
        price: 22500,
        discount: 35,
        MaximumOrder: 6
    },
    {
        id: 112,
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

        categoryEn: 'breakfast',
        categoryPe: 'صبحانه',
        groupId: 2,
        groupName: 'مربا',
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
        id: 113,
        name: 'حلوا ارده شکری ساده عقاب ۴۰۰ گرمی',
        brand: {
            brandEn: 'oghab',
            brandPe: 'عقاب',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211019-85323-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211019-85323-2.jpg'
            }
        ],

        categoryEn: 'breakfast',
        categoryPe: 'صبحانه',
        groupId: 3,
        groupName: 'حلوا ارده و شیره',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'شکری'},
            {id: 2, name: 'حلوا ارده'}
        ],
        price: 49000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 114,
        name: 'شکلات صبحانه فندقی شیری فرمند ۲۰۰ گرمی',
        brand: {
            brandEn: 'Farmand',
            brandPe: 'فرمند',
        },
        images: [
            {
                id: 4,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608e842177ba9.jpg'
            },
        ],

        categoryEn: 'breakfast',
        categoryPe: 'صبحانه',
        groupId: 4,
        groupName: 'شکلات صبحانه',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'فندق'},
            {id: 2, name: 'شیری'}
        ],
        price: 39000,
        discount: 16,
        MaximumOrder: 6
    },
    {
        id: 115,
        name: 'کورن فلکس شکلاتی پنگوئن ۲۷۵ گرمی',
        brand: {
            brandEn: 'Penguin',
            brandPe: 'پنگوئن',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/202108301-122641-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/202108301-122641-2.jpg'
            }
        ],

        categoryEn: 'breakfast',
        categoryPe: 'صبحانه',
        groupId: 5,
        groupName: 'غلات صبحانه',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کاکائو'},
        ],
        price: 31500,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 116,
        name: 'کره بادام زمینی عقاب ۳۳۰ گرمی',
        brand: {
            brandEn: 'oghab',
            brandPe: 'عقاب',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210901-306351-1.jpg'
            },
        ],

        categoryEn: 'breakfast',
        categoryPe: 'صبحانه',
        groupId: 6,
        groupName: 'کره بادام زمینی',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 58500,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 13:لوازم برقی و دیجیتال-------------------------------------
    {
        id: 117,
        name: 'باتری نیم قلم و قلمی کملیون ۸ عددی',
        brand: {
            brandEn: 'camelion',
            brandPe: 'کملیون',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-243662-a.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-243662-b.jpg'
            }
        ],

        categoryEn: 'appliances',
        categoryPe: 'لوازم برقی و دیجیتال',
        groupId: 1,
        groupName: 'باتری، محافظ و رابط',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 32500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 118,
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

        categoryEn: 'appliances',
        categoryPe: 'لوازم برقی و دیجیتال',
        groupId: 2,
        groupName: 'نور و روشنایی',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 34300,
        discount: 42,
        MaximumOrder: 6
    },
    {
        id: 119,
        name: 'جارو برقی PVC-۲۵۵۰۱R قرمز سری Düsseldorf پاکشوما ۲۵۰۰ وات',
        brand: {
            brandEn: 'pakshooma',
            brandPe: 'پاکشوما',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211221-1002055-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b5ce62e7.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b5d7fa8a.jpg'
            }
            ,
            {
                id: 4,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b5e28b6d.jpg'
            }
            ,
            {
                id: 5,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b5eaf787.jpg'
            }
            ,
            {
                id: 6,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b5f2e921.jpg'
            }
            ,
            {
                id: 7,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b958961b.jpg'
            }
            ,
            {
                id: 8,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b9625c5d.jpg'
            }
            ,
            {
                id: 9,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b96941fb.jpg'
            }
            ,
            {
                id: 10,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b9723d21.jpg'
            }
            ,
            {
                id: 11,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b97a1cc4.jpg'
            }
            ,
            {
                id: 12,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b982aa7a.jpg'
            }
            ,
            {
                id: 13,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b989bfcb.jpg'
            }
            ,
            {
                id: 14,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c72b9939500.jpg'
            }
        ],

        categoryEn: 'appliances',
        categoryPe: 'لوازم برقی و دیجیتال',
        groupId: 3,
        groupName: 'لوازم برقی خانه',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'قرمز'},],
        price: 3625000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 120,
        name: 'کولر گازی سرد و گرم MPF-۱۲CH سفید سری Forest پاکشوما ۱۲۰۰۰',
        brand: {
            brandEn: 'pakshooma',
            brandPe: 'پاکشوما',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211221-1002064-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211221-1002064-2.jpg'
            },
        ],

        categoryEn: 'appliances',
        categoryPe: 'لوازم برقی و دیجیتال',
        groupId: 3,
        groupName: 'نور و روشنایی',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'روتاری'},
            {id: 2, name: 'وات12000'},
        ],
        price: 12820000,
        discount: null,
        MaximumOrder: 5
    },
    {
        id: 121,
        name: 'ماشین ظرفشویی MDF-۱۴۳۰۲S سیلور سری Josephine پاکشوما ۱۴ نفره',
        brand: {
            brandEn: 'pakshooma',
            brandPe: 'پاکشوما',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c1c58e411ec.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61c1c58ec9d66.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/61dd87f02f8a2.jpg'
            }
        ],

        categoryEn: 'appliances',
        categoryPe: 'لوازم برقی و دیجیتال',
        groupId: 4,
        groupName: 'لوازم برقی آشپزخانه',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'نقره ای'},
            {id: 2, name: '14 نفره'},
        ],
        price: 17542000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 122,
        name: 'ماشین لباسشویی PWN-۹۶۵۴AJ سفید پاکشوما ۹.۶ کیلوگرمی',
        brand: {
            brandEn: 'pakshooma',
            brandPe: 'پاکشوما',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211221-1002030-1-.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211221-1002030-2.jpg'
            },
            {
                id: 3,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211221-1002030-4.jpg'
            }
        ],

        categoryEn: 'appliances',
        categoryPe: 'لوازم برقی و دیجیتال',
        groupId: 4,
        groupName: 'لوازم برقی آشپزخانه',
        inventory: {
            available: true,
            quantity: 36,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'سفید'},
            {id: 2, name: 'نیمه اتوماتیک'},
        ],
        price: 3359000,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 14:تنقلات-------------------------------------
    {
        id: 123,
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

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 1,
        groupName: 'بیسکویت و ویفر',
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
        id: 124,
        name: 'چیپس سرکه مزمز ۶۰ گرمی',
        brand: {
            brandEn: 'maz-maz',
            brandPe: 'مزمز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210802-248650.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 2,
        groupName: 'چیپس',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ورقه ای'},
            {id: 2, name: 'سرکه ای'}
        ],
        price: 7000,
        discount: 12,
        MaximumOrder: 6
    },
    {
        id: 125,
        name: 'کراسان فندقی کاکائویی شیبابا ۵۰ گرمی',
        brand: {
            brandEn: 'shibaba',
            brandPe: 'شیبابا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210807-299868.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 3,
        groupName: 'کیک و کلوچه',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'فندق'},
        ],
        price: 5500,
        discount: 15,
        MaximumOrder: 12
    },
    {
        id: 126,
        name: 'اسنک طلایی چی توز ۹۰ گرمی',
        brand: {
            brandEn: 'cheatoz',
            brandPe: 'چی توز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210803-27908.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 4,
        groupName: 'پفک و اسنک',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'اسنک'}
        ],
        price: 8000,
        discount: 35,
        MaximumOrder: 3
    },
    {
        id: 127,
        name: 'اسمارتیز پرلیز کوپا ۲۰ گرمی',
        brand: {
            brandEn: 'copa',
            brandPe: 'کوپا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210918-316649.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 5,
        groupName: 'شکلات و آبنبات',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 4000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 128,
        name: 'آدامس اکالیپتوس ۷ عددی بایودنت ۷ عددی',
        brand: {
            brandEn: 'Biodent',
            brandPe: 'بایودنت',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210828-313463.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 6,
        groupName: 'پاستیل و آدامس',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'اکالیپتوس'},
        ],
        price: 10000,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 129,
        name: 'مغز تخمه هندوانه مزمز ۳۵ گرمی',
        brand: {
            brandEn: 'maz-maz',
            brandPe: 'مزمز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6120a97623bab.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6120a97623bab.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 7,
        groupName: 'آجیل تک و مغز آجیلبیسکویت و ویفر',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'تخمه'},
        ],
        price: 10000,
        discount: 19,
        MaximumOrder: 12
    },
    {
        id: 130,
        name: 'پاپ ‌کرن نمکی هاگلز ۵۵ گرمی',
        brand: {
            brandEn: 'hagelz',
            brandPe: 'هاگلز',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210829-256512-1.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 8,
        groupName: 'پاپ کورن و گندمک',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پاپ کورن'},
        ],
        price: 7000,
        discount: 19,
        MaximumOrder: 6
    },
    {
        id: 131,
        name: 'لواشک زرد آلو برتر ۳۰ گرمی',
        brand: {
            brandEn: 'bartar',
            brandPe: 'برتر',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210811-555.jpg'
            }
        ],

        categoryEn: 'junk-food',
        categoryPe: 'تنقلات',
        groupId: 9,
        groupName: 'آلوچه و لواشک',
        inventory: {
            available: true,
            quantity: 25,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'لواشک'},
            {id: 2, name: 'زردآلو'}
        ],
        price: 4000,
        discount: null,
        MaximumOrder: 6
    },
    //------------------------------ دسته بندی 15:چاشنی و افزودنی-------------------------------------
    {
        id: 132,
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

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 1,
        groupName: 'سس',
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
    },
    {
        id: 133,
        name: 'عصاره گوشت مرغ الیت ۸ عددی',
        brand: {
            brandEn: 'elit',
            brandPe: 'الیت',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021120-19813-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021120-19813-2.jpg'
            }
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 2,
        groupName: 'ادویه',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 8000,
        discount: 15,
        MaximumOrder: 6
    },
    {
        id: 134,
        name: 'خیار شور ممتاز سحر ۶۴۰ گرمی',
        brand: {
            brandEn: 'sahar',
            brandPe: 'سحر',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211228-72426-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211228-72426-2.jpg'
            }
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 3,
        groupName: 'خیارشور و زیتون',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'بسته بندی'},
        ],
        price: 38000,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 135,
        name: 'سرکه قرمز وردا ۵۰۰ گرمی',
        brand: {
            brandEn: 'varda',
            brandPe: 'وردا',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021114-160145-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021114-160145-2.jpg'
            },
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 4,
        groupName: 'آبلیمو و سرکه و آبغوره',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 14800,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 136,
        name: 'ترشی سیر مروارید مجید ۶۷۰ گرمی',
        brand: {
            brandEn: 'majid',
            brandPe: 'مجید',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021207-200174-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021207-200174-2.jpg'
            },
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 5,
        groupName: 'ترشی و شور',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'بسته بندی'},
            {id: 2, name: 'سیر'}
        ],
        price: 37500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 137,
        name: 'پودر کاکائو هلندی فرمند ۵۰ گرمی',
        brand: {
            brandEn: 'Farmand',
            brandPe: 'فرمند',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60f684160029a.jpg'
            }
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 6,
        groupName: 'افزودنی های شیرینی پزی',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پودرکاکائو'},
        ],
        price: 16000,
        discount: 5,
        MaximumOrder: 6
    },
    {
        id: 138,
        name: 'عصاره زعفران الیت ۶۴ گرمی',
        brand: {
            brandEn: 'elit',
            brandPe: 'الیت',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021201-175134-1.jpg'
            },
            {
                id: 2,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/2021201-175134-2.jpg'
            }
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 7,
        groupName: 'زعفران',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 2000,
        discount: 14,
        MaximumOrder: 6
    },
    {
        id: 139,
        name: 'سبزی خشک کوکو سبزان ۱۰۰ گرمی',
        brand: {
            brandEn: 'sabzan',
            brandPe: 'سبزان',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20211213-158605-1.jpg'
            }
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 8,
        groupName: 'سبزیجات خشک و سرخ شده',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [{id: 1, name: 'خشک شده'}],
        price: 32140,
        discount: null,
        MaximumOrder: 8
    },
    {
        id: 140,
        name: 'پودر فلفل قرمز هایپراستار ۱۰۰ گرمی',
        brand: {
            brandEn: 'hyperstar',
            brandPe: 'هایپر استار',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5fa27c8a8b43a.jpg'
            }
        ],

        categoryEn: 'condiment',
        categoryPe: 'چاشنی و افزودنی',
        groupId: 9,
        groupName: 'سایر افزودنی ها',
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [],
        price: 21000,
        discount: 20,
        MaximumOrder: 12
    },
]

export default ProductData

export const getSubCategory = (mainCategory) => {
    let result = []
    ProductData.filter
    (item =>
        item.categoryEn === mainCategory).map
    (item => {
            if (!result.find(element => element.name === item.groupName))
                result.push({name: item.groupName , id:item.groupId})
        }
    )

    return result
}


export const AssortmentCardData = [
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5ba7ea4f.png',
        title: 'آرایشی و بهداشتی',
        titleEn: 'health-and-beauty',
        offer: '45'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a61baf7e1.png',
        title: 'میوه و سبزیجات تازه',
        titleEn: "fruit-and-vegetables",
        offer: '25'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a63db458e.png',
        title: 'نوشیدنی',
        titleEn: "drinks",
        offer: '40'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a653eef12.png',
        title: 'مواد پروتئینی',
        titleEn: "proteins",
        offer: '30'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a66977ce3.png',
        title: 'تنقلات',
        titleEn: "junk-food",
        offer: '40'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a67de1462.png',
        title: 'چاشنی و افزودنی',
        titleEn: "condiment",
        offer: '35'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a69760621.png',
        title: 'صبحانه',
        titleEn: "breakfast",
        offer: '43'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a6b6ba3c0.png',
        title: 'کنسرو، غذای آماده و منجمد',
        titleEn: "canned-food",
        offer: '41'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a6d29d1ad.png',
        title: 'کودک و نوزاد',
        titleEn: "kids",
        offer: '44'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a6eaccc7d.png',
        title: 'خشکبار، دسر و شیرینی',
        titleEn: "nuts",
        offer: '40'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a7015b7b9.png',
        title: 'خانه و سبک زندگی',
        titleEn: "home-and-lifestyle",
        offer: '60'
    },
    {
        cardVarity: 'ordinary',
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61ee70e70f503.png',
        title: 'لوازم برقی و دیجیتال',
        titleEn: "appliances",
        offer: '55'
    },
    {
        cardVarity: 'special',
        offer: "۵۰",
        title: "دستمال و شوینده",
        titleEn: "detergent",
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png',
        bkGColor: "rgba(255, 203, 150, 0.27)",
        bordercolor: "rgba(255, 203, 150, 0.43)",
    },
    {
        cardVarity: 'special',
        offer: "۵۵",
        title: "لبنیات",
        titleEn: "dairyProduct",
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5ed7bb6d.png',
        bkGColor: "rgba(168, 224, 244, 0.25)",
        bordercolor: "rgba(168, 224, 244, 0.56)"
    },
    {
        cardVarity: 'special',
        offer: "۳۵",
        title: "خواربار و نان",
        titleEn: "grocery-bread",
        img: 'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5ba7ea4f.png',
        bkGColor: "rgba(250, 237, 163, 0.31)",
        bordercolor: "rgba(250, 237, 163, 0.67)"
    }
]


export const goldenBoqche = (boqcheSub) => {
    let result = ProductData.filter (item =>
        item.categoryEn === boqcheSub && (item.price > 10000 && 15 < item.discount))

    return result
}

export const headerAssortmentData = [
    {
        id: 1, name: "لبنیات", groups: [
            {id: 1, group: 'شیر'},
            {id: 2, group: 'پنیر'},
            {id: 3, group: 'ماست'},
            {id: 4, group: 'دوغ'},
            {id: 5, group: 'کره'},
            {id: 6, group: 'خامه'},
            {id: 7, group: 'کشک'},
            {id: 8, group: 'بستنی'},
        ]
    },
    {
        id: 2, name: 'نوشیدنی', groups: [
            {id: 1, group: 'نوشابه'},
            {id: 2, group: 'ماءالشعیر'},
            {id: 3, group: 'آبمیوه'},
            {id: 4, group: 'چای و دمنوش'},
            {id: 5, group: 'آب'},
            {id: 6, group: 'قهوه و هات چاکلت'},
            {id: 7, group: 'نوشیدنی انرژی زا'},
            {id: 8, group: 'شربت'},
            {id: 9, group: 'عرقیجات'}
        ]
    },
    {
        id: 3, name: 'میوه و سبزیجات تازه', groups: [
            {id: 1, group: 'میوه تازه'},
            {id: 2, group: 'سبزیجات و صیفی جات'}
        ]
    },
    {
        id: 4, name: 'خشکبار، دسر و شیرینی', groups: [
            {id: 1, group: 'دسر'},
            {id: 2, group: 'آجیل'},
            {id: 3, group: 'خرما'},
            {id: 4, group: 'ژله'},
            {id: 5, group: 'خشکبار'},
            {id: 6, group: 'پودر کیک و پنکیک'},
            {id: 7, group: 'انواع شیرینی'}
        ]
    },
    {
        id: 5, name: 'کودک و نوزاد', groups: [
            {id: 1, group: 'مواد غذایی کودک'},
            {id: 2, group: 'بهداشت کودک'},
            {id: 3, group: 'لوازم کودک و نوزاد'},
            {id: 4, group: 'اسباب بازی کودک'}
        ]
    },
    {
        id: 6, name: "خواربار و نان", groups: [
            {id: 1, group: 'روغن'},
            {id: 2, group: 'ماکارونی و لازانیا و رشته'},
            {id: 3, group: 'رب'},
            {id: 4, group: 'حبوبات و سویا'},
            {id: 5, group: 'انواع نان'},
            {id: 6, group: 'برنج'},
            {id: 7, group: 'قند و شکر و نبات'},
            {id: 8, group: 'پودر سوخاری و آرد'},
            {id: 9, group: 'غلات'},
            {id: 10, group: 'انواع خمیر'}
        ]
    },
    {
        id: 7, name: 'مواد پروتئینی', groups: [
            {id: 1, group: 'تخم مرغ'},
            {id: 2, group: 'مرغ'},
            {id: 3, group: 'گوشت قرمز'},
            {id: 4, group: 'ماهی و میگو'},
            {id: 5, group: 'سوسیس و کالباس'}
        ]
    },
    {
        id: 8, name: 'کنسرو و غذای آماده', groups: [
            {id: 1, group: 'فرآورده های منجمد یخچالی'},
            {id: 2, group: 'تن ماهی'},
            {id: 3, group: 'غذای نیمه آماده'},
            {id: 4, group: 'کنسرو و کمپوت'},
            {id: 5, group: 'غذای آماده مصرف'}
        ]
    },
    {
        id: 9, name: 'خانه و سبک زندگی', groups: [
            {id: 1, group: 'لوازم آشپزخانه'},
            {id: 2, group: 'لوازم یکبار مصرف'},
            {id: 3, group: 'لوازم خانه'},
            {id: 4, group: 'کالای حمام و سرویس بهداشتی'},
            {id: 5, group: 'ابزار و آلات و یراق آلات'},
            {id: 6, group: 'باغبانی'},
            {id: 7, group: 'گردش و سفر'},
            {id: 8, group: 'کالای سلامت'},
            {id: 9, group: 'ورزش و بازی'},
            {id: 10, group: 'خودرو، موتور سیکلت و دوچرخه'},
            {id: 11, group: 'لوازم جشن و کادو'},
            {id: 12, group: 'لوازم التحریر و اداری'}
        ]
    },
    {
        id: 10, name: "دستمال و شوینده", groups: [
            {id: 1, group: 'دستمال کاغذی'},
            {id: 2, group: 'دستمال حوله ای'},
            {id: 3, group: 'دستمال توالت'},
            {id: 4, group: 'نظافت خانه و آشپزخانه'},
            {id: 5, group: 'پاک کننده و ضد عفونی کننده سرویس بهداشتی'},
            {id: 6, group: 'شستشوی ظروف'},
            {id: 7, group: 'شستشوی لباس'},
            {id: 8, group: 'فوم و مایع دستشویی'},
            {id: 9, group: 'ضدعفونی کننده سطوح و میوه'}
        ]
    },
    {
        id: 11, name: 'آرایشی و بهداشتی', groups: [
            {id: 1, group: 'محصولات آرایشی'},
            {id: 2, group: 'بهداشت و مراقبت صورت'},
            {id: 3, group: 'شامپو و مراقبت مو'},
            {id: 4, group: 'آرایش مو'},
            {id: 5, group: 'بهداشت و مراقبت بدن'},
            {id: 6, group: 'بهداشت دهان'},
            {id: 7, group: 'اصلاح صورت و بدن'},
            {id: 8, group: 'بهداشت جنسی'},
            {id: 9, group: 'اسپری و ضدتعریق'}
        ]
    },
    {
        id: 12, name: 'صبحانه', groups: [
            {id: 1, group: 'عسل'},
            {id: 2, group: 'مربا'},
            {id: 3, group: 'حلوا ارده و شیره'},
            {id: 4, group: 'شکلات صبحانه'},
            {id: 5, group: 'غلات صبحانه'},
            {id: 6, group: 'کره بادام زمینی'}
        ]
    },
    {
        id: 13, name: 'لوازم برقی و دیجیتال', groups: [
            {id: 1, group: 'باتری، محافظ و رابط'},
            {id: 2, group: 'نور و روشنایی'},
            {id: 3, group: 'لوازم برقی خانه'},
            {id: 4, group: 'لوازم برقی آشپزخانه'}
        ]
    },
    {
        id: 14, name: "تنقلات", groups: [
            {id: 1, group: 'بیسکویت و ویفر'},
            {id: 2, group: 'چیپس'},
            {id: 3, group: 'کیک و کلوچه'},
            {id: 4, group: 'پفک و اسنک'},
            {id: 5, group: 'شکلات و آبنبات'},
            {id: 6, group: 'پاستیل و آدامس'},
            {id: 7, group: 'آجیل تک و مغز آجیل'},
            {id: 8, group: 'پاپ کورن و گندمک'},
            {id: 9, group: 'آلوچه و لواشک'}
        ]
    },
    {
        id: 15, name: 'چاشنی و افزودنی', groups: [
            {id: 1, group: 'سس'},
            {id: 2, group: 'ادویه'},
            {id: 3, group: 'خیارشور و زیتون'},
            {id: 4, group: 'آبلیمو و سرکه و آبغوره'},
            {id: 5, group: 'ترشی و شور'},
            {id: 6, group: 'افزودنی های شیرینی پزی'},
            {id: 7, group: 'زعفران'},
            {id: 8, group: 'سبزیجات خشک و سرخ شده'},
            {id: 9, group: 'سایر افزودنی ها'}
        ]
    }
];

export const SpecialCategory_marketParty = () => {
    let result = ProductData.filter(item =>
        25 < item.discount)
    return result
}

export const SpecialCategory_nessesaryForHome = () => {
    let result = ProductData.filter(item =>
        (item.categoryEn === 'nuts' || item.categoryEn === 'canned-food' || item.categoryEn === 'condiment' || item.categoryEn === 'breakfast') && item.price > 27000 )
    return result
}

export const similarProducts = (productId) => {

    let productInfo = ProductData.filter(item => item.id == productId)[0]
    let similar = ProductData.filter(item => item.groupName === productInfo.groupName && item.id !== productInfo.id)
    for(let item of similar){
        item["categoryPe"]="محصولات مشابه"
    }

    return similar
}

export const ourOffer = (productId) => {

    let productInfo = ProductData.filter(item => item.id == productId)[0]
    let offer = ProductData.filter(item => item.discount > 14 && item.categoryEn === productInfo.categoryEn && item.groupName !== productInfo.groupName)
    for(let item of offer){
        item["categoryPe"]="پیشنهادات ما"
    }

    return offer
}
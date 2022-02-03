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
        category: {
            categoryEn: 'dairy-product',
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
        id: 16,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'پرچرب'},
        ],
        price: 17000,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 17,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 18,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 19,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 20,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'کم چرب '}
        ],
        price: 5000,
        discount: 16,
        MaximumOrder: 6
    },
    {
        id: 21,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پر چرب'},
            {id: 2, name: 'کاکائو'}
        ],
        price: 17500,
        discount: 13,
        MaximumOrder: 4
    },
    {
        id: 22,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 23,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'ساده'},
            {id: 2, name: 'پرچرب'}
        ],
        price: 17000,
        discount: 12,
        MaximumOrder: 6
    },
    {
        id: 24,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 25,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 26,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
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
        id: 27,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 2,
            groupName: 'پنیر'
        },
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
        id: 28,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 2,
            groupName: 'پنیر'
        },
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
        id: 29,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 2,
            groupName: 'پنیر'
        },
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
        id: 30,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 2,
            groupName: 'پنیر'
        },
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
        id: 31,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 2,
            groupName: 'پنیر'
        },
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
        id: 32,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 3,
            groupName: 'ماست'
        },
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
        id: 33,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 3,
            groupName: 'ماست'
        },
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
        id: 34,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 3,
            groupName: 'ماست'
        },
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
        id: 35,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 3,
            groupName: 'ماست'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'پر چرب'}
        ],
        price: 33200,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 36,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 3,
            groupName: 'ماست'
        },
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
        id: 37,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 4,
            groupName: 'دوغ'
        },
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
        id: 38,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 4,
            groupName: 'دوغ'
        },
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
        id: 39,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 4,
            groupName: 'دوغ'
        },
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
        id: 40,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 4,
            groupName: 'دوغ'
        },
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
        id: 41,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 4,
            groupName: 'دوغ'
        },
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
        id: 42,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 5,
            groupName: 'کره'
        },
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
        id: 43,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 5,
            groupName: 'کره'
        },
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
        id: 44,
        name: 'کره گیاهی لیوانی مهگل ۲۵۰ گرمی',
        brand: {
            brandEn: 'mahgol',
            brandPe: 'مهگول',
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 5,
            groupName: 'کره'
        },
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
        id: 45,
        name: 'کره گیاهی کم چرب غنی شده با ویتامین D مهگل ۱۵۰ گرمی',
        brand: {
            brandEn: 'mahgol',
            brandPe: 'مهگول',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/609a55913bf74.jpg'
            }
        ],
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 5,
            groupName: 'کره'
        },
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
        id: 46,
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
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 5,
            groupName: 'کره'
        },
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
        price: 8500,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 47,
        name: 'ماءالشعیر لیمویی ایستک ۳۲۰ میلی لیتری',
        brand: {
            brandEn: 'ISTAK',
            brandPe: 'ایستک',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210731-238464.jpg'
            },
            
        ],
        category: {
            categoryEn: 'drinks',
            categoryPe: 'نوشیدنی'
        },
        group: {
            groupId: 2,
            groupName: 'ماءالعشیر'
        },
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
        id: 48,
        name: 'نوشیدنی انبه حاوی تکه های میوه رانی ۲۴۰ میلی لیتری',
        brand: {
            brandEn: 'RANI',
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
        category: {
            categoryEn: 'drinks',
            categoryPe: 'نوشیدنی'
        },
        group: {
            groupId: 3,
            groupName: 'آبمیوه'
        },
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
        id: 49,
        name: 'چای کیسه ای صبحانه احمد ۲۵ عددی',
        brand: {
            brandEn: 'AHMAD',
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
        category: {
            categoryEn: 'drinks',
            categoryPe: 'نوشیدنی'
        },
        group: {
            groupId: 4,
            groupName: 'چای و دمنوش'
        },
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
        id: 50,
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
        category: {
            categoryEn: 'drinks',
            categoryPe: 'نوشیدنی'
        },
        group: {
            groupId: 5,
            groupName: 'آب'
        },
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
        id: 51,
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
        category: {
            categoryEn: 'drinks',
            categoryPe: 'نوشیدنی'
        },
        group: {
            groupId: 6,
            groupName: 'قهوه و هات هاکلت'
        },
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
        id: 52,
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
        price: 64350,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 53,
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
        tags: [{id: 1, name: 'تازه'}],
        price:21900,
        discount: null,
        MaximumOrder: 6
    },
    {
        id: 54,
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
        category: {
            categoryEn: 'fruit-and-vegetables',
            categoryPe: 'میوه و سبزیجات تازه'
        },
        group: {
            groupId: 2,
            groupName: 'سبزیجات و صیفی جات'
        },
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
        id: 55,
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
        category: {
            categoryEn: 'fruit-and-vegetables',
            categoryPe: 'میوه و سبزیجات تازه'
        },
        group: {
            groupId: 2,
            groupName: 'سبزیجات و صیفی جات'
        },
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
        id: 56,
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
        category: {
            categoryEn: 'fruit-and-vegetables',
            categoryPe: 'میوه و سبزیجات تازه'
        },
        group: {
            groupId: 2,
            groupName: 'سبزیجات و صیفی جات'
        },
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
     //------------------------------ دسته بندی 5:کودک و نوزاد-------------------------------------
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
     //------------------------------ دسته بندی 6:خواروبار و نان-------------------------------------
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
     //------------------------------ دسته بندی 7:پروتئینی-------------------------------------
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
     //------------------------------ دسته بندی 8:کنسرو وغذای اماده-------------------------------------
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
     //------------------------------ دسته بندی 9:خانه و سبک زندگی-------------------------------------
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
     //------------------------------ دسته بندی 10:دستمال و شوینده-------------------------------------
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
     //------------------------------ دسته بندی 11:ارایشی بهداشتی-------------------------------------
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
     //------------------------------ دسته بندی 12:صبحانه-------------------------------------
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
     //------------------------------ دسته بندی 13:لوازم برقی و دیجیتال-------------------------------------
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
     //------------------------------ دسته بندی 14:تنقلات-------------------------------------
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
     //------------------------------ دسته بندی 15:چاشنی و افزودنی-------------------------------------
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
    },
    
]

export default ProductData
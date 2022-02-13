import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, Lens} from "@mui/icons-material";


const SlideDrawer = (props) => {
    const {open, onClose, slideDrawerModal} = props;
    const listItem = [
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
    const drawerWidth = 280;
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                display: {xs: 'block', md: 'none'}
            }}
            anchor="top" open={open} onClose={() => onClose(false)}>
            {
                slideDrawerModal
                ||
                <Box sx={{display: "flex", height: 120, justifyContent: "space-between", padding: "1rem", mx: 1}}>
                    <Typography sx={{fontSize: '1.2rem', fontWeight: 700,}}>دسته بندی ها</Typography>
                    <Close onClick={() => onClose(false)} sx={{color: "gray"}}/>
                </Box>
            }
            <List component="nav" sx={{overflow: "scroll", mx: 1.5}}>
                {listItem.map((item, index) => (
                    <ListItem key={item.id} sx={{
                        display: "flex", flexDirection: "column",
                        alignItems: "flex-start", textAlign: "left"
                    }}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, color: "#2446f5"}}>
                            <Lens sx={{fontSize: 6, opacity: 0.5}}/>
                            <ListItemText primary={
                                <Typography
                                    variant="body2"
                                    component="p"
                                    sx={{fontWeight: 500}}
                                >
                                    {item.name}
                                </Typography>
                            }/>
                        </Box>
                        <ListItemText sx={{mr: 1.5}}>
                            <Typography
                                variant="body2"
                                component="p"
                                sx={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    height: 20,
                                    width: 150,
                                    whiteSpace: 'nowrap',
                                    color: '#a3a3a3'
                                }}
                            >
                                {
                                    item.groups.map((groups) => (
                                        <Typography key={groups.id} variant="body2"
                                                    component="span">
                                            {groups.group}،&nbsp;
                                        </Typography>
                                    ))
                                }
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SlideDrawer;
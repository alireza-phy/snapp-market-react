import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Link from '@mui/material/Link'
const theme = createTheme({
    typography: {
        body1: {
            fontSize: '1rem'
        }
    }
})
const data = {
    id: 2,
    header: 'لبنیات و خرید لبنیات',
    mainText: [
        {
            header: '',
            description: [
                {
                    id: 1,
                    text: 'لبنیات یا فرآورده های لبنی به آن دسته از مواد غذایی گفته می شود که ماده اولیه تهیه آن شیر می‌باشد. مواد لبنی تازه نقش ویژه ای در سبد غذایی خانواده دارند که با مصرف و خرید لبنیات تازه از انواع محلی و پاستوریزه می‌ توانید مهمترین نیاز غذایی بدن خود را تکمیل نمایید.'
                }
            ]
        },
        {
            header: 'انواع لبنیات',
            description: [
                {
                    id: 1,
                    text: 'اصلی ترین محصول لبنیات، شیر می‌باشد. شیر تازه و مدت دار به خوبی بدن شما را از انواع مواد مورد نیاز تامین کرده است و اسنپ مارکت به عنوان یک فروشگاه آنلاین لبنیات، تنوعی بی نظیری از این محصول از جمله انواع شیرقهوه، شیر کم چرب، پرچرب، شیر پاستوریزه و هموژنیزه را در اختیار شما قرار می دهد.'
                },
                {
                    id: 2,
                    text: 'کره در طعم های مختلف میتواند هم به عنوان چاشنی غذا و هم به عنوان صبحانه مورد مصرف قرار گیرد. این محصول در انواع کره حیوانی و گیاهی در دسترس می باشد.'
                },
                {
                    id: 3,
                    text: 'خامه ترکیب بی نظیری از طعم‌های یادآور خاطرات، کیک تولد، شیرینی‌های خامه ای، بستنی سنتی و صبحانه‌ای دلچسب است. در اسنپ مارکت به آسانی می توان انواع خامه تازه و مدت دار، خامه قنادی و خامه صبحانه را در طعم‌ها و بسته بندی‌ های متفاوت در دسترس داشته باشید.'
                },
                {
                    id: 4,
                    text: 'ماست، دوغ و کفیر از محبوب ترین چاشنی‌ها و نوشیدنی های سفره ایرانی می باشند. ماست های سنتی و پاستوریزه، چکیده و همزده، موسیر و طعم دار با انواع پرچرب و کم چرب، نیاز تمام سلیقه ها را برآورده نموده است.'
                },
                {
                    id: 5,
                    text: 'انواع مختلفی از پنیر در سراسر جهان وجود دارد که محبوب ترین آنها در فروشگاه آنلاین لبنیات اسنپ مارکت با همان کیفیت جهانی در دسترس مشتریان گرامی قرار گرفته است. داستان پنیر از پنیر لیقوان و فتا شروع شده و تا پنیرهایی همچون خامه قنادی و پنیر گودا ادامه دارد.'
                }
            ]
        },
        {
            header: 'خواص لبنیات',
            description: [
                {
                    id: 1,
                    text: 'از خواص لبنیات می شود به پروتئین و کلسیم اشاره کرد که نیاز بدن را تامین نموده و از بروز اختلالات و ضایعات استخوانی پیشگیری می‌کند، مصرف کافی لبنیات به رشد کودکان و نوجوانان کمک میکند. همچنین لبنیات بهترین منبع انواع ویتامین‌ها از جمله ویتامین (آ) و ویتامین‌های گروه (ب) به‌ ویژه (ب۲) هستند.'
                }
            ]
        },
        {
            header: 'خرید اینترنتی لبنیات',
            description: [
                {
                    id: 1,
                    text: 'لبنیات می‌ توانند برای افرادی که عدم تحمل لاکتوز ویا حساسیت به مصرف شیر دارند مشکلاتی ایجاد کند، از همین رو سوپرمارکت انلاین اسنپ مارکت طیف وسیعی از انواع لبنیات از جمله لبنیات فاقد لاکتوز و پالم را نیز در سبد محصولات خود گنجانده است و شما قادر خواهید بود دسته مناسب برای مصرفتان را انتخاب نمایید.'
                },
                {
                    id: 2,
                    text: 'علاوه بر این تاریخ انقضا و تولید نیز از جمله مهم ترین فاکتورهای خرید اینترنتی لبنیات است، که در فروشگاه اسنپ مارکت انواع لبنیات با تاریخ مصرف به تازه و یا نسبتا تازه ارسال می گردند.'
                }
            ]
        }
    ]
}
const PageDescription = () => {
    return (
        <Paper sx={{direction: 'rtl', marginY:'1rem', pt: 1, pb: 2, px: 2.5, color: 'rgb(117, 117, 117)'}} variant='outlined'>
            <ThemeProvider theme={theme}>
                <Typography sx={{textAlign: 'justify', lineHeight: 1.5, fontWeight: 600, my: 2, fontFamily: 'iranSans'}}
                            variant='h5'
                            component='h2'>
                    سوپرمارکت اینترنتی اسنپ مارکت
                </Typography>
                {
                    // data.mainText.map((info) => (
                    <Box>
                        {/*<Typography sx={{textAlign: 'justify', lineHeight: 1.5, fontWeight: 600, my: 2}}*/}
                        {/*            variant='h6'*/}
                        {/*            component='h3'>*/}
                        {/*</Typography>*/}
                        {/*{*/}
                        {/*    info.description.map((info) => (*/}
                        <Typography sx={{textAlign: 'justify', lineHeight: 1.5, my: 1, fontFamily: 'iranSans'}}
                                    variant='body1'
                                    component='p'>

                            اسنپ‌مارکت جهت تسریع و تسهیل فرایند خرید اینترنتی و خدمت‌رسانی به هم‌وطنان عزیز،
                            همکاری خود با مجموعه فروشگاه‌های زنجیره‌ای هایپراستار، سوپرمارکت‌ها و
                            فروشگاه‌های لوازم آرایشی و بهداشتی مایلی را آغاز کرده و در زمینه فروش آنلاین
                            کالاهای سوپرمارکتی و سایر مایحتاج روزمره و کالاهای آرایشی و بهداشتی مشغول به
                            خدمت‌رسانی به هم‌میهنان عزیز در برخی از کلان‌شهرهای ایران است.
                            <br/><br/>
                            هدف اسنپ‌مارکت بر این است تا با ارائه کالاهای باکیفیت و در عین حال با قیمت
                            مناسب، امکان خرید را برای کلیه اقشار جامعه مهیا سازد.
                            <br/><br/>
                            سوپرمارکت اینترنتی اسنپ‌مارکت بیش از ۵۰۰۰ کالای متنوع در دسته‌بند‌ی‌های گوناگون
                            نظیر لبنیات، خواربار، میوه و سبزیجات تازه، نان، مواد پروتئینی، لوازم بهداشتی و
                            آرایشی ... را به صورت آنلاین عرضه می‌کند و گستردگی این محصولات این امکان را به
                            کاربران می‌دهد که تمامی اجناس مورد نیاز خود را به صورت یکباره تهیه کرده و با
                            توجه به موقعیت جغرافیایی ثبت شده در
                            <Link href="https://snapp.market/club/download-app" variant='body1' sx={{color:'-webkit-link' , cursor:'pointer' , fontWeight:'bold' , textDecoration:'none' , fontFamily: 'iranSans' , display:'inline'}}> اپلیکیشن </Link>
                            و یا وب‌سایت، اجناس خریداری شده را
                            در زمانی کوتاه و از نزدیکترین شعبه هایپراستار، درب منزل خود تحویل بگیرند.
                        </Typography>
                        {/*    ))*/}
                        {/*}*/}
                    </Box>
                    // )
                    // )
                }
            </ThemeProvider>
        </Paper>

    )
}
export default PageDescription
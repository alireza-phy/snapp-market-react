import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch'
import Slider from '@mui/material/Slider'
import ClearIcon from '@mui/icons-material/Clear';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles';
import PN from "persian-number";
import {useState} from "react";

const ProductsFilter = ({
                            filter,
                            filterRemoveHandler,
                            removeFilterList,
                            categories,
                            brands,
                            types,
                            priceRange,
                            ranger,
                            lowPrice,
                            highPrice,
                            handleChange,
                            justDiscount,
                            justDiscountState
                        }) => {
    const [drawer, setDrawer] = useState(false);
    const drawerClose = () => {
        setDrawer(false);
    }
    const AntSwitch = styled(Switch)(({theme}) => ({
        width: 33,
        height: 17,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(17px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#556ff7',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 10%)',
            width: 13,
            height: 13,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#f2f2f2',
            boxSizing: 'border-box',
        },
    }));
    return (
        <Grid item xs={12} sm={12} md={3} xl={3} sx={{position: 'relative'}}>
            <Box sx={{position: 'sticky', top: 15, display: {xs: 'none', sm: 'none', md: 'block', xl: 'block'}}}>
                {
                    !(!filter.length)
                    &&
                    <Paper variant='outlined' sx={{px: 2, py: 1, mb: 2}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant='subtitle1' component='p'>?????????? ?????? ?????????? ??????</Typography>
                            <Typography variant='body2' component='p'
                                        onClick={removeFilterList}
                                        sx={{color: '#ff3643', cursor: 'pointer'}}>??????</Typography>
                        </Box>
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap', py: 2.5}}>
                            {
                                filter.map((tag) => (
                                    <Paper key={tag.id} variant='outlined' sx={{
                                        p: 1,
                                        borderRadius: 5,
                                        borderColor: '#2446f5',
                                        bgcolor: 'rgb(242, 247, 255)'
                                    }}>
                                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, color: '#2446f5'}}>
                                            <Typography variant='body1' component='span'>
                                                {tag.tagName}
                                            </Typography>
                                            <ClearIcon onClick={() => filterRemoveHandler(tag.id)}
                                                       sx={{cursor: 'pointer'}}/>
                                        </Box>
                                    </Paper>
                                ))
                            }
                        </Box>
                    </Paper>
                }
                <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1, py: 0.25}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='subtitle1' component='p'>
                            ???????? ????????
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            maxHeight: '24rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            overflowY: 'auto'
                        }}>
                            <FormGroup sx={{mr: -1.5}}>
                                {
                                    categories.map((category) => (
                                        <FormControlLabel key={category.id} sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  {category.name}
                                                              </Typography>
                                                          }/>
                                    ))
                                }
                            </FormGroup>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1, py: 0.25}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='subtitle1' component='p'>
                            ????????
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            maxHeight: '24rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            overflowY: 'auto'
                        }}>
                            <FormGroup sx={{mr: -1.5}}>
                                {
                                    brands.map((brand) => (
                                        <FormControlLabel key={brand.id} sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  {brand.pe}
                                                              </Typography>
                                                          }/>
                                    ))
                                }
                            </FormGroup>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1, py: 0.25}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='subtitle1' component='p'>
                            ??????
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            maxHeight: '24rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            overflowY: 'auto'
                        }}>
                            <FormGroup sx={{mr: -1.5}}>
                                {
                                    types.map((type) => (
                                        <FormControlLabel key={type.id} sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  {type.tag}
                                                              </Typography>
                                                          }/>
                                    ))
                                }
                            </FormGroup>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Paper variant='outlined'
                       sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           mb: 2,
                           p: 2
                       }}>
                    <Typography variant='body2' component='p'>
                        ?????? ?????????????? ??????????
                    </Typography>
                    <AntSwitch inputProps={{'aria-label': 'controlled'}}/>
                </Paper>
                <Paper variant='outlined'
                       sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           mb: 2,
                           p: 2
                       }}>
                    <Typography variant='body2' component='p'>
                        ?????? ?????????????? ?????????? ??????
                    </Typography>
                    <AntSwitch onChange={justDiscount} checked={justDiscountState}
                               inputProps={{'aria-label': 'controlled'}}/>
                </Paper>
                <Paper variant='outlined' sx={{px: 2, py: 1}}>
                    <Typography>????????</Typography>
                    <Slider
                        size='small'
                        min={lowPrice}
                        max={highPrice}
                        value={ranger}
                        onChange={handleChange}
                        disableSwap
                    />
                    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
                        <Typography variant='body2'
                                    component='p'> ????{PN.convertEnToPe(PN.sliceNumber(priceRange.to))}?????????? </Typography>
                        <Typography variant='body2'
                                    component='p'> ????{PN.convertEnToPe(PN.sliceNumber(priceRange.from))} ?????????? </Typography>
                    </Box>
                </Paper>
            </Box>
            <Drawer sx={{display: {xs: 'block', sm: 'block', md: 'none', xl: 'none'}, direction: 'rtl', maxHeight: 100}}
                    open={drawer} anchor='bottom'
                    onClose={drawerClose}>
                <Box sx={{
                    minHeight: 650, maxHeight: 650, overflowY: 'auto', position: 'relative', bgcolor: 'grey.100',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'sticky',
                        top: 0,
                        bgcolor: 'grey.100',
                        zIndex: 999,
                        px: 2.3,
                        py: 1.5
                    }}>
                        <Typography variant='h5' component='h3' sx={{color: '#404040', fontWeight: 600}}>
                            ??????????????
                        </Typography>
                        <ClearIcon onClick={drawerClose} sx={{
                            color: 'rgb(117, 117, 117)',
                            border: 2,
                            borderColor: 'rgb(117, 117, 117)',
                            borderRadius: '50%',
                            fontSize: 18,
                            p: 0.1,
                            mx: 0.5
                        }}/>
                    </Box>
                    <Box sx={{m: 2, mt: 0.5}}>
                        {
                            !(!filter.length)
                            &&
                            <Paper variant='outlined' sx={{px: 3, py: 1.5, mb: 2}}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Typography variant='subtitle1' component='p'>?????????? ?????? ?????????? ??????</Typography>
                                    <Typography variant='body2' component='p'
                                                onClick={removeFilterList}
                                                sx={{color: '#ff3643', cursor: 'pointer'}}>??????</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap', py: 1.5}}>
                                    {
                                        filter.map((tag) => (
                                            <Paper key={tag.id} variant='outlined' sx={{
                                                p: 1,
                                                borderRadius: 5,
                                                borderColor: '#2446f5',
                                                bgcolor: 'rgb(242, 247, 255)'
                                            }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    color: '#2446f5'
                                                }}>
                                                    <Typography variant='body1' component='span'>
                                                        {tag.tagName}
                                                    </Typography>
                                                    <ClearIcon onClick={() => filterRemoveHandler(tag.id)}
                                                               sx={{cursor: 'pointer'}}/>
                                                </Box>
                                            </Paper>
                                        ))
                                    }
                                </Box>
                            </Paper>
                        }
                        <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='subtitle1' component='p'>
                                    ???????? ????????
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{
                                    maxHeight: '24rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    overflowY: 'auto'
                                }}>
                                    <FormGroup sx={{mr: -1.5}}>
                                        {
                                            categories.map((category) => (
                                                <FormControlLabel key={category.id} sx={{m: 0}}
                                                                  control={
                                                                      <Checkbox/>
                                                                  }
                                                                  label={
                                                                      <Typography sx={{userSelect: 'none'}}
                                                                                  variant='body1'
                                                                                  component='p'>
                                                                          {category.name}
                                                                      </Typography>
                                                                  }/>
                                            ))
                                        }
                                    </FormGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='subtitle1' component='p'>
                                    ????????
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{
                                    maxHeight: '24rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    overflowY: 'auto'
                                }}>
                                    <FormGroup sx={{mr: -1.5}}>
                                        {
                                            brands.map((brand) => (
                                                <FormControlLabel key={brand.id} sx={{m: 0}}
                                                                  control={
                                                                      <Checkbox/>
                                                                  }
                                                                  label={
                                                                      <Typography sx={{userSelect: 'none'}}
                                                                                  variant='body1'
                                                                                  component='p'>
                                                                          {brand.pe}
                                                                      </Typography>
                                                                  }/>
                                            ))
                                        }
                                    </FormGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='subtitle1' component='p'>
                                    ??????
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{
                                    maxHeight: '24rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    overflowY: 'auto'
                                }}>
                                    <FormGroup sx={{mr: -1.5}}>
                                        {
                                            types.map((type) => (
                                                <FormControlLabel key={type.id} sx={{m: 0}}
                                                                  control={
                                                                      <Checkbox/>
                                                                  }
                                                                  label={
                                                                      <Typography sx={{userSelect: 'none'}}
                                                                                  variant='body1'
                                                                                  component='p'>
                                                                          {type.tag}
                                                                      </Typography>
                                                                  }/>
                                            ))
                                        }
                                    </FormGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Paper variant='outlined'
                               sx={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',
                                   mb: 2,
                                   px: 2,
                                   py: 1
                               }}>
                            <Typography variant='body2' component='p'>
                                ?????? ?????????????? ??????????
                            </Typography>
                            <AntSwitch inputProps={{'aria-label': 'controlled'}}/>
                        </Paper>
                        <Paper variant='outlined'
                               sx={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',
                                   mb: 2,
                                   px: 2,
                                   py: 1
                               }}>
                            <Typography variant='body2' component='p'>
                                ?????? ?????????????? ?????????? ??????
                            </Typography>
                            <AntSwitch onChange={justDiscount} checked={justDiscountState}
                                       inputProps={{'aria-label': 'controlled'}}/>
                        </Paper>
                        <Paper variant='outlined' sx={{px: 2, py: 1}}>
                            <Typography>????????</Typography>
                            <Slider min={lowPrice} max={highPrice} value={ranger} onChange={handleChange} disableSwap/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography variant='body2' component='p'> ????{priceRange.to}?????????? </Typography>
                                <Typography variant='body2' component='p'> ????{priceRange.from} ?????????? </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    p: 2,
                    borderTop: 1,
                    borderColor: 'rgba(0, 0, 0, 0.12)'
                }}>
                    <Button sx={{flex: '0 0 49%', borderColor: '#404040'}} variant='outlined'>
                        <Typography variant='h6' component='h5' sx={{color: '#404040', fontWeight: 600}}>
                            ?????? ??????????????
                        </Typography>
                    </Button>
                    <Button sx={{flex: '0 0 49%', bgcolor: '#2446f5'}} variant='contained'>
                        <Typography variant='h6' component='h5' sx={{fontWeight: 600}}>
                            ??????????
                        </Typography>
                    </Button>
                </Box>
            </Drawer>
        </Grid>
    )
}
export default ProductsFilter
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
import {useState} from "react";

const ProductsFilter = () => {
    const [appliedFilters, setAppliedFilters] = useState([
        {id: 1, tagName: 'علی'}, {id: 2, tagName: 'ابوالفضل'}, {id: 3, tagName: 'احمدرضا'}
    ])
    const filterRemoveHandler = (id) => {
        setAppliedFilters(appliedFilters.filter((tag) => tag.id !== id))
    }
    const removeFilterList = () => {
        setAppliedFilters([])
    }
    const [drawer, setDrawer] = useState(true);
    const drawerClose = () => {
        setDrawer(false);
    };
    return (
        <Grid item xs={12} sm={12} md={3} xl={3} sx={{position: 'relative'}}>
            <Box sx={{position: 'sticky', top: 15, display: {xs: 'none', sm: 'none', md: 'block', xl: 'block'}}}>
                {
                    !(!appliedFilters.length)
                    &&
                    <Paper variant='outlined' sx={{px: 2, py: 1, mb: 2}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant='subtitle1' component='p'>فیلتر های اعمال شده</Typography>
                            <Typography variant='body2' component='p'
                                        onClick={removeFilterList}
                                        sx={{color: '#ff3643', cursor: 'pointer'}}>حذف</Typography>
                        </Box>
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap', py: 2.5}}>
                            {
                                appliedFilters.map((tag) => (
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
                <Accordion variant='outlined' sx={{borderRadius: 1, mb: 1}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='subtitle1' component='p'>
                            دسته بندی
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
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
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
                            برند
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
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
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
                            نوع
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
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
                                <FormControlLabel sx={{m: 0}}
                                                  control={
                                                      <Checkbox/>
                                                  }
                                                  label={
                                                      <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                  component='p'>
                                                          شیر تازه
                                                      </Typography>
                                                  }/>
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
                        فقط کالاهای موجود
                    </Typography>
                    <Switch inputProps={{'aria-label': 'controlled'}}/>
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
                        فقط کالاهای تخفیف دار
                    </Typography>
                    <Switch inputProps={{'aria-label': 'controlled'}}/>
                </Paper>
                <Paper variant='outlined' sx={{px: 2, py: 1}}>
                    <Typography>قیمت</Typography>
                    <Slider sx={{mb: 2}}/>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='body2' component='p'>از 3,800 تومان</Typography>
                        <Typography variant='body2' component='p'>تا 78,800 تومان</Typography>
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
                            فیلترها
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
                            !(!appliedFilters.length)
                            &&
                            <Paper variant='outlined' sx={{px: 3, py: 1.5, mb: 2}}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Typography variant='subtitle1' component='p'>فیلتر های اعمال شده</Typography>
                                    <Typography variant='body2' component='p'
                                                onClick={removeFilterList}
                                                sx={{color: '#ff3643', cursor: 'pointer'}}>حذف</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap', py: 1.5}}>
                                    {
                                        appliedFilters.map((tag) => (
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
                                    دسته بندی
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
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
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
                                    برند
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
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
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
                                    نوع
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
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
                                        <FormControlLabel sx={{m: 0}}
                                                          control={
                                                              <Checkbox/>
                                                          }
                                                          label={
                                                              <Typography sx={{userSelect: 'none'}} variant='body1'
                                                                          component='p'>
                                                                  شیر تازه
                                                              </Typography>
                                                          }/>
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
                                فقط کالاهای موجود
                            </Typography>
                            <Switch inputProps={{'aria-label': 'controlled'}}/>
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
                                فقط کالاهای تخفیف دار
                            </Typography>
                            <Switch inputProps={{'aria-label': 'controlled'}}/>
                        </Paper>
                        <Paper variant='outlined' sx={{px: 2, py: 1}}>
                            <Typography>قیمت</Typography>
                            <Slider sx={{mb: 2}}/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography variant='body2' component='p'>از 3,800 تومان</Typography>
                                <Typography variant='body2' component='p'>تا 78,800 تومان</Typography>
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
                            حذف فیلترها
                        </Typography>
                    </Button>
                    <Button sx={{flex: '0 0 49%', bgcolor: '#2446f5'}} variant='contained'>
                        <Typography variant='h6' component='h5' sx={{fontWeight: 600}}>
                            اعمال
                        </Typography>
                    </Button>
                </Box>
            </Drawer>
        </Grid>
    )
}
export default ProductsFilter
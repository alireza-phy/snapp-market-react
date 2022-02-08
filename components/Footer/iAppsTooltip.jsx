
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import {tooltipClasses} from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
        ))
        (({ theme }) => ({
[`& .${tooltipClasses.tooltip}`]: {
  backgroundColor: 'white',
  color: 'rgba(0, 0, 0, 0.87)',
  boxShadow:'rgb(0 0 0 / 16%) 0px 2px 8px 0px',
  borderRadius: '0.5rem',
  border: '0.5px solid rgb(230, 230, 230)',
  width: 'max-content'
 
},
}));

export default function TriggersTooltips() {
        const [open, setOpen] = React.useState(false);
      
        const handleTooltipClose = () => {
          setOpen(false);
        };
        const handleTooltipOpen = () => {
            setOpen(true);
          };

return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
            <HtmlTooltip  placement="top"   arrow  PopperProps={{disablePortal: true,}} onClose={handleTooltipClose} open={open}
              title={
                <Stack direction="row" spacing={5} >
                    {"50% کد اشتراک تخفیف با"}
                <Typography color="blue">ism</Typography>
                  <Button variant="contained" sx={{width:110,height:30,background:'#052cf00f', color:'#052cf0', fontSize:'12px',marginRight:5}} href='https://iapps.ir/app/%D8%A7%D8%B3%D9%86%D9%BE-%D9%85%D8%A7%D8%B1%DA%A9%D8%AA-Snapp-Market/57404100'>
                      دریافت از آی اپس
                  </Button>
                  
                </Stack>
              }>
                        <img onClick={handleTooltipOpen} style={{width:125,height:40,margin:5}}   src='https://snapp.market/v2/static/images/b73e78b6652ebf0b5c4034fd17b91933.png' alt=''></img>

                  </HtmlTooltip>   
        </div>
    </ClickAwayListener>
);
}
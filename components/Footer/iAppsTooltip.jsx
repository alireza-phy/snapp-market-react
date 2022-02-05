
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import {tooltipClasses} from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const HtmlTooltip = styled(({ className, ...props }) => (
    <HtmlTooltip {...props} classes={{ popper: className }} />
        ))
        (({ theme }) => ({
[`& .${tooltipClasses.tooltip}`]: {
  backgroundColor: '#f5f5f9',
  color: 'rgba(0, 0, 0, 0.87)',
  maxWidth: 220,
  fontSize: theme.typography.pxToRem(12),
  border: '1px solid #dadde9',
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
            <HtmlTooltip placement="top"   arrow    PopperProps={{disablePortal: true,}} onClose={handleTooltipClose} open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="50% کد تخفیف اشتراک با ism" >
                    {/* // <React.Fragment>
                    //     <Typography color="white">50% کد تخفیف اشتراک با ism</Typography>
                    //     <button>دریافت از آی اپس
                    //         <a href='https://iapps.ir/app/%D8%A7%D8%B3%D9%86%D9%BE-%D9%85%D8%A7%D8%B1%DA%A9%D8%AA-Snapp-Market/57404100'></a>
                    //     </button>
                    // </React.Fragment>}   */}
                  
                 <img onClick={handleTooltipOpen} style={{width:125,height:40,margin:5}}   src='https://snapp.market/v2/static/images/b73e78b6652ebf0b5c4034fd17b91933.png' alt=''></img>
            </HtmlTooltip>
        </div>
    </ClickAwayListener>
)
}
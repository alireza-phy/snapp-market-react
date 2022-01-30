import {Drawer, List, ListItem, ListItemText} from "@mui/material"

const SlideDrawer = (props) => {
    const {open, onClose} = props;
    const  listItem =['لبنیات', 'خواربار نان', 'دستمال و شوینده','تنقلات' ,'نوشیدنی', '', '', '', '', '', ''] ;
  return(
      <Drawer anchor="top" open={open} onClose={() => onClose(false)}>
          <List component="nav">
              {listItem.map((item, index) => (
              <ListItem button key={item} >
                    <ListItemText primary={item} />
              </ListItem>
                  ))}
          </List>
      </Drawer>
  );
};

export default SlideDrawer;
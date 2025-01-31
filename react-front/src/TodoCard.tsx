import {Chip, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import {Mood, MoodBad} from '@mui/icons-material';

const TodoCard= (props: any) => {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 10 }}>
            <Chip 
            color={props.done ? "success": "error"} 
            icon={props.done ? <Mood/>: <MoodBad/>}
            label={props.id}/>
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {props.title}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {String(props.done)}
          </Typography>
        </CardContent>
        <CardActions>
          {!props.done ? <Button size="small">Mark as Done</Button> : null}
        </CardActions>
      </Card>
    );
  }
export default TodoCard;
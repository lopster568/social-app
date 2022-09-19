import { Avatar, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AuthorHeader = ({ author, subtitle, setAnchor, noAction }) => {
    return (
        <CardHeader
            avatar={
                author?.avatar ? (
                    <Avatar aria-label="recipe" src={author?.avatar} />
                ) : (
                    <Avatar sx={{ bgcolor: `red`}} aria-label="recipe">
                        {author?.displayName?.charAt(0)}
                    </Avatar>
                )
            }
            action={
                noAction ? null : (
                    <IconButton aria-label="settings" onClick={(e) => setAnchor(e.currentTarget)} >
                        <MoreVertIcon />
                    </IconButton>
                )
            }
            title={author?.displayName}
            subheader={subtitle}
        />
    )
}

export default AuthorHeader
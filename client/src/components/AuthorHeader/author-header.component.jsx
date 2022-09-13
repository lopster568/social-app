import { Avatar, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AuthorHeader = ({ author: { displayName, avatar }, subtitle, setAnchor, noAction }) => {
    return (
        <CardHeader
            avatar={
                avatar ? (
                    <Avatar aria-label="recipe" src={avatar} />
                ) : (
                    <Avatar sx={{ bgcolor: `red`}} aria-label="recipe">
                        {displayName.charAt(0)}
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
            title={displayName}
            subheader={subtitle}
        />
    )
}

export default AuthorHeader
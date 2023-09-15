import { Box, Tooltip, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
    return (
        <Box textAlign={"center"} padding={1} marginBottom={0} bgcolor= "#0e67b4">
            <Tooltip title="GitHub Source Code">
                <a href="https://github.com/SSukhmanpreet/MyAnimeDB" target="_blank" rel="noreferrer noopener">
                <img className="LogoImage" src="/GitHub-Emblem.png" alt="Logo" height={40}/>
                </a>
            </Tooltip>
                <Typography marginTop={-2} marginBottom={-1} color={"white"} fontFamily={"Poppins"} fontWeight={400}>
                <h4>Made with <FavoriteIcon sx={{marginBottom: '-5px', color: 'red'}}/> By Sukhmanpreet Singh</h4>
            </Typography>
        </Box>
    )
}
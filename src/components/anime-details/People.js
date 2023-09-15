import { MovieCreation, PhotoCamera } from '@mui/icons-material';
import { Typography, Box, Tooltip } from "@mui/material";

export default function People(props){

    return(
        <Box>
            <Typography variant="h6" fontFamily={"Poppins"} fontWeight={600} textAlign="left" margin={"2px"}> 
                Directed By:
            </Typography>

            <Typography variant="body1" display="flex" alignItems="left" margin={"2px"} fontFamily={"Poppins"} fontWeight={400}>
                <Tooltip title="Directed By">
                    <PhotoCamera htmlColor="darkblue" />
                </Tooltip>
                <span>{
                    `\u00A0 ${ props.director }`
                }</span>
            </Typography>


            <Typography variant="h6" textAlign="left" margin={"2px"} fontFamily={"Poppins"} fontWeight={600}> 
                Produced By:
            </Typography>

            <Typography variant="body1" display="flex" alignItems="left" margin={"2px"} fontFamily={"Poppins"} fontWeight={400}>
                <Tooltip title="Produced By">
                    <MovieCreation htmlColor="darkblue" />
                </Tooltip>
                <span>{
                    `\u00A0${ props.producer }`
                }</span>
            </Typography>
        </Box>
    )
}
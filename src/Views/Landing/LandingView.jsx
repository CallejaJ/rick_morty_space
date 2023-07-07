import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import spacialbg from '../../assets/spacialbg.webp';
import blackhole from '../../assets/blackhole.gif'


export default function LandingView() {

    return (
        <Box
            sx={
                {
                    position: "relative",
                    backgroundImage: `url(${spacialbg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    width: "100%",
                }}
        >

            <Box
                sx={{
                    position: "absolute",
                    bottom: "35%",
                    left: "43%",
                }}
            >
                <Link to="/login">
                    <img src={blackhole} />
                </Link>
            </Box>



        </Box >

    );
}
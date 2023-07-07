import { Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import background2 from '../../assets/background2.webp';
import { Box } from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";



export default function CharsView({
    chars,
    page,
    totalPages,
    onChange,
    onSearch,
    searchValue
}) {

    return (

        // <div>
        //     {personajes ? personajes.results.map(({ name, id, gender, image }) => {
        //         return (
        //             <Card gender={gender} name={name} image={image} key={id}
        //             />
        //         )
        //     }
        //     ) : <p>Cargando...</p>}
        // </div>
        <>
            <Box
                sx={
                    {
                        position: "absolute",
                        backgroundImage: `url(${background2})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        minHeight: "100vh",
                        width: "100%",
                    }}


            >
                <SearchBar onChange={onSearch} value={searchValue} />
                <Grid container marginTop={2} marginBottom={4} padding={2} spacing={2}>
                    {chars?.results.map((chars) => {
                        const { name, image, id, status } = chars;
                        return (
                            <Grid item key={id} xs={6} md={3}   >
                                <Card spacing={5} id={id} name={name} image={image} status={status} />
                            </Grid >
                        );
                    })}
                </Grid>

                <Box marginBottom={4}>
                    <Pagination totalPages={totalPages} page={page} onChange={onChange} />
                </Box>
            </Box >
        </>
    );
}
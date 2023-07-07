import { Pagination as MUIpagination } from '@mui/material';
import Stack from '@mui/material/Stack';


export default function Pagination({ totalPages, page, onChange }) {



    return (
        <Stack spacing={3} color="primary" alignItems={'center'} justify={'center'}>
            <MUIpagination count={totalPages} page={page} onChange={onChange} />
        </Stack>
    );
}
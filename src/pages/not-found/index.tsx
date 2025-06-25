import { Box, Container, Typography } from '@mui/material';

const NotFoundPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: 'center',
                        py: 8,
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                            fontWeight: 400,
                            color: '#333333',
                            mb: 3,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        404 - Page Not Found
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.125rem' },
                            fontWeight: 400,
                            color: '#666666',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Sorry, the page your looking for doesnt exist.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default NotFoundPage;

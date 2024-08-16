import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from "@mui/material";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard Saas
          </Typography>
          <Button color="inherit">
            <Link sx={{color:'white'}} href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link sx={{color:'white'}} href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant='h4'>Sign In</Typography>
        <SignIn></SignIn>
      </Box>
    </Container>
  );
}

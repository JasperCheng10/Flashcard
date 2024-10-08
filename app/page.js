import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";

// test 2 
export default function Home() {
  return (
    <Container maxWidth="100vw"  sx={{
      //backgroundColor: '#636363', 
      //backgroundColor: '#white',
      //background: 'linear-gradient(45deg, #76c7e1, #40a4d8, #1e81ce)',
      //backgroundColor: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
      //background: 'linear-gradient(45deg, #1e4a78, #1e81ce, #76c7e1)',
      background: 'linear-gradient(45deg, #0a3b5d, #11698e, #1fb2cc)',
      //padding: 2, 
      color: 'white', 
      height: '120vh',
      width: '100vw',
    }}>
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
        
      </Head>

      <AppBar position="static" sx={{background:'linear-gradient(180deg, #000000 55%, #4d4d4d)', top: 0, borderRadius: 2}}>

        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            Flashcard Saas
          </Typography>

          <SignedOut>
            <Button sx={{ color: "inherit" }} href='/sign-in'>Log In</Button>
            <Button sx={{ color: "inherit" }} href='/sign-up'>Sign Up</Button>
          </SignedOut>

          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
          //my: 4,
          color: "white",
          mt: 15, // Top margin
          mb: 15, // Bottom margin
        }}
      >
        <Typography variant="h2" gutterBottom>Welcome to Flashcard Saas</Typography>
        <Typography variant="h5" gutterBottom>
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant='contained' sx={{mt:2, backgroundColor: 'black', color: '#ffffff','&:hover': {backgroundColor: 'gray',}, }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Paper 
            sx = {{
              background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
              p: 2, 
              borderColor: 'white',
              border: "1px solid",
              borderRadius: 2,
              color: "white",
              }}
            > 
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {" "}
              Simple put your text and let our software do the rest. Creating
              flashcards has never been easier
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper 
            sx = {{
              background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
              p: 2, 
              borderColor: 'white',
              border: "1px solid",
              borderRadius: 2,
              color: "white",
              }}
            > 
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {" "}
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper 
            sx = {{
              background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
              p: 2, 
              borderColor: 'white',
              border: "1px solid",
              borderRadius: 2,
              color: "white",
              }}
            > 
            <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              {" "}
              Acess your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center", padding:4, paddingBottom: 4, }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Pricing</Typography> 
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                color: "white",
                background: 'linear-gradient(45deg, #ff7e5f, #feb47b)'
              }}
            >
              <Typography variant="h5"gutterBottom>Basic</Typography>
              <Typography variant="h6" gutterBottom>$5 / month</Typography>
              <Typography>
                {" "}
                Access to basic flashcard Features and limited storage.
              </Typography>
              <Button variant='contained' sx={{mt:2, backgroundColor: 'black', color: '#ffffff','&:hover': {backgroundColor: 'gray',}, }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                color: "white",
                background: 'linear-gradient(45deg, #ff7e5f, #feb47b)'
              }}
            >
              <Typography variant="h5"gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$10 / month</Typography>
              <Typography>
                {" "}
                Unlimited flashcard amd storage, with priority support.
              </Typography>
              <Button variant='contained' sx={{mt:2, backgroundColor: 'black', color: '#ffffff','&:hover': {backgroundColor: 'gray',}, }}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

"use client"

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

import { useSearchParams } from 'next/navigation'

import { 
    Box, 
    CardActionArea, 
    Dialog, 
    DialogContent, 
    Paper, 
    //TextField, 
    Typography, 
    Button,
    Container,
    Grid,
    //CardContent,
    DialogTitle,
    DialogContentText,
    DialogActions,
    Card,
    //Paper,
    CardContent,
    TextField, 
} from '@mui/material'

export default function flashcard() {

    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState(false)   

    const [searchParams, setSearchParams] = useSearchParams()   
    const search = searchParams.get('id')


    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return 
                const colRef = doc(collection(db, 'users', user.id, search))
                const docs = await getDocs(docRef)
                const flashcards = []
            
                docs.forEach(doc => {
                    flashcards.push({id: doc.id, ...doc.data()})
                })
            setFlashcards(flashcards)
        }
        getFlashcard()
    },[user, searh]) //  run once

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    if (!isLoaded || !isSignedIn) {
        return null //maybe change to <></>
    }

    return (
        <Container maxWidth="100vw">
            <Grid container spacing={3} sx={{ mt: 4 }}>
                
        {flashcards.length > 0 && (
        <Box sx={{mt:4}}>
            <Typography variant="h5">Flashcards Preview</Typography>
            <Grid container spacing={3}>
                {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardActionArea
                            onClick={() => handleCardClick(index)}
                        >
                            <Cardcontent>
                                <Box sx={{
                                   perspective: '1000px',
                                   '& >div': { 
                                        transition: 'transform 0.6s',
                                        transformStyle: 'preserve-3d',
                                        position: 'relative',
                                        width: '100%',
                                        height: '200px',
                                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                        transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    },
                                    '& >div > div': { 
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backfaceVisibility: 'hidden',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 2,
                                        boxSizing: border-box,
                                    },
                                    '& >div >div:nth-of-type(2)': {
                                        transform: 'rotateY(180deg)',
                                    },
                                }}>
                                    <div>
                                        <Typography variant='h5' component='div'>
                                            {flashcard.front}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant='h5' component='div'>
                                            {flashcard.back}
                                        </Typography>
                                    </div>
                                </Box>
                            </Cardcontent>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{mt: 4, display: 'flex', justifyContent: 'center'}}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOpen}
                >
                    Save 
                </Button>
            </Box>
        </Box>   
        )}
            </Grid>
        </Container>
    )
}
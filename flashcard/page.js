"use client"

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

import { useSearchParams } from 'next/navigation'

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
                {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {flipped[flashcard.id] ? flashcard.back : flashcard.front}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
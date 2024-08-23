'use cleint'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

import {collection, doc, getDoc, setDoc} from 'firebase/firestore'
import {db} from 'firebase/firestore'
import { Router, useRouter } from 'next/router'
import { Card, Container, Typography } from '@mui/material'

export default function Flashcards() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return 
                const docRef = doc(collection(db, 'users', user.id))
                const docSnap = await getDoc(docRef)
            
            if (docSnap.exists()) {
                const collection = docSnap.data().flashcards || []
                setFlashcards(collection)
                
                
            }
            else 
            {
                await setDoc(docRef, {flashcards: []})
            } 
        }
        getFlashcards()
    },{user}) //  run once

    if(!isLoaded || !isSignedIn) {
        return null
    }

    const handleCardClick = (id) => {
        router.push(`/flashcards?id=${id}`)
    }

    return(
        <Container maxWidth="100vw">
            <Grid Container spacing={3} sx={{
                mt:4
            }}
            >
                {flashcards.map((flashcard, index) sx=>{{
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CartactionArea 
                                onClick={() => 
                                    handleCardClick(flashcard.id)}>

                                <CardContent>
                                    <Typography variant="h6">
                                        {flashcard.name}
                                    </Typography>
                                </CardContent>

                            </CartactionArea>
                        </Card>

                    </Grid>
                }}
            
            </Grid>

        </Container>

    )

    
}
"use client"

import { useUser } from '@clerk/nextjs'
import { Box, CardActionArea, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Generate() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter

    const handleSubmit=async ()=>{
        fetch('api/generate', {
            method: 'POST',
            body: text,
        }).then((res) => res.json())
        .then(data > setFlashcards(data))
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev(id),
        }))
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const saveFlashcard = async () => {
        if (!name) {
            alert("Please enter name")
            return
        }
        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(userDocRef)

        if (docSnap.exists()){
            const collection = docSnap.data().flashcards || []
            if (collection.find((f) => f.name === name)) {
                alert("Flashcard collection with the same name already exist.")
                return
            } else {
                collection.push({name})
                batch.set(userDocRef, {flashcards: collections}, {merge: true})
            }
        } else{
            batch.set(userDocRef, {flashcards: [{name}]})
        }

        const colRef = collection(useDocRef, name)
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, flashcard)
        })

        await batch.commit()
        handleClose()
        router.push('/flashcards')
    }
    
    return <Contrainer maxwidth="md">
        <Box sx={{
            mt: 4, mb: 6, display: 'flex', alignItems: 'center'
        }}>
            <Typography variant="h4" Generate Flashcards></Typography>
            <Paper sx={{p:4, width: '100%'}}>
                <TextField
                    value = {text}
                    onChange={(e) => setText(e.target.value)} label="Text" multiline rows={4} fullWidth variant="outlined" sx={{mb: 2}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{mt: 2}}
                    fullWidth
                    submittype="submit"
                >
                    Submit 
                </Button>
            </Paper>


        </Box>
    
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

                                <Box><div></div><Typography></Typography></Box>

                            </Cardcontent>

                        </CardActionArea>
                       
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                sx={{mt: 2}}
            >
                Save
            </Button>

        </Box>   
        )}

    </Contrainer>
        
} 
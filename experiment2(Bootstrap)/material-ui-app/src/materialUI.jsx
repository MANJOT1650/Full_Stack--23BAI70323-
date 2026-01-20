import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  Snackbar,
  Alert,
  Container,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fade
} from "@mui/material"
import { styled } from "@mui/material/styles"
import SendIcon from "@mui/icons-material/Send"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"

const HoverCard = styled(Card)({
  background: "linear-gradient(135deg, #2b1055, #b3005e)",
  color: "white",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 0 20px #b3005e"
  }
})

export default function MaterialUI() {
  const [name, setName] = useState("")
  const [uid, setUid] = useState("")
  const [choice, setChoice] = useState("")
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)

  const submit = () => {
    if (!name || !uid || !choice) return
    setData([...data, { name, uid, choice }])
    setName("")
    setUid("")
    setChoice("")
    setOpen(true)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0c29" }}>
      <AppBar position="static" sx={{ background: "#1f0036" }}>
        <Toolbar>
          <Typography variant="h6">User Preference Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Fade in timeout={800}>
              <HoverCard>
                <CardContent>
                  <Typography variant="h5">User Information</Typography>

                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    sx={{ mt: 2 }}
                    InputLabelProps={{ style: { color: "white" } }}
                  />

                  <TextField
                    fullWidth
                    label="UID"
                    value={uid}
                    onChange={e => setUid(e.target.value)}
                    sx={{ mt: 2 }}
                    InputLabelProps={{ style: { color: "white" } }}
                  />

                  <TextField
                    select
                    fullWidth
                    label="Preference"
                    value={choice}
                    onChange={e => setChoice(e.target.value)}
                    sx={{ mt: 2 }}
                    InputLabelProps={{ style: { color: "white" } }}
                  >
                    <MenuItem value="Car">Cars</MenuItem>
                    <MenuItem value="Bike">Bikes</MenuItem>
                  </TextField>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={submit}
                    sx={{ background: "#ff0055" }}
                  >
                    Save
                  </Button>
                </CardActions>
              </HoverCard>
            </Fade>
          </Grid>

          <Grid item xs={12} md={7}>
            <Fade in timeout={1200}>
              <Card sx={{ background: "#1a1a2e", color: "white" }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Saved Records
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: "white" }}>Name</TableCell>
                        <TableCell sx={{ color: "white" }}>UID</TableCell>
                        <TableCell sx={{ color: "white" }}>Cars</TableCell>
                        <TableCell sx={{ color: "white" }}>Bikes</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {data.map((row, i) => (
                        <TableRow key={i}>
                          <TableCell sx={{ color: "white" }}>{row.name}</TableCell>
                          <TableCell sx={{ color: "white" }}>{row.uid}</TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {row.choice === "Car" && <DirectionsCarIcon />}
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {row.choice === "Bike" && <TwoWheelerIcon />}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={open} autoHideDuration={2500} onClose={() => setOpen(false)}>
        <Alert severity="success">Saved Successfully</Alert>
      </Snackbar>
    </div>
  )
}

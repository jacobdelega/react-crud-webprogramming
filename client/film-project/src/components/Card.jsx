import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ tech, desc, img, learnMoreLink }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 120, width:200 }} image={img} title='' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {tech}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' href={learnMoreLink} target="_blank">Learn More</Button>
            </CardActions>
        </Card>
    );
}

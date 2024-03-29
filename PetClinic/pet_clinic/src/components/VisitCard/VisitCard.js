import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function VisitCard({visit}) {
        // shows only upcoming visits, therefore today and later.
        const currentDate = new Date();
        if (currentDate.getTime() > Date.parse(visit.date)) {
            return;
        }
        else {
            return (
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography>
                                Pet ID: {visit.petId}
                            </Typography>
                            <Typography>
                                Date: {visit.date}
                            </Typography>
                            <Typography>
                                Comment: {visit.comment}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        }
}
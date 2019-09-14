import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import { Grid, Card } from '@material-ui/core';

const ComponentStories = ({ children, syntax }) => {
    return (
        <Grid item sm={6}>
            <Card style={{ padding: '15px' }}>
                <Grid container spacing={24}>
                    <Grid item sm={12}>
                        {children}
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item sm={12}>
                        <SyntaxHighlighter language='javascript' style={atomDark}>
                            {syntax}
                        </SyntaxHighlighter>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}
export default ComponentStories;
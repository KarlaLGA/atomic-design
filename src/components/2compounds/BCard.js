import {Card, CardContent} from '@material-ui/core'
import React from 'react'
import BFlex from '../4templates/BFlex'

export default function BCard(props) {
    return (

        <Card style={{height: props.height}}>
            <CardContent style={{height: '100%', boxSizing: 'border-box'}}>
                <BFlex>
                    {props.children}
                </BFlex>
            </CardContent>
        </Card>

    )
}

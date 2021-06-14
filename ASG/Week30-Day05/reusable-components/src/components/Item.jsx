import React from 'react'
import {Button, Card} from 'react-bootstrap'

const Item = ({data}) => {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.first}</Card.Title>
                    <Card.Title>{data.second}</Card.Title>
                    <Card.Text>
                       {data.third}
                    </Card.Text>
                    <Button variant="primary">{data.fourth}</Button>
                </Card.Body>
            </Card>
            <hr />
        </div>
    )
}

export default Item

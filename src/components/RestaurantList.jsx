import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "antd";

function RestaurantList(){
    const [restaurants, setRestaurants] = useState();
    useEffect(() =>{
        //fetch our API
        fetch('https://my-first-firestore-sks.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data)) // data -> restaurants
        .catch(console.error)
    }, [])
    return (
        <section>
            <Row gutter={16}>
            {!restaurants
            ? <h2>Loading...</h2>
            : restaurants.map(restaurant => (
                <Col style={{ width: '300px'}} key={restaurant.id}>
                    <Card
                    title={restaurant.name}
                    hoverable
                    >
                        <p >{restaurant.address}</p>
                    </Card>
                
                </Col>
            )

                // don't forget the key
            )}
            </Row>
        </section>
    )
}

export default RestaurantList;
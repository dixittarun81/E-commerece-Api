import React from 'react';
import Layout from '../../components/Layout';
import { Jumbotron } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <Layout>
                <Jumbotron style={{margin:'5rem',backgroundColor:'#fff'}} className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio deleniti, eveniet labore ea deserunt voluptates, quibusdam impedit praesentium voluptatum optio veniam repudiandae dicta officiis cupiditate sunt. Modi, optio quibusdam.
                    </p>
                </Jumbotron>

            </Layout>

        </div>
    )
}

import { Button, Alert } from "reactstrap";
import Layout from '../components/Layout';
export default() => {
    return (
        <Layout>
            <div>
                <Alert color="primary">
                    Hello project is strapi-next with bootstrap 
                </Alert>
                &nbsp; <Button color="primary">Hello from nextjs</Button>

            </div>
        </Layout>
    )
}
<<<<<<< HEAD
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
=======
/* pages/index.js */
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout"

export default () => {  
  return (
    <Layout>
      <div>
        <Alert color="primary">
          Hello Project is strapi-next with Bootstrap
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  );
};
>>>>>>> 7bb95b717e124b55b8666e670c634099e07ddcb3
